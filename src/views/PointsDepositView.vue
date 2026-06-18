<script setup lang="ts">
import {
  ArrowLeftOutlined,
  CheckCircleFilled,
  CloseCircleFilled,
  FileTextOutlined,
  SearchOutlined,
  UserOutlined,
  WalletOutlined,
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { computed, onBeforeUnmount, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import {
  getApiMemberV1Members,
  getApiTicketV1TicketsById,
  postApiWalletV1AccountsDeposit,
  postApiWalletV1AccountsDepositPreview,
  putApiTicketV1TicketsApprove,
  putApiTicketV1TicketsReject,
  type GetApiMemberV1MembersResponse,
  type GetApiTicketV1TicketsByIdResponse,
  type PostApiWalletV1AccountsDepositPreviewResponse,
} from '@/services/basis/basis'
import { useOrgScopeStore } from '@/stores/orgScope'
import { normalizeUrl } from '@/utils'

type ApiMember = NonNullable<GetApiMemberV1MembersResponse['members']>[number]
type ApiTicket = NonNullable<GetApiTicketV1TicketsByIdResponse['ticket']>
type PreviewResult = PostApiWalletV1AccountsDepositPreviewResponse
type JsonRecord = Record<string, unknown>
type DepositStep = 'member' | 'deposit'
type ReviewAction = 'approve' | 'reject'

interface PreviewStat {
  label: string
  tone?: 'good' | 'warning'
  value: string
}

interface SegmentView {
  deposit: string
  draw: string
  key: string
  range: string
  source: string
}

const MEMBER_PAGE_SIZE = 20
const MEMBER_SEARCH_DELAY = 280

const router = useRouter()
const orgScopeStore = useOrgScopeStore()

const members = ref<ApiMember[]>([])
const selectedMember = ref<ApiMember | null>(null)
const memberSearch = ref('')
const memberLoading = ref(false)
const memberError = ref('')
const totalMembers = ref(0)
const currentStep = ref<DepositStep>('member')
const pointsInput = ref('')
const preview = ref<PreviewResult | null>(null)
const previewKey = ref('')
const previewLoading = ref(false)
const submitLoading = ref(false)
const submittedTicket = ref<ApiTicket | null>(null)
const submittedTicketId = ref('')
const ticketLoading = ref(false)
const ticketError = ref('')
const reviewRemark = ref('')
const auditingAction = ref<ReviewAction | ''>('')

let memberRequestId = 0
let ticketRequestId = 0
let memberSearchTimer: number | undefined

const selectedScope = computed(() => orgScopeStore.selected)
const selectedScopeKey = computed(() => {
  const scope = selectedScope.value
  if (!scope) return ''

  return `${scope.merchantId}:${scope.storeId}`
})
const selectedMemberId = computed(() => normalizeText(selectedMember.value?.id))
const normalizedPoints = computed(() => normalizeIntegerText(pointsInput.value))
const currentDepositKey = computed(() => {
  const scope = selectedScope.value

  return [
    normalizeText(scope?.merchantId),
    normalizeText(scope?.storeId),
    selectedMemberId.value,
    normalizedPoints.value,
  ].join(':')
})
const canPreview = computed(() =>
  Boolean(selectedScope.value && selectedMemberId.value && Number(normalizedPoints.value) > 0),
)
const canOpenDepositStep = computed(() => Boolean(selectedMemberId.value))
const canConfirmDeposit = computed(
  () =>
    Boolean(preview.value?.canSubmit) &&
    previewKey.value === currentDepositKey.value &&
    !submittedTicketId.value &&
    !submittedTicket.value &&
    !submitLoading.value,
)
const isTicketCardVisible = computed(() =>
  Boolean(submittedTicket.value || submittedTicketId.value || ticketLoading.value || ticketError.value),
)
const ticketStatus = computed(() => normalizeStatus(submittedTicket.value?.status))
const canAuditTicket = computed(() => ticketStatus.value === 'pending' && !ticketLoading.value)
const ticketStatusConfig = computed(() => getTicketStatusConfig(submittedTicket.value))
const currentScopeText = computed(() => {
  const scope = selectedScope.value
  if (!scope) return '暂无可用门店'

  return `${scope.merchantName} / ${scope.storeName}`
})

const stepItems = computed(() => [
  {
    id: 'member' as const,
    label: '选择会员',
    meta: selectedMember.value ? selectedMemberTitle.value : `${totalMembers.value || members.value.length || 0} 位启用`,
    state: selectedMember.value ? 'is-complete' : '',
  },
  {
    id: 'deposit' as const,
    label: '输入积分',
    meta: preview.value ? `${formatPoints(preview.value.depositPoints)} 可存入` : normalizedPoints.value ? `${formatPoints(normalizedPoints.value)} 原始` : '待输入',
    state: preview.value?.canSubmit ? 'is-complete' : '',
  },
])

const selectedMemberTitle = computed(() =>
  selectedMember.value ? getMemberName(selectedMember.value) : '未选择会员',
)
const selectedMemberSubtitle = computed(() => {
  const member = selectedMember.value
  if (!member) return '请先从会员列表中选择'

  return [member.phone, member.level?.levelName].map(normalizeText).filter(Boolean).join(' · ') || '启用会员'
})

const previewStats = computed<PreviewStat[]>(() => {
  const result = preview.value
  if (!result) return []

  return [
    {
      label: '原始积分',
      value: formatPoints(result.originalPoints),
    },
    {
      label: '实际存入',
      tone: 'good',
      value: formatPoints(result.depositPoints),
    },
    {
      label: '未存入',
      tone: Number(result.undepositedPoints) > 0 ? 'warning' : undefined,
      value: formatPoints(result.undepositedPoints),
    },
    {
      label: '抽奖次数',
      value: formatPoints(result.drawChanceCount),
    },
  ]
})

const previewSegments = computed<SegmentView[]>(() =>
  (preview.value?.exchangeSegments ?? []).map((segment, index) => ({
    deposit: [
      `${formatPoints(segment.depositPoints)}积分`,
      formatExchangeRatio(segment.depositExchangePoints, '积分'),
      formatRemainder(segment.depositRemainderPoints),
    ]
      .filter(Boolean)
      .join(' · '),
    draw: [
      `${formatPoints(segment.drawChanceCount)}次`,
      formatExchangeRatio(segment.drawExchangePoints, '次'),
      formatRemainder(segment.drawRemainderPoints),
    ]
      .filter(Boolean)
      .join(' · '),
    key: `${segment.minPoints ?? 'min'}-${segment.maxPoints ?? 'max'}-${index}`,
    range: formatSegmentRange(segment.minPoints, segment.maxPoints),
    source: formatPoints(segment.sourcePoints),
  })),
)

const ticketDetails = computed(() => {
  const ticket = submittedTicket.value
  const entity = parseJsonRecord(ticket?.entityJson)

  if (!ticket && !preview.value) return []

  return filterDetails([
    {
      label: '会员',
      value: getTicketMemberText(ticket, entity),
    },
    {
      label: '工单ID',
      value: normalizeText(ticket?.id) || submittedTicketId.value || '--',
    },
    {
      label: '原始积分',
      value: getEntityPointsText(entity, ['originalPoints', 'original_points']) || formatPoints(preview.value?.originalPoints),
    },
    {
      label: '实际存入',
      value: getEntityPointsText(entity, ['depositPoints', 'deposit_points', 'points']) || formatPoints(preview.value?.depositPoints),
    },
    {
      label: '未存入',
      value:
        getEntityPointsText(entity, ['undepositedPoints', 'undeposited_points']) ||
        formatPoints(preview.value?.undepositedPoints),
    },
    {
      label: '抽奖次数',
      value:
        getEntityPointsText(entity, ['drawChanceCount', 'draw_chance_count']) ||
        formatPoints(preview.value?.drawChanceCount),
    },
    {
      label: '创建时间',
      value: formatDateTime(ticket?.createdAt),
    },
  ])
})

const ticketTitle = computed(() => {
  const memberText = getTicketMemberText(submittedTicket.value, parseJsonRecord(submittedTicket.value?.entityJson))
  if (memberText && memberText !== '--') return `${memberText} 积分存入`

  return '积分存入工单'
})

function normalizeText(value: unknown) {
  if (value === undefined || value === null) return ''

  return String(value).trim()
}

function normalizeStatus(value: unknown) {
  return normalizeText(value).toLowerCase()
}

function normalizeIntegerText(value: unknown) {
  return normalizeText(value).replace(/[^\d]/g, '').replace(/^0+(?=\d)/, '')
}

function isRecord(value: unknown): value is JsonRecord {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value)
}

function parseJsonRecord(value: unknown) {
  if (isRecord(value)) return value

  const text = normalizeText(value)
  if (!text) return null

  try {
    const parsed = JSON.parse(text) as unknown

    return isRecord(parsed) ? parsed : null
  } catch {
    return null
  }
}

function pickRecordText(record: JsonRecord | null, keys: string[]) {
  if (!record) return ''

  for (const key of keys) {
    const text = normalizeText(record[key])

    if (text) return text
  }

  return ''
}

function filterDetails(details: Array<{ label: string; value: string }>) {
  return details.filter((detail) => detail.value && detail.value !== '--')
}

function formatPoints(value: unknown) {
  const text = normalizeText(value)
  if (!text) return '--'

  const numberValue = Number(text.replace(/,/g, ''))
  if (!Number.isFinite(numberValue)) return text

  return new Intl.NumberFormat('zh-CN', {
    maximumFractionDigits: 0,
  }).format(numberValue)
}

function formatExchangeRatio(value: unknown, unit: string) {
  const text = normalizeText(value)
  const numberValue = Number(text)
  if (!text || !Number.isFinite(numberValue) || numberValue <= 0) return ''

  return `${formatPoints(text)}:1${unit}`
}

function formatRemainder(value: unknown) {
  const text = normalizeText(value)
  const numberValue = Number(text)
  if (!text || !Number.isFinite(numberValue) || numberValue <= 0) return ''

  return `余${formatPoints(text)}`
}

function formatSegmentRange(minValue: unknown, maxValue: unknown) {
  const minText = normalizeText(minValue) || '0'
  const maxText = normalizeText(maxValue)
  const maxNumber = Number(maxText)

  if (!maxText || maxNumber === 0) return `${formatPoints(minText)}以上`

  return `${formatPoints(minText)}-${formatPoints(maxText)}`
}

function formatDateTime(value?: string) {
  const text = normalizeText(value)
  if (!text) return '--'

  const date = new Date(text.replace(' ', 'T'))
  if (Number.isNaN(date.getTime())) return text

  return date.toLocaleString('zh-CN', {
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

function getMemberName(member: ApiMember) {
  return normalizeText(member.nickname) || normalizeText(member.phone) || normalizeText(member.id) || '未命名会员'
}

function getMemberMeta(member: ApiMember) {
  return [member.phone, member.level?.levelName, `${formatPoints(member.currentPoints)}积分`]
    .map(normalizeText)
    .filter(Boolean)
    .join(' · ')
}

function normalizeMemberAvatarUrl(member: ApiMember) {
  return normalizeUrl(normalizeText(member.avatarUrl))
}

function getTicketStatusConfig(ticket: ApiTicket | null) {
  const status = normalizeStatus(ticket?.status)

  if (status === 'approved') {
    return {
      label: '已通过',
      tone: 'done',
    }
  }

  if (status === 'rejected') {
    return {
      label: '已驳回',
      tone: 'rejected',
    }
  }

  if (status === 'cancelled') {
    return {
      label: '已取消',
      tone: 'done',
    }
  }

  return {
    label: status ? '待审核' : '生成中',
    tone: status ? 'pending' : 'live',
  }
}

function getTicketMemberText(ticket: ApiTicket | null, entity: JsonRecord | null) {
  const entityMemberName =
    pickRecordText(entity, ['memberName', 'member_name', 'nickname']) ||
    normalizeText((entity?.member as JsonRecord | undefined)?.name) ||
    normalizeText((entity?.member as JsonRecord | undefined)?.nickname)
  const entityMemberPhone =
    pickRecordText(entity, ['memberPhone', 'member_phone', 'phone']) ||
    normalizeText((entity?.member as JsonRecord | undefined)?.phone)
  const ticketMemberName = normalizeText(ticket?.member?.name)
  const ticketMemberPhone = normalizeText(ticket?.member?.phone)
  const fallbackName = selectedMember.value ? getMemberName(selectedMember.value) : ''
  const fallbackPhone = normalizeText(selectedMember.value?.phone)

  return (
    [entityMemberName || ticketMemberName || fallbackName, entityMemberPhone || ticketMemberPhone || fallbackPhone]
      .filter(Boolean)
      .join(' ') || '--'
  )
}

function getEntityPointsText(entity: JsonRecord | null, keys: string[]) {
  const text = pickRecordText(entity, keys)

  return text ? formatPoints(text) : ''
}

function waitForOrgScopeLoading() {
  return new Promise<void>((resolve) => {
    if (!orgScopeStore.loading) {
      resolve()
      return
    }

    const stop = watch(
      () => orgScopeStore.loading,
      (loading) => {
        if (loading) return

        stop()
        resolve()
      },
    )
  })
}

async function ensureActiveScope() {
  if (selectedScope.value) return selectedScope.value

  if (!orgScopeStore.loaded && !orgScopeStore.loading) {
    await orgScopeStore.loadMyScopes()
  } else if (orgScopeStore.loading) {
    await waitForOrgScopeLoading()
  }

  return selectedScope.value
}

function resetPreview() {
  preview.value = null
  previewKey.value = ''
}

function resetSubmittedTicket() {
  submittedTicket.value = null
  submittedTicketId.value = ''
  ticketError.value = ''
  ticketLoading.value = false
  auditingAction.value = ''
  reviewRemark.value = ''
}

async function loadMembers() {
  const requestId = ++memberRequestId
  const phone = normalizeText(memberSearch.value)

  memberLoading.value = true
  memberError.value = ''

  try {
    const scope = await ensureActiveScope()

    if (requestId !== memberRequestId) return

    if (!scope) {
      members.value = []
      totalMembers.value = 0
      memberError.value = '暂无可用组织'
      return
    }

    const result = await getApiMemberV1Members({
      'pageRequest.page': 1,
      'pageRequest.pageSize': MEMBER_PAGE_SIZE,
      merchantId: scope.merchantId,
      phone: phone || undefined,
      status: 1,
    })

    if (requestId !== memberRequestId) return

    members.value = (result.members ?? [])
      .filter((member) => Number(member.status) === 1)
      .map((member) => ({
        ...member,
        avatarUrl: normalizeMemberAvatarUrl(member),
      }))
    totalMembers.value = Number(result.pageReply?.total) || members.value.length
  } catch {
    if (requestId !== memberRequestId) return

    members.value = []
    totalMembers.value = 0
    memberError.value = '会员列表加载失败，请稍后重试'
  } finally {
    if (requestId === memberRequestId) {
      memberLoading.value = false
    }
  }
}

function queueMembersLoad() {
  if (memberSearchTimer !== undefined) {
    window.clearTimeout(memberSearchTimer)
  }

  memberSearchTimer = window.setTimeout(() => {
    void loadMembers()
  }, MEMBER_SEARCH_DELAY)
}

function selectMember(member: ApiMember) {
  const previousMemberId = selectedMemberId.value

  selectedMember.value = member
  resetPreview()

  if (previousMemberId !== normalizeText(member.id)) {
    resetSubmittedTicket()
  }

  currentStep.value = 'deposit'
}

function openMemberStep() {
  currentStep.value = 'member'
}

function openDepositStep() {
  if (!canOpenDepositStep.value) {
    message.warning('请先选择会员')
    return
  }

  currentStep.value = 'deposit'
}

function handlePointsInput(event: Event) {
  const target = event.target as HTMLInputElement
  const nextValue = normalizeIntegerText(target.value)

  pointsInput.value = nextValue
  if (target.value !== nextValue) {
    target.value = nextValue
  }
}

async function handlePreviewDeposit() {
  const scope = selectedScope.value
  const memberId = selectedMemberId.value
  const points = normalizedPoints.value

  if (!scope) {
    message.warning('请先选择组织')
    return
  }

  if (!memberId) {
    message.warning('请先选择会员')
    return
  }

  if (!Number(points)) {
    message.warning('请输入存入积分数量')
    return
  }

  previewLoading.value = true
  resetPreview()

  try {
    const result = await postApiWalletV1AccountsDepositPreview({
      memberId,
      merchantId: scope.merchantId,
      points,
      storeId: scope.storeId,
    })

    preview.value = result
    previewKey.value = currentDepositKey.value

    if (result.canSubmit) {
      message.success('存入结果已生成')
    } else {
      message.warning('当前积分数量暂不可提交')
    }
  } finally {
    previewLoading.value = false
  }
}

async function loadSubmittedTicket(ticketId: string) {
  const requestId = ++ticketRequestId

  submittedTicketId.value = ticketId
  ticketLoading.value = true
  ticketError.value = ''
  submittedTicket.value = null

  try {
    const result = await getApiTicketV1TicketsById({ id: ticketId })

    if (requestId !== ticketRequestId) return

    if (!result.ticket) {
      ticketError.value = '工单详情为空'
      return
    }

    submittedTicket.value = result.ticket
  } catch {
    if (requestId !== ticketRequestId) return

    ticketError.value = '工单详情加载失败，请稍后重试'
  } finally {
    if (requestId === ticketRequestId) {
      ticketLoading.value = false
    }
  }
}

async function handleSubmitDeposit() {
  const scope = selectedScope.value
  const memberId = selectedMemberId.value
  const points = normalizedPoints.value

  if (!scope || !memberId || !points || !canConfirmDeposit.value) return

  submitLoading.value = true
  resetSubmittedTicket()

  try {
    const result = await postApiWalletV1AccountsDeposit({
      memberId,
      merchantId: scope.merchantId,
      points,
      storeId: scope.storeId,
    })
    const ticketId = normalizeText(result.ticket?.id)

    message.success('存入申请已提交')

    if (!ticketId) {
      ticketError.value = '提交成功，但未返回工单ID'
      return
    }

    await loadSubmittedTicket(ticketId)
  } finally {
    submitLoading.value = false
  }
}

async function handleAuditTicket(action: ReviewAction) {
  const ticketId = normalizeText(submittedTicket.value?.id) || submittedTicketId.value
  if (!ticketId || !canAuditTicket.value) return

  auditingAction.value = action

  try {
    const result =
      action === 'approve'
        ? await putApiTicketV1TicketsApprove({
            id: ticketId,
            reviewRemark: reviewRemark.value || '积分存入审核通过',
          })
        : await putApiTicketV1TicketsReject({
            id: ticketId,
            reviewRemark: reviewRemark.value || '积分存入审核驳回',
          })

    if (result.ticket) {
      submittedTicket.value = result.ticket
    } else {
      await loadSubmittedTicket(ticketId)
    }

    message.success(action === 'approve' ? '工单已通过' : '工单已驳回')
    await router.replace({ name: 'home' })
  } finally {
    auditingAction.value = ''
  }
}

async function handleBack() {
  if (window.history.length > 1) {
    router.back()
    return
  }

  await router.push({ name: 'home' })
}

watch(
  () => [selectedScopeKey.value, memberSearch.value],
  () => {
    queueMembersLoad()
  },
  { immediate: true },
)

watch(selectedScopeKey, (nextScopeKey, previousScopeKey) => {
  if (!previousScopeKey || nextScopeKey === previousScopeKey) return

  selectedMember.value = null
  currentStep.value = 'member'
  pointsInput.value = ''
  resetPreview()
  resetSubmittedTicket()
})

watch(
  () => [currentDepositKey.value],
  () => {
    resetPreview()
  },
)

onBeforeUnmount(() => {
  if (memberSearchTimer !== undefined) {
    window.clearTimeout(memberSearchTimer)
  }
})
</script>

<template>
  <main
    class="tab-page points-deposit-page"
    :class="{ 'has-ticket-card': isTicketCardVisible }"
    aria-label="积分存入"
  >
    <section class="orders-topbar" aria-label="积分存入导航">
      <button class="orders-icon-button" type="button" aria-label="返回" @click="handleBack">
        <ArrowLeftOutlined />
      </button>

      <strong>無鳞积分</strong>

      <button class="orders-text-button" type="button" @click="loadMembers">刷新</button>
    </section>

    <section class="orders-hero points-deposit-hero" aria-label="积分存入概览">
      <div>
        <p>POINTS DEPOSIT</p>
        <h1>存积分</h1>
      </div>
      <span>{{ currentScopeText }}</span>
    </section>

    <section class="points-stepper" aria-label="存积分步骤">
      <button
        v-for="(step, index) in stepItems"
        :key="step.id"
        class="points-step-button"
        :class="[
          step.state,
          {
            'is-active': currentStep === step.id,
          },
        ]"
        type="button"
        :disabled="step.id === 'deposit' && !canOpenDepositStep"
        @click="step.id === 'member' ? openMemberStep() : openDepositStep()"
      >
        <span class="points-step-index">{{ index + 1 }}</span>
        <span class="points-step-copy">
          <strong>{{ step.label }}</strong>
          <small>{{ step.meta }}</small>
        </span>
      </button>
    </section>

    <section class="points-deposit-shell" :class="`is-${currentStep}`" aria-label="积分存入表单">
      <section v-if="currentStep === 'member'" class="points-deposit-panel points-member-panel">
        <header class="points-panel-head">
          <div>
            <span>MEMBER</span>
            <h2>选择会员</h2>
          </div>
          <UserOutlined />
        </header>

        <label class="points-search-field">
          <SearchOutlined />
          <input
            v-model="memberSearch"
            autocomplete="off"
            inputmode="tel"
            placeholder="输入手机号搜索"
            type="search"
          />
        </label>

        <article v-if="selectedMember" class="points-selected-member">
          <span class="points-selected-avatar" aria-hidden="true">
            <UserOutlined />
          </span>
          <div>
            <strong>{{ selectedMemberTitle }}</strong>
            <small>{{ selectedMemberSubtitle }}</small>
          </div>
        </article>

        <div class="points-member-list" aria-label="启用会员列表">
          <p v-if="memberLoading" class="points-list-state">正在加载会员</p>
          <p v-else-if="memberError" class="points-list-state is-error">
            <span>{{ memberError }}</span>
            <button type="button" @click="loadMembers">重新加载</button>
          </p>
          <p v-else-if="!members.length" class="points-list-state">暂无启用会员</p>

          <template v-else>
            <button
              v-for="member in members"
              :key="member.id || member.phone"
              class="points-member-card"
              :class="{ 'is-selected': selectedMemberId === member.id }"
              type="button"
              :aria-pressed="selectedMemberId === member.id"
              @click="selectMember(member)"
            >
              <span class="points-member-avatar" aria-hidden="true">
                <img v-if="member.avatarUrl" :src="member.avatarUrl" alt="" />
                <UserOutlined v-else />
              </span>
              <span class="points-member-copy">
                <strong>{{ getMemberName(member) }}</strong>
                <small>{{ getMemberMeta(member) }}</small>
              </span>
              <CheckCircleFilled v-if="selectedMemberId === member.id" class="points-member-check" />
            </button>
          </template>
        </div>
      </section>

      <section v-else class="points-deposit-panel points-action-panel">
        <header class="points-panel-head">
          <div>
            <span>DEPOSIT</span>
            <h2>输入积分</h2>
          </div>
          <WalletOutlined />
        </header>

        <article class="points-selected-member points-deposit-member">
          <span class="points-selected-avatar" aria-hidden="true">
            <UserOutlined />
          </span>
          <div>
            <strong>{{ selectedMemberTitle }}</strong>
            <small>{{ selectedMemberSubtitle }}</small>
          </div>
        </article>

        <label class="points-amount-field">
          <span>存入积分数量</span>
          <input
            v-model="pointsInput"
            inputmode="numeric"
            placeholder="0"
            type="text"
            @input="handlePointsInput"
          />
        </label>

        <button
          class="points-primary-button"
          type="button"
          :disabled="!canPreview || previewLoading"
          @click="handlePreviewDeposit"
        >
          {{ previewLoading ? '正在预览' : '预览存入结果' }}
        </button>

        <section v-if="preview" class="points-preview-card" aria-label="存入结果预览">
          <header>
            <span :class="{ 'is-ready': preview.canSubmit, 'is-blocked': !preview.canSubmit }">
              {{ preview.canSubmit ? '可提交' : '不可提交' }}
            </span>
            <strong>存入预览</strong>
          </header>

          <div class="points-preview-grid">
            <div
              v-for="stat in previewStats"
              :key="stat.label"
              class="points-preview-stat"
              :class="stat.tone ? `is-${stat.tone}` : undefined"
            >
              <span>{{ stat.label }}</span>
              <strong>{{ stat.value }}</strong>
            </div>
          </div>

          <div v-if="previewSegments.length" class="points-segment-list">
            <article v-for="segment in previewSegments" :key="segment.key" class="points-segment-card">
              <div>
                <strong>{{ segment.range }}</strong>
                <span>原始 {{ segment.source }}</span>
              </div>
              <small>存入 {{ segment.deposit }}</small>
              <small>抽奖 {{ segment.draw }}</small>
            </article>
          </div>
        </section>

        <p v-else class="points-preview-empty">选择会员并输入积分后，先预览存入结果</p>

        <button
          class="points-submit-button"
          type="button"
          :disabled="!canConfirmDeposit || submitLoading"
          @click="handleSubmitDeposit"
        >
          {{ submitLoading ? '正在提交' : '确认存入' }}
        </button>
      </section>
    </section>

    <section v-if="isTicketCardVisible" class="points-ticket-float" aria-live="polite">
      <article class="points-ticket-card">
        <header class="points-ticket-head">
          <span class="points-ticket-icon" aria-hidden="true">
            <FileTextOutlined />
          </span>
          <div>
            <small>WORK TICKET</small>
            <h2>{{ ticketLoading ? '正在查询工单' : ticketTitle }}</h2>
          </div>
          <strong :class="`is-${ticketStatusConfig.tone}`">{{ ticketStatusConfig.label }}</strong>
        </header>

        <p v-if="ticketError" class="points-ticket-error">
          <span>{{ ticketError }}</span>
          <button v-if="submittedTicketId" type="button" @click="loadSubmittedTicket(submittedTicketId)">
            重新查询
          </button>
        </p>

        <dl v-else-if="ticketDetails.length" class="points-ticket-details">
          <div v-for="detail in ticketDetails" :key="detail.label">
            <dt>{{ detail.label }}</dt>
            <dd>{{ detail.value }}</dd>
          </div>
        </dl>

        <p v-else class="points-ticket-empty">正在同步工单详情</p>

        <template v-if="submittedTicket && canAuditTicket">
          <textarea
            v-model="reviewRemark"
            class="points-ticket-remark"
            placeholder="审核备注"
            rows="2"
          />

          <div class="points-ticket-actions">
            <button
              class="points-ticket-reject"
              type="button"
              :disabled="auditingAction !== ''"
              @click="handleAuditTicket('reject')"
            >
              <CloseCircleFilled />
              {{ auditingAction === 'reject' ? '驳回中' : '驳回' }}
            </button>
            <button
              class="points-ticket-approve"
              type="button"
              :disabled="auditingAction !== ''"
              @click="handleAuditTicket('approve')"
            >
              <CheckCircleFilled />
              {{ auditingAction === 'approve' ? '通过中' : '通过' }}
            </button>
          </div>
        </template>
      </article>
    </section>
  </main>
</template>
