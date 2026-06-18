<template>
  <main
    class="tab-page points-deposit-page wine-storage-page"
    :class="{ 'has-ticket-card': isTicketCardVisible }"
    aria-label="存取酒"
  >
    <section class="orders-topbar" aria-label="存取酒导航">
      <button class="orders-icon-button" type="button" aria-label="返回首页" @click="goHome">
        <ArrowLeftOutlined />
      </button>

      <strong>会员服务</strong>

      <button class="orders-text-button" type="button" @click="reloadCurrentStep">刷新</button>
    </section>

    <section class="orders-hero wine-storage-hero" aria-label="存取酒概览">
      <div>
        <p>WINE STORAGE</p>
        <h1>存取酒</h1>
      </div>
      <span>{{ currentScopeText }}</span>
    </section>

    <section class="wine-mode-tabs" aria-label="存取酒模式">
      <button type="button" :class="{ active: mode === 'deposit' }" @click="setMode('deposit')">
        <UploadOutlined />
        存酒
      </button>
      <button type="button" :class="{ active: mode === 'withdraw' }" @click="setMode('withdraw')">
        <DownloadOutlined />
        取酒
      </button>
    </section>

    <section class="points-deposit-shell wine-storage-shell">
      <div class="wine-operation-steps" aria-label="存取酒操作步骤">
        <article
          class="wine-step-block"
          :class="{ 'is-active': !selectedMember, 'is-complete': Boolean(selectedMember) }"
        >
          <span class="wine-step-marker">1</span>
          <div class="wine-step-content">
            <header class="wine-step-head">
              <div>
                <span>选择会员</span>
                <strong>{{ selectedMemberTitle }}</strong>
              </div>
              <small>{{ selectedMemberSubtitle }}</small>
            </header>

            <section class="wine-step-body wine-member-step-body">
              <label class="points-search-field">
                <SearchOutlined />
                <input
                  v-model.trim="memberSearch"
                  type="search"
                  placeholder="输入会员手机号搜索"
                  @keyup.enter="loadMembers"
                />
              </label>

              <article v-if="selectedMember" class="wine-selected-card">
                <span>
                  <UserOutlined />
                </span>
                <div>
                  <strong>{{ selectedMemberTitle }}</strong>
                  <small>{{ selectedMemberSubtitle }}</small>
                </div>
                <CheckCircleFilled />
              </article>

              <div class="points-member-list">
                <button
                  v-for="member in members"
                  :key="String(member.id)"
                  class="points-member-card"
                  :class="{ active: selectedMember?.id === member.id }"
                  type="button"
                  @click="selectMember(member)"
                >
                  <span class="points-member-avatar">{{ getMemberInitial(member) }}</span>
                  <span class="points-member-copy">
                    <strong>{{ getMemberName(member) }}</strong>
                    <small>{{ getMemberMeta(member) }}</small>
                  </span>
                  <CheckCircleFilled v-if="selectedMember?.id === member.id" />
                </button>
              </div>

              <p v-if="memberLoading" class="points-list-state">正在查询会员</p>
              <p v-else-if="memberError" class="points-list-state is-error">{{ memberError }}</p>
              <p v-else-if="!members.length" class="points-list-state">暂无匹配会员</p>
            </section>
          </div>
        </article>

        <article
          class="wine-step-block"
          :class="{
            'is-locked': !selectedMemberId,
            'is-active': Boolean(selectedMemberId) && !canShowQuantityStep,
            'is-complete': canShowQuantityStep,
          }"
        >
          <span class="wine-step-marker">2</span>
          <div class="wine-step-content">
            <header class="wine-step-head">
              <div>
                <span>{{ choiceStepTitle }}</span>
                <strong>{{ choiceStepSummary }}</strong>
              </div>
              <small>{{ choiceStepSubtitle }}</small>
            </header>

            <section v-if="selectedMemberId && mode === 'deposit'" class="wine-step-body">
              <div class="wine-dish-toolbar">
                <label class="points-search-field">
                  <SearchOutlined />
                  <input v-model.trim="dishSearch" type="search" placeholder="输入菜品名称搜索" />
                </label>
                <div class="wine-category-row" aria-label="菜品分类筛选">
                  <button
                    v-for="category in categoryFilters"
                    :key="category.id"
                    class="wine-category-button"
                    :class="{ active: activeDishCategoryId === category.id }"
                    type="button"
                    @click="selectDishCategory(category.id)"
                  >
                    {{ category.label }}
                  </button>
                </div>
              </div>

              <p v-if="dishCategoryLoading" class="points-list-state is-compact">正在查询菜品分类</p>
              <p v-else-if="dishCategoryError" class="points-list-state is-error is-compact">{{ dishCategoryError }}</p>

              <div class="wine-scroll-list">
                <button
                  v-for="dish in visibleDishes"
                  :key="String(dish.id)"
                  class="wine-select-card"
                  :class="{ active: isDishSelected(dish) }"
                  type="button"
                  @click="selectDish(dish)"
                >
                  <img
                    v-if="getDishImageUrl(dish)"
                    class="wine-dish-image"
                    :src="getDishImageUrl(dish)"
                    :alt="getDishName(dish)"
                  />
                  <span v-else class="wine-card-icon">
                    <CoffeeOutlined />
                  </span>
                  <span class="wine-card-copy">
                    <strong>{{ getDishName(dish) }}</strong>
                    <small>{{ getDishMeta(dish) }}</small>
                  </span>
                  <CheckCircleFilled v-if="isDishSelected(dish)" />
                </button>
              </div>

              <p v-if="dishLoading" class="points-list-state">正在查询当前门店已上架菜品</p>
              <p v-else-if="dishError" class="points-list-state is-error">{{ dishError }}</p>
              <p v-else-if="!visibleDishes.length" class="points-list-state">暂无符合条件的已上架菜品</p>
            </section>

            <section v-else-if="selectedMemberId" class="wine-step-body">
              <div class="wine-section-title">
                <strong>会员存酒流水</strong>
                <small>选择本次要取酒的流水</small>
              </div>

              <div class="wine-scroll-list">
                <button
                  v-for="flow in flowCards"
                  :key="flow.id"
                  class="wine-select-card"
                  :class="{ active: selectedFlow?.id === flow.id }"
                  type="button"
                  @click="selectFlow(flow.raw)"
                >
                  <span class="wine-card-icon">
                    <FileTextOutlined />
                  </span>
                  <span class="wine-card-copy">
                    <strong>{{ flow.title }}</strong>
                    <small>{{ flow.meta }}</small>
                  </span>
                  <span class="wine-flow-badge">{{ flow.availableText }}</span>
                </button>
              </div>

              <p v-if="flowLoading" class="points-list-state">正在查询存酒流水</p>
              <p v-else-if="flowError" class="points-list-state is-error">{{ flowError }}</p>
              <p v-else-if="!flowCards.length" class="points-list-state">该会员暂无可取酒流水</p>
            </section>

            <p v-else class="wine-step-placeholder">先完成会员选择，下一步会在这里展开。</p>
          </div>
        </article>

        <article
          class="wine-step-block"
          :class="{
            'is-locked': !canShowQuantityStep,
            'is-active': canShowQuantityStep && !isTicketCardVisible,
            'is-complete': isTicketCardVisible,
          }"
        >
          <span class="wine-step-marker">3</span>
          <div class="wine-step-content">
            <header class="wine-step-head">
              <div>
                <span>{{ quantityStepTitle }}</span>
                <strong>{{ quantityStepSummary }}</strong>
              </div>
              <small>{{ quantityStepSubtitle }}</small>
            </header>

            <section v-if="canShowQuantityStep" class="wine-step-body wine-quantity-step">
              <article v-if="mode === 'deposit' && selectedDish" class="wine-selected-card">
                <span>
                  <CoffeeOutlined />
                </span>
                <div>
                  <strong>{{ selectedDishTitle }}</strong>
                  <small>{{ selectedDishSubtitle }}</small>
                </div>
                <CheckCircleFilled />
              </article>

              <article v-else-if="selectedFlowCard" class="wine-selected-card">
                <span>
                  <FileTextOutlined />
                </span>
                <div>
                  <strong>{{ selectedFlowCard.title }}</strong>
                  <small>{{ selectedFlowCard.meta }}</small>
                </div>
                <strong class="wine-flow-badge">{{ selectedFlowCard.availableText }}</strong>
              </article>

              <div class="wine-form-grid">
                <label>
                  <span>数量</span>
                  <input
                    v-model.trim="quantityInput"
                    inputmode="decimal"
                    type="number"
                    min="0.01"
                    step="0.01"
                    :placeholder="quantityPlaceholder"
                  />
                </label>
                <label>
                  <span>备注</span>
                  <input v-model.trim="remarkInput" type="text" placeholder="可选" />
                </label>
              </div>

              <button
                class="points-submit-button"
                type="button"
                :disabled="!canSubmitCurrent || submitting"
                @click="submitCurrent"
              >
                {{ submitting ? '提交中...' : submitButtonText }}
              </button>
            </section>

            <p v-else class="wine-step-placeholder">{{ quantityLockedText }}</p>
          </div>
        </article>
      </div>
    </section>

    <aside v-if="isTicketCardVisible" class="points-ticket-float wine-ticket-float">
      <article class="points-ticket-card wine-ticket-card">
        <header class="points-ticket-head">
          <span class="points-ticket-icon" aria-hidden="true">
            <CheckCircleFilled />
          </span>
          <div>
            <small>已生成工单</small>
            <h2>{{ ticketTitle }}</h2>
          </div>
          <strong>{{ formatTicketStatus(submittedTicket?.status) }}</strong>
        </header>
        <dl class="points-ticket-details">
          <div v-for="item in ticketDetails" :key="item.label">
            <dt>{{ item.label }}</dt>
            <dd>{{ item.value }}</dd>
          </div>
        </dl>
        <button class="points-submit-button" type="button" @click="continueCurrentMode">继续{{ mode === 'deposit' ? '存酒' : '取酒' }}</button>
      </article>
    </aside>
  </main>
</template>

<script setup lang="ts">
import {
  ArrowLeftOutlined,
  CheckCircleFilled,
  CoffeeOutlined,
  DownloadOutlined,
  FileTextOutlined,
  SearchOutlined,
  UploadOutlined,
  UserOutlined,
} from '@ant-design/icons-vue'
import { computed, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  getApiDishV1Categories,
  getApiDishV1Dishes,
  getApiMemberV1Members,
  getApiMemberV1StorageFlows,
  postApiTicketV1Tickets,
  type GetApiDishV1CategoriesResponse,
  type GetApiDishV1DishesResponse,
  type GetApiMemberV1MembersResponse,
  type GetApiMemberV1StorageFlowsResponse,
  type PostApiTicketV1TicketsRequest,
  type PostApiTicketV1TicketsResponse,
} from '@/services/basis/basis'
import { useOrgScopeStore, type OrgScopeSelection } from '@/stores/orgScope'
import { normalizeUrl } from '@/utils'

type ApiDish = NonNullable<GetApiDishV1DishesResponse['dishes']>[number]
type ApiDishCategory = NonNullable<GetApiDishV1CategoriesResponse['categories']>[number]
type ApiMember = NonNullable<GetApiMemberV1MembersResponse['members']>[number]
type ApiStorageFlow = NonNullable<GetApiMemberV1StorageFlowsResponse['flows']>[number]
type ApiTicket = NonNullable<PostApiTicketV1TicketsResponse['ticket']>

type WineMode = 'deposit' | 'withdraw'

type DetailItem = {
  label: string
  value: string
}

type FlowCard = {
  id: string
  title: string
  meta: string
  availableText: string
  raw: ApiStorageFlow
}

type TicketSnapshot = {
  memberId: string
  memberName: string
  memberPhone: string
  storeId: string
  storeName: string
  dishId: string
  dishName: string
  dishUnit: string
  quantity: number
  remark?: string
  member: {
    id: string
    name: string
    phone: string
    avatarUrl: string
  }
  store: {
    id: string
    name: string
  }
  dish: {
    id: string
    name: string
    unit: string
  }
  storageRecordId?: string
  storageStoreId?: string
  storageStoreName?: string
  storageStore?: {
    id: string
    name: string
  }
  withdrawQuantity?: number
  remainingQuantity?: number
}

type WineTicketSubmitRequest = PostApiTicketV1TicketsRequest & {
  entityJson?: string
  targetId?: string
  targetType?: string
}

const router = useRouter()
const route = useRoute()
const orgScopeStore = useOrgScopeStore()

const MEMBER_PAGE_SIZE = 30
const MEMBER_SEARCH_DELAY = 260
const DISH_PAGE_SIZE = 100
const FLOW_PAGE_SIZE = 50
const ON_SHELF_FILTER = 'DISH_ON_SHELF_FILTER_ON'

function getRouteWineMode(): WineMode {
  const rawMode = Array.isArray(route.query.mode) ? route.query.mode[0] : route.query.mode

  return rawMode === 'withdraw' ? 'withdraw' : 'deposit'
}

const mode = ref<WineMode>(getRouteWineMode())
const members = ref<ApiMember[]>([])
const selectedMember = ref<ApiMember | null>(null)
const memberSearch = ref('')
const memberLoading = ref(false)
const memberError = ref('')

const dishCategories = ref<ApiDishCategory[]>([])
const selectedDishCategoryId = ref('0')
const dishCategoryLoading = ref(false)
const dishCategoryError = ref('')
const dishes = ref<ApiDish[]>([])
const selectedDish = ref<ApiDish | null>(null)
const dishSearch = ref('')
const dishLoading = ref(false)
const dishError = ref('')

const storageFlows = ref<ApiStorageFlow[]>([])
const selectedFlow = ref<ApiStorageFlow | null>(null)
const flowLoading = ref(false)
const flowError = ref('')

const quantityInput = ref('')
const remarkInput = ref('')
const submitting = ref(false)
const submittedTicket = ref<ApiTicket | null>(null)
const submittedEntity = ref<ApiDish | ApiStorageFlow | null>(null)
const submittedSnapshot = ref<TicketSnapshot | null>(null)

let memberSearchTimer: number | undefined
let memberRequestId = 0
let dishCategoryRequestId = 0
let dishRequestId = 0
let flowRequestId = 0

const selectedScope = computed(() => orgScopeStore.selected)

const selectedScopeKey = computed(() => {
  const scope = selectedScope.value
  return scope ? `${scope.merchantId}:${scope.storeId}` : ''
})

const selectedMemberId = computed(() => normalizeText(selectedMember.value?.id))

const normalizedQuantity = computed(() => Number(quantityInput.value))

const quantityValue = computed(() => {
  const value = normalizedQuantity.value
  return Number.isFinite(value) && value > 0 ? value : 0
})

const currentScopeText = computed(() => {
  const scope = selectedScope.value
  if (!scope) {
    return '暂无可用门店'
  }

  return `${scope.merchantName} / ${scope.storeName}`
})

const activeDishCategoryId = computed(() => {
  const id = normalizeText(selectedDishCategoryId.value)
  return id || '0'
})

const categoryFilters = computed(() => {
  const list = dishCategories.value
    .map((category) => ({
      id: normalizeText(category.id),
      label: normalizeText(category.name) || '未命名分类',
      sort: Number(category.sort ?? 0),
    }))
    .filter((category) => category.id)
    .sort((left, right) => left.sort - right.sort)

  return [{ id: '0', label: '全部' }, ...list]
})

const selectedMemberTitle = computed(() => (selectedMember.value ? getMemberName(selectedMember.value) : '未选择会员'))
const selectedMemberSubtitle = computed(() => (selectedMember.value ? getMemberMeta(selectedMember.value) : '先选择要办理的会员'))

const selectedDishTitle = computed(() => (selectedDish.value ? getDishName(selectedDish.value) : '未选择菜品'))
const selectedDishSubtitle = computed(() => (selectedDish.value ? getDishMeta(selectedDish.value) : '选择当前门店已上架菜品'))

const selectedFlowCard = computed(() => {
  if (!selectedFlow.value) {
    return null
  }

  return toFlowCard(selectedFlow.value)
})

const canShowQuantityStep = computed(() => {
  if (mode.value === 'deposit') {
    return Boolean(selectedDish.value)
  }

  return Boolean(selectedFlow.value)
})

const choiceStepTitle = computed(() => (mode.value === 'deposit' ? '选择存酒菜品' : '选择取酒流水'))

const choiceStepSummary = computed(() => {
  if (!selectedMemberId.value) {
    return '等待会员'
  }

  if (mode.value === 'deposit') {
    return selectedDish.value ? getDishName(selectedDish.value) : '选择已上架菜品'
  }

  return selectedFlowCard.value?.title ?? '选择会员存酒流水'
})

const choiceStepSubtitle = computed(() => {
  if (!selectedMemberId.value) {
    return '会员选择完成后展开'
  }

  return mode.value === 'deposit' ? '按名称搜索，按分类筛选' : '仅展示该会员可取酒流水'
})

const quantityStepTitle = computed(() => (mode.value === 'deposit' ? '输入存酒数量' : '输入取酒数量'))

const quantityStepSummary = computed(() => {
  if (!canShowQuantityStep.value) {
    return '等待选择'
  }

  return quantityValue.value > 0 ? formatQuantity(quantityValue.value) : '输入数量'
})

const quantityStepSubtitle = computed(() => {
  if (!canShowQuantityStep.value) {
    return mode.value === 'deposit' ? '选择菜品后展开' : '选择流水后展开'
  }

  return mode.value === 'deposit' ? selectedDishSubtitle.value : selectedFlowCard.value?.availableText ?? '确认取酒数量'
})

const quantityLockedText = computed(() =>
  mode.value === 'deposit' ? '先选择存酒菜品，数量输入会在这里展开。' : '先选择取酒流水，数量输入会在这里展开。',
)

const quantityPlaceholder = computed(() => (mode.value === 'deposit' ? '输入存酒数量' : '输入取酒数量'))

const submitButtonText = computed(() => (mode.value === 'deposit' ? '确认存酒' : '确认取酒'))

const canSubmitDeposit = computed(() => {
  return Boolean(selectedScope.value && selectedMemberId.value && selectedDish.value && quantityValue.value > 0)
})

const canSubmitWithdraw = computed(() => {
  return Boolean(selectedScope.value && selectedMemberId.value && selectedFlow.value && quantityValue.value > 0)
})

const canSubmitCurrent = computed(() => (mode.value === 'deposit' ? canSubmitDeposit.value : canSubmitWithdraw.value))

const isTicketCardVisible = computed(() => Boolean(submittedTicket.value))

const visibleDishes = computed(() => {
  const keyword = normalizeText(dishSearch.value).toLowerCase()

  return dishes.value.filter((dish) => {
    if (!keyword) {
      return true
    }

    return getDishName(dish).toLowerCase().includes(keyword)
  })
})

const flowCards = computed(() => storageFlows.value.map((flow) => toFlowCard(flow)))

const ticketTitle = computed(() => {
  if (!submittedTicket.value) {
    return ''
  }

  const ticketId = normalizeText(submittedTicket.value.id)
  return ticketId ? `工单 ${ticketId}` : mode.value === 'deposit' ? '存酒工单' : '取酒工单'
})

const ticketDetails = computed<DetailItem[]>(() => {
  const snapshot = submittedSnapshot.value

  if (!submittedTicket.value || !snapshot) {
    return []
  }

  return [
    { label: '会员', value: [snapshot.memberName, snapshot.memberPhone].filter(Boolean).join(' ') || '--' },
    { label: mode.value === 'deposit' ? '存酒菜品' : '取酒流水', value: getSubmittedEntityName(submittedEntity.value) },
    { label: '数量', value: formatQuantity(snapshot.quantity) },
    { label: '状态', value: formatTicketStatus(submittedTicket.value.status) },
  ].filter((item) => item.value)
})

watch(
  memberSearch,
  () => {
    if (memberSearchTimer !== undefined) {
      window.clearTimeout(memberSearchTimer)
    }

    memberSearchTimer = window.setTimeout(() => {
      void loadMembers()
    }, MEMBER_SEARCH_DELAY)
  },
)

watch(
  () => selectedScopeKey.value,
  () => {
    resetForScope()
    void loadMembers()
    void loadDishCategories()
    void loadDishes()
  },
  { immediate: true },
)

watch(
  () => route.query.mode,
  () => {
    setMode(getRouteWineMode())
  },
)

function goHome() {
  void router.push({ name: 'home' })
}

function normalizeText(value: unknown): string {
  return String(value ?? '').trim()
}

function normalizeStatus(value: unknown): string {
  return normalizeText(value).toLowerCase()
}

function formatQuantity(value: number | string | null | undefined): string {
  const numeric = Number(value ?? 0)

  if (!Number.isFinite(numeric)) {
    return '0'
  }

  return Number.isInteger(numeric) ? String(numeric) : numeric.toFixed(2)
}

function formatMoneyFen(value: unknown): string {
  const numeric = Number(value ?? 0)

  if (!Number.isFinite(numeric) || numeric <= 0) {
    return ''
  }

  return `￥${(numeric / 100).toFixed(2)}`
}

function formatTicketStatus(value: unknown): string {
  const status = normalizeStatus(value)

  if (status === 'approved') return '已通过'
  if (status === 'rejected') return '已驳回'
  if (status === 'cancelled') return '已取消'
  if (status === 'pending') return '待审核'

  return status || '已提交'
}

function getMemberName(member: ApiMember): string {
  return normalizeText(member.nickname) || normalizeText(member.phone) || `会员 ${member.id}`
}

function getMemberPhone(member: ApiMember): string {
  return normalizeText(member.phone) || '未登记手机号'
}

function getMemberMeta(member: ApiMember): string {
  return [getMemberPhone(member), normalizeText(member.level?.levelName)].filter(Boolean).join(' · ') || '启用会员'
}

function getMemberInitial(member: ApiMember): string {
  return getMemberName(member).slice(0, 1).toUpperCase()
}

function getDishName(dish: ApiDish): string {
  return normalizeText(dish.name) || `菜品 ${dish.id}`
}

function getDishImageUrl(dish: ApiDish): string {
  return normalizeUrl(normalizeText(dish.imageUrl))
}

function getDishUnit(dish: ApiDish): string {
  return normalizeText(dish.unit) || '份'
}

function getDishCategoryText(dish: ApiDish): string {
  return (dish.categories ?? []).map((category) => normalizeText(category.name)).filter(Boolean).join(' / ') || '未分类'
}

function getDishMeta(dish: ApiDish): string {
  const parts = [getDishCategoryText(dish), `单位：${getDishUnit(dish)}`]
  const price = formatMoneyFen(dish.price || dish.basePrice)

  if (price) {
    parts.push(price)
  }

  return parts.join(' · ')
}

function isDishSelected(dish: ApiDish): boolean {
  return selectedDish.value?.id === dish.id
}

function getFlowDishName(flow: ApiStorageFlow): string {
  return normalizeText(flow.dishName) || `流水 ${flow.id}`
}

function getFlowAvailableQuantity(flow: ApiStorageFlow): number {
  const balanceAfter = Number(flow.balanceAfter ?? 0)

  if (Number.isFinite(balanceAfter) && balanceAfter > 0) {
    return balanceAfter
  }

  const quantity = Number(flow.quantity ?? 0)
  return Number.isFinite(quantity) && quantity > 0 ? quantity : 0
}

function getFlowUnit(): string {
  return '份'
}

function getFlowDate(flow: ApiStorageFlow): string {
  return normalizeText(flow.createdAt) || '未记录时间'
}

function getFlowStorageRecordId(flow: ApiStorageFlow): string {
  return normalizeText(flow.storageRecordId) || normalizeText(flow.id)
}

function toFlowCard(flow: ApiStorageFlow): FlowCard {
  const available = getFlowAvailableQuantity(flow)
  const unit = getFlowUnit()
  const flowId = normalizeText(flow.id)

  return {
    id: flowId,
    title: getFlowDishName(flow),
    meta: `${getFlowDate(flow)} · 流水ID ${flowId || '--'}`,
    availableText: `可取 ${formatQuantity(available)} ${unit}`,
    raw: flow,
  }
}

function getSubmittedEntityName(entity: ApiDish | ApiStorageFlow | null): string {
  if (!entity) {
    return mode.value === 'deposit' ? selectedDishTitle.value : selectedFlowCard.value?.title ?? '未选择'
  }

  if ('dishName' in entity || 'storageRecordId' in entity || 'balanceAfter' in entity) {
    return getFlowDishName(entity as ApiStorageFlow)
  }

  return getDishName(entity as ApiDish)
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

function setMode(nextMode: WineMode) {
  if (mode.value === nextMode) {
    return
  }

  mode.value = nextMode
  resetBusinessSelection()

  if (nextMode === 'withdraw' && selectedMemberId.value) {
    void loadStorageFlows()
  }
}

function resetForScope() {
  selectedMember.value = null
  members.value = []
  memberError.value = ''
  dishCategories.value = []
  selectedDishCategoryId.value = '0'
  dishes.value = []
  dishSearch.value = ''
  dishCategoryError.value = ''
  dishError.value = ''
  storageFlows.value = []
  flowError.value = ''
  resetBusinessSelection()
}

function resetBusinessSelection() {
  selectedDish.value = null
  selectedFlow.value = null
  quantityInput.value = ''
  remarkInput.value = ''
  resetSubmittedTicket()
}

function resetSubmittedTicket() {
  submittedTicket.value = null
  submittedEntity.value = null
  submittedSnapshot.value = null
}

function selectMember(member: ApiMember) {
  const changed = selectedMember.value?.id !== member.id
  selectedMember.value = member

  if (changed) {
    resetBusinessSelection()
    storageFlows.value = []
  }

  if (mode.value === 'withdraw') {
    void loadStorageFlows()
  }
}

function selectDishCategory(categoryId: string) {
  if (activeDishCategoryId.value === categoryId) {
    return
  }

  selectedDishCategoryId.value = categoryId
  selectedDish.value = null
  quantityInput.value = ''
  resetSubmittedTicket()
  void loadDishes()
}

function selectDish(dish: ApiDish) {
  selectedDish.value = dish
  selectedFlow.value = null
  quantityInput.value = ''
  resetSubmittedTicket()
}

function selectFlow(flow: ApiStorageFlow) {
  selectedFlow.value = flow
  selectedDish.value = null
  quantityInput.value = ''
  resetSubmittedTicket()
}

function reloadCurrentStep() {
  if (!selectedMemberId.value) {
    void loadMembers()
    return
  }

  if (mode.value === 'deposit') {
    void loadDishCategories()
    void loadDishes()
    return
  }

  void loadStorageFlows()
}

async function loadMembers() {
  const requestId = ++memberRequestId
  const phone = normalizeText(memberSearch.value)

  memberLoading.value = true
  memberError.value = ''

  try {
    const scope = await ensureActiveScope()

    if (requestId !== memberRequestId) {
      return
    }

    if (!scope) {
      members.value = []
      memberError.value = '暂无可用组织'
      return
    }

    const response = await getApiMemberV1Members({
      'pageRequest.page': 1,
      'pageRequest.pageSize': MEMBER_PAGE_SIZE,
      merchantId: scope.merchantId,
      phone: phone || undefined,
      status: 1,
    })

    if (requestId !== memberRequestId) {
      return
    }

    members.value = (response.members ?? []).filter((member) => Number(member.status) === 1)
  } catch {
    if (requestId === memberRequestId) {
      memberError.value = '会员查询失败，请稍后重试'
      members.value = []
    }
  } finally {
    if (requestId === memberRequestId) {
      memberLoading.value = false
    }
  }
}

async function loadDishCategories() {
  const requestId = ++dishCategoryRequestId
  dishCategoryLoading.value = true
  dishCategoryError.value = ''

  try {
    const scope = await ensureActiveScope()

    if (requestId !== dishCategoryRequestId) {
      return
    }

    if (!scope) {
      dishCategories.value = []
      dishCategoryError.value = '暂无可用组织'
      return
    }

    const response = await getApiDishV1Categories({
      merchantId: scope.merchantId,
      storeId: scope.storeId,
    })

    if (requestId !== dishCategoryRequestId) {
      return
    }

    dishCategories.value = response.categories ?? []

    const activeId = activeDishCategoryId.value
    const exists = activeId === '0' || dishCategories.value.some((category) => normalizeText(category.id) === activeId)
    if (!exists) {
      selectedDishCategoryId.value = '0'
    }
  } catch {
    if (requestId === dishCategoryRequestId) {
      dishCategoryError.value = '菜品分类查询失败，请稍后重试'
      dishCategories.value = []
    }
  } finally {
    if (requestId === dishCategoryRequestId) {
      dishCategoryLoading.value = false
    }
  }
}

async function loadAllDishes(scope: OrgScopeSelection, categoryId: string): Promise<ApiDish[]> {
  const baseRequest = {
    'pageRequest.pageSize': DISH_PAGE_SIZE,
    categoryId,
    merchantId: scope.merchantId,
    onShelfFilter: ON_SHELF_FILTER,
    storeId: scope.storeId,
    tagId: '0',
  }

  const firstPage = await getApiDishV1Dishes({
    ...baseRequest,
    'pageRequest.page': 1,
  })

  const firstData = firstPage.dishes ?? []
  const pageSize = Number(firstPage.pageReply?.pageSize ?? DISH_PAGE_SIZE)
  const total = Number(firstPage.pageReply?.total ?? firstData.length)
  const totalPages = Math.max(1, Math.ceil(total / pageSize))
  const allDishes = [...firstData]

  if (totalPages <= 1) {
    return allDishes
  }

  for (let page = 2; page <= totalPages; page += 1) {
    const response = await getApiDishV1Dishes({
      ...baseRequest,
      'pageRequest.page': page,
    })
    allDishes.push(...(response.dishes ?? []))
  }

  return allDishes
}

async function loadDishes() {
  const requestId = ++dishRequestId
  dishLoading.value = true
  dishError.value = ''

  try {
    const scope = await ensureActiveScope()

    if (requestId !== dishRequestId) {
      return
    }

    if (!scope) {
      dishes.value = []
      dishError.value = '暂无可用组织'
      return
    }

    const allDishes = await loadAllDishes(scope, activeDishCategoryId.value)

    if (requestId !== dishRequestId) {
      return
    }

    dishes.value = allDishes.filter((dish) => dish.isOnShelf !== false)

    if (selectedDish.value && !dishes.value.some((dish) => dish.id === selectedDish.value?.id)) {
      selectedDish.value = null
      quantityInput.value = ''
      resetSubmittedTicket()
    }
  } catch {
    if (requestId === dishRequestId) {
      dishError.value = '菜品查询失败，请稍后重试'
      dishes.value = []
    }
  } finally {
    if (requestId === dishRequestId) {
      dishLoading.value = false
    }
  }
}

async function loadStorageFlows() {
  const memberId = selectedMemberId.value

  if (!memberId) {
    storageFlows.value = []
    return
  }

  const requestId = ++flowRequestId
  flowLoading.value = true
  flowError.value = ''

  try {
    const scope = await ensureActiveScope()

    if (requestId !== flowRequestId) {
      return
    }

    if (!scope) {
      storageFlows.value = []
      flowError.value = '暂无可用组织'
      return
    }

    const response = await getApiMemberV1StorageFlows({
      'pageRequest.page': 1,
      'pageRequest.pageSize': FLOW_PAGE_SIZE,
      memberId,
      merchantId: scope.merchantId,
      status: 'active',
      storeId: scope.storeId,
      type: 'deposit',
    })

    if (requestId !== flowRequestId) {
      return
    }

    storageFlows.value = (response.flows ?? []).filter((flow) => {
      const status = normalizeStatus(flow.status)
      return getFlowAvailableQuantity(flow) > 0 && status !== 'cancelled' && status !== 'expired' && status !== 'finished'
    })

    if (selectedFlow.value && !storageFlows.value.some((flow) => flow.id === selectedFlow.value?.id)) {
      selectedFlow.value = null
      quantityInput.value = ''
      resetSubmittedTicket()
    }
  } catch {
    if (requestId === flowRequestId) {
      flowError.value = '存酒流水查询失败，请稍后重试'
      storageFlows.value = []
    }
  } finally {
    if (requestId === flowRequestId) {
      flowLoading.value = false
    }
  }
}

function createBaseSnapshot(scope: OrgScopeSelection, dishId: string, dishName: string, dishUnit: string): TicketSnapshot | null {
  const member = selectedMember.value
  const memberId = selectedMemberId.value

  if (!member || !memberId || quantityValue.value <= 0) {
    return null
  }

  const remark = normalizeText(remarkInput.value)
  const snapshot: TicketSnapshot = {
    memberId,
    memberName: getMemberName(member),
    memberPhone: getMemberPhone(member),
    storeId: scope.storeId,
    storeName: scope.storeName,
    dishId,
    dishName,
    dishUnit,
    quantity: quantityValue.value,
    member: {
      id: memberId,
      name: getMemberName(member),
      phone: getMemberPhone(member),
      avatarUrl: normalizeText(member.avatarUrl),
    },
    store: {
      id: scope.storeId,
      name: scope.storeName,
    },
    dish: {
      id: dishId,
      name: dishName,
      unit: dishUnit,
    },
  }

  if (remark) {
    snapshot.remark = remark
  }

  return snapshot
}

function buildTicketRequest(type: 'member_wine_deposit' | 'member_wine_withdraw', snapshot: TicketSnapshot): WineTicketSubmitRequest {
  const snapshotJson = JSON.stringify(snapshot)

  return {
    applicantId: snapshot.memberId,
    entityJson: snapshotJson,
    merchantId: selectedScope.value?.merchantId,
    payload: snapshotJson,
    storeId: snapshot.storeId,
    targetId: snapshot.memberId,
    targetType: 'member',
    type,
  }
}

async function submitDeposit() {
  const scope = selectedScope.value
  const dish = selectedDish.value

  if (!scope || !dish) {
    return
  }

  const snapshot = createBaseSnapshot(scope, normalizeText(dish.id), getDishName(dish), getDishUnit(dish))
  if (!snapshot) {
    return
  }

  await submitTicket(buildTicketRequest('member_wine_deposit', snapshot), dish, snapshot)
}

async function submitWithdraw() {
  const scope = selectedScope.value
  const flow = selectedFlow.value

  if (!scope || !flow) {
    return
  }

  const availableQuantity = getFlowAvailableQuantity(flow)
  if (quantityValue.value > availableQuantity) {
    flowError.value = `取酒数量不能超过可取数量 ${formatQuantity(availableQuantity)}`
    return
  }

  const snapshot = createBaseSnapshot(
    scope,
    normalizeText(flow.dishId),
    getFlowDishName(flow),
    getFlowUnit(),
  )
  if (!snapshot) {
    return
  }

  snapshot.storageRecordId = getFlowStorageRecordId(flow)
  snapshot.storageStoreId = normalizeText(flow.storageStoreId) || normalizeText(flow.storeId)
  snapshot.storageStoreName = normalizeText(flow.storageStoreName) || normalizeText(flow.storeName) || scope.storeName
  snapshot.storageStore = {
    id: snapshot.storageStoreId,
    name: snapshot.storageStoreName,
  }
  snapshot.withdrawQuantity = quantityValue.value
  snapshot.remainingQuantity = Math.max(availableQuantity - quantityValue.value, 0)

  await submitTicket(buildTicketRequest('member_wine_withdraw', snapshot), flow, snapshot)
}

async function submitCurrent() {
  if (mode.value === 'deposit') {
    await submitDeposit()
    return
  }

  await submitWithdraw()
}

async function submitTicket(request: WineTicketSubmitRequest, entity: ApiDish | ApiStorageFlow, snapshot: TicketSnapshot) {
  submitting.value = true

  try {
    const response = await postApiTicketV1Tickets(request)
    submittedTicket.value = response.ticket ?? ({} as ApiTicket)
    submittedEntity.value = entity
    submittedSnapshot.value = snapshot
  } catch {
    if (mode.value === 'deposit') {
      dishError.value = '提交存酒工单失败，请稍后重试'
    } else {
      flowError.value = '提交取酒工单失败，请稍后重试'
    }
  } finally {
    submitting.value = false
  }
}

function continueCurrentMode() {
  resetBusinessSelection()

  if (mode.value === 'withdraw') {
    void loadStorageFlows()
  }
}
</script>
