<script setup lang="ts">
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  CloseOutlined,
  CrownOutlined,
  FireOutlined,
  ShopOutlined,
  TableOutlined,
  WalletOutlined,
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { computed, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import brandMarkUrl from '@/assets/bgc.jpg'
import TableSeatPicker from '@/components/TableSeatPicker.vue'
import {
  getApiOrderV1Orders,
  type GetApiOrderV1OrdersResponse,
  type PostApiStoreV1BusinessCurrentResponse,
} from '@/services/basis/basis'
import { useOrgScopeStore } from '@/stores/orgScope'
import type { OrgScopeSelection } from '@/stores/orgScope'
import { useTableSeatStore } from '@/stores/tableSeat'
import { clearAuthSession, getUserInfo } from '@/utils/auth'

type ApiOrder = NonNullable<GetApiOrderV1OrdersResponse['orders']>[number]
type ApiOrderWithTimestamps = ApiOrder & {
  createdAt?: string
  updatedAt?: string
}
type CurrentBusiness = NonNullable<PostApiStoreV1BusinessCurrentResponse['business']>
type OrderStatusTone = 'done' | 'live' | 'making' | 'pending'

interface LatestOrderItem {
  key: string
  name: string
  quantity: string
  totalPrice: string
  unitPrice: string
}

interface LatestOrderCard {
  amount: string
  dailySeqLabel: string
  hasMoreItems: boolean
  items: LatestOrderItem[]
  meta: string
  status: string
  statusTone: OrderStatusTone
  time: string
  title: string
}

const HOME_LATEST_ORDER_ITEM_PREVIEW_LIMIT = 3
const HOME_LATEST_ORDER_PAGE_SIZE = 20

const router = useRouter()
const orgScopeStore = useOrgScopeStore()
const tableSeatStore = useTableSeatStore()
const userInfo = computed(() => getUserInfo())
const displayName = computed(() => userInfo.value?.name || userInfo.value?.phone || '玩家')
const selectedScope = computed(() => orgScopeStore.selected)
const currentBusiness = computed(() => orgScopeStore.currentBusiness)
const scopeCardTitle = computed(() => {
  if (orgScopeStore.loading && !selectedScope.value) return '组织加载中'

  return selectedScope.value?.storeName || '暂无可用门店'
})

const isTablePickerOpen = ref(false)
const isScopePickerOpen = ref(false)
const latestOrder = ref<ApiOrder | null>(null)
const latestOrderLoading = ref(false)
const latestOrderError = ref('')

let latestOrderRequestId = 0

const normalizeText = (value: unknown) => {
  if (value === undefined || value === null) return ''

  return String(value).trim()
}

const normalizeStatus = (value: unknown) => normalizeText(value).toLowerCase()

const parseDateText = (value?: string) => {
  const text = normalizeText(value)
  if (!text) return null

  const isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(text)
  const normalizedText = isDateOnly ? `${text}T00:00:00` : text.replace(' ', 'T')
  const date = new Date(normalizedText)

  if (Number.isNaN(date.getTime())) return null

  return date
}

const padDatePart = (value: number) => String(value).padStart(2, '0')

const formatDateKey = (date: Date) => {
  const year = date.getFullYear()
  const month = padDatePart(date.getMonth() + 1)
  const day = padDatePart(date.getDate())

  return `${year}-${month}-${day}`
}

const normalizeDateKey = (value?: string) => {
  const text = normalizeText(value)
  if (!text) return ''

  const dateMatch = text.match(/^(\d{4}-\d{2}-\d{2})/)
  if (dateMatch) return dateMatch[1]

  const date = parseDateText(text)

  return date ? formatDateKey(date) : ''
}

const formatBusinessDate = (value?: string) => {
  const date = parseDateText(value)
  if (!date) return '--'

  return date.toLocaleDateString('zh-CN', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

const formatBusinessTime = (value?: string) => {
  const text = normalizeText(value)
  const timeMatch = text.match(/^(\d{1,2}:\d{2})/)

  if (timeMatch) return timeMatch[1]

  const date = parseDateText(text)
  if (!date) return '--'

  return date.toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
  })
}

const formatBusinessDateTime = (value?: string) => {
  const date = parseDateText(value)
  if (!date) return '--'

  const year = date.getFullYear()
  const month = padDatePart(date.getMonth() + 1)
  const day = padDatePart(date.getDate())
  const hours = padDatePart(date.getHours())
  const minutes = padDatePart(date.getMinutes())
  const seconds = padDatePart(date.getSeconds())

  return `${year}年${month}月${day}日 ${hours}:${minutes}:${seconds}`
}

const formatMoney = (value?: string) => {
  const cents = Number(value)
  if (!Number.isFinite(cents)) return '¥0'

  return new Intl.NumberFormat('zh-CN', {
    currency: 'CNY',
    maximumFractionDigits: 2,
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
    style: 'currency',
  }).format(cents / 100)
}

const parseCents = (value?: string) => {
  const cents = Number(value)

  return Number.isFinite(cents) ? cents : null
}

const formatQuantity = (value?: number | string) => {
  const quantity = Number(value)
  if (!Number.isFinite(quantity)) return ''

  return new Intl.NumberFormat('zh-CN', {
    maximumFractionDigits: 2,
  }).format(quantity)
}

const orderStatusMap: Record<
  string,
  {
    label: string
    tone: OrderStatusTone
  }
> = {
  cancelled: {
    label: '已取消',
    tone: 'done',
  },
  completed: {
    label: '已完成',
    tone: 'done',
  },
  paid: {
    label: '已支付',
    tone: 'making',
  },
  pending: {
    label: '待支付',
    tone: 'pending',
  },
}

const businessStatus = computed(() => {
  if (orgScopeStore.currentBusinessLoading && !currentBusiness.value) {
    return {
      className: 'is-loading',
      text: '同步中',
    }
  }

  if (orgScopeStore.currentBusinessErrorMessage) {
    return {
      className: 'is-error',
      text: '加载失败',
    }
  }

  const business = currentBusiness.value
  if (!business) {
    return {
      className: 'is-idle',
      text: '未开市',
    }
  }

  const status = normalizeText(business.status).toLowerCase()
  if (business.closedAt || ['2', 'closed', 'close', 'disabled', 'inactive'].includes(status)) {
    return {
      className: 'is-closed',
      text: '已打烊',
    }
  }

  return {
    className: 'is-open',
    text: '营业中',
  }
})

const businessDateText = computed(() => {
  if (orgScopeStore.currentBusinessLoading && !currentBusiness.value) return '同步中'

  return formatBusinessDate(currentBusiness.value?.businessDate)
})

const businessOpenedAtText = computed(() => {
  if (orgScopeStore.currentBusinessLoading && !currentBusiness.value) return '同步中'

  return formatBusinessTime(currentBusiness.value?.openedAt)
})

const scopeCardSubtitle = computed(() => {
  if (orgScopeStore.loading && !selectedScope.value) return '正在获取商户与门店'
  if (!selectedScope.value) return '请联系管理员分配组织范围'

  return `营业日期：${businessDateText.value}，开市时间：${businessOpenedAtText.value}`
})

const isBusinessForScope = (business: CurrentBusiness | null, scope: OrgScopeSelection) => {
  const businessMerchantId = normalizeText(business?.merchantId || business?.merchant?.id)
  const businessStoreId = normalizeText(business?.storeId || business?.store?.id)

  if (businessMerchantId && businessMerchantId !== scope.merchantId) return false
  if (businessStoreId && businessStoreId !== scope.storeId) return false

  return true
}

const getOrderCreatedAt = (order: ApiOrder) =>
  normalizeText((order as ApiOrderWithTimestamps).createdAt)

const getOrderUpdatedAt = (order: ApiOrder) =>
  normalizeText((order as ApiOrderWithTimestamps).updatedAt)

const getOrderSortTime = (order: ApiOrder) => {
  const timeCandidates = [
    getOrderCreatedAt(order),
    normalizeText(order.paidAt),
    normalizeText(order.completedAt),
    getOrderUpdatedAt(order),
    normalizeText(order.businessDate || order.business?.businessDate),
  ]

  return Math.max(
    0,
    ...timeCandidates.map((value) => parseDateText(value)?.getTime() ?? 0),
  )
}

const getOrderDailySeqNumber = (order: ApiOrder) => {
  const dailySeqNumber = Number(normalizeText(order.dailySeq))

  return Number.isFinite(dailySeqNumber) ? dailySeqNumber : 0
}

const compareLatestOrder = (left: ApiOrder, right: ApiOrder) => {
  const seqDelta = getOrderDailySeqNumber(right) - getOrderDailySeqNumber(left)
  if (seqDelta !== 0) return seqDelta

  const timeDelta = getOrderSortTime(right) - getOrderSortTime(left)
  if (timeDelta !== 0) return timeDelta

  return 0
}

const isOrderInCurrentBusiness = (
  order: ApiOrder,
  business: CurrentBusiness,
  scope: OrgScopeSelection,
) => {
  const orderMerchantId = normalizeText(order.merchantId || order.merchant?.id)
  const orderStoreId = normalizeText(order.storeId || order.store?.id)

  if (orderMerchantId && orderMerchantId !== scope.merchantId) return false
  if (orderStoreId && orderStoreId !== scope.storeId) return false

  const businessId = normalizeText(business.id)
  const orderBusinessId = normalizeText(order.businessId || order.business?.id)

  if (businessId && orderBusinessId) return businessId === orderBusinessId

  const businessDate = normalizeDateKey(business.businessDate)
  const orderBusinessDate = normalizeDateKey(order.businessDate || order.business?.businessDate)

  return Boolean(businessDate && orderBusinessDate && businessDate === orderBusinessDate)
}

const getLatestOrderFromPage = (
  orders: ApiOrder[],
  business: CurrentBusiness,
  scope: OrgScopeSelection,
) =>
  orders
    .filter((order) => isOrderInCurrentBusiness(order, business, scope))
    .sort(compareLatestOrder)[0] ?? null

const requestLatestOrderPage = async (page: number, scope: OrgScopeSelection) =>
  getApiOrderV1Orders({
    'pageRequest.page': page,
    'pageRequest.pageSize': HOME_LATEST_ORDER_PAGE_SIZE,
    merchantId: scope.merchantId,
    storeId: scope.storeId,
  })

const fetchLatestOrderForBusiness = async (
  business: CurrentBusiness,
  scope: OrgScopeSelection,
) => {
  const firstPageResult = await requestLatestOrderPage(1, scope)
  const firstPageOrders = firstPageResult.orders ?? []
  const total = Number(firstPageResult.pageReply?.total)
  const lastPage = Number.isFinite(total)
    ? Math.ceil(total / HOME_LATEST_ORDER_PAGE_SIZE)
    : 1

  if (lastPage <= 1) {
    return getLatestOrderFromPage(firstPageOrders, business, scope)
  }

  const lastPageResult = await requestLatestOrderPage(lastPage, scope)
  const lookupOrders = [...firstPageOrders, ...(lastPageResult.orders ?? [])]

  return getLatestOrderFromPage(lookupOrders, business, scope)
}

const loadLatestOrder = async () => {
  const requestId = ++latestOrderRequestId
  const scope = selectedScope.value
  const business = currentBusiness.value

  latestOrderError.value = ''
  latestOrder.value = null

  if (!scope) {
    latestOrderLoading.value = false
    return
  }

  if (
    orgScopeStore.currentBusinessLoading &&
    (!business || !isBusinessForScope(business, scope))
  ) {
    latestOrderLoading.value = true
    return
  }

  if (
    orgScopeStore.currentBusinessErrorMessage ||
    !business ||
    !isBusinessForScope(business, scope)
  ) {
    latestOrderLoading.value = false
    return
  }

  latestOrderLoading.value = true

  try {
    const order = await fetchLatestOrderForBusiness(business, scope)

    if (requestId !== latestOrderRequestId) return

    latestOrder.value = order
  } catch {
    if (requestId !== latestOrderRequestId) return

    latestOrderError.value = '订单信息加载失败'
  } finally {
    if (requestId === latestOrderRequestId) {
      latestOrderLoading.value = false
    }
  }
}

const getStatusConfig = (order: ApiOrder) => {
  const status = normalizeStatus(order.status)

  return (
    orderStatusMap[status] ?? {
      label: status || '处理中',
      tone: 'live' as const,
    }
  )
}

const getOrderTitle = (order: ApiOrder) => {
  const orderType = normalizeStatus(order.orderType)
  const tableName = normalizeText(order.table?.name)
  const memberName = normalizeText(order.member?.name)

  if (orderType === 'recharge') {
    return memberName ? `${memberName} 充值订单` : '充值订单'
  }

  if (tableName) return `${tableName} 消费订单`
  if (memberName) return `${memberName} 消费订单`

  return '消费订单'
}

const getOrderItemTotalCents = (item: NonNullable<ApiOrder['items']>[number]) => {
  const totalCents =
    parseCents(item.payableSubtotal) ?? parseCents(item.subtotal) ?? parseCents(item.originalSubtotal)

  if (totalCents !== null) return totalCents

  const priceCents = parseCents(item.price)
  const quantity = Number(item.quantity ?? 0)

  if (priceCents === null || !Number.isFinite(quantity)) return null

  return Math.round(priceCents * quantity)
}

const getOrderItemUnitPriceCents = (item: NonNullable<ApiOrder['items']>[number]) => {
  const priceCents = parseCents(item.price)
  if (priceCents !== null) return priceCents

  const totalCents = getOrderItemTotalCents(item)
  const quantity = Number(item.quantity ?? 0)

  if (totalCents === null || !Number.isFinite(quantity) || quantity <= 0) return null

  return Math.round(totalCents / quantity)
}

const getOrderItemName = (item: NonNullable<ApiOrder['items']>[number]) => {
  const name = normalizeText(item.dishName) || normalizeText(item.dish?.name)

  return name || '未命名菜品'
}

const getOrderItems = (order: ApiOrder): LatestOrderItem[] =>
  (order.items ?? []).map((item, index) => {
    const name = getOrderItemName(item)
    const itemKey =
      normalizeText(item.dishId) || normalizeText(item.dish?.id) || normalizeText(item.dishName) || name
    const quantity = Number(item.quantity ?? 0)
    const unitPriceCents = getOrderItemUnitPriceCents(item)
    const totalPriceCents = getOrderItemTotalCents(item)

    return {
      key: `${itemKey}-${index}`,
      name,
      quantity: formatQuantity(quantity) || '0',
      totalPrice: totalPriceCents === null ? '--' : formatMoney(String(totalPriceCents)),
      unitPrice: unitPriceCents === null ? '--' : formatMoney(String(unitPriceCents)),
    }
  })

const getOrderMeta = (order: ApiOrder) => {
  const memberName = normalizeText(order.member?.name)
  const memberPhone = normalizeText(order.member?.phone)
  const memberInfo = [memberName, memberPhone].filter(Boolean).join(' ')

  return memberInfo ? `会员 ${memberInfo}` : ''
}

const getOrderAmount = (order: ApiOrder) =>
  formatMoney(
    order.payableAmount ||
      order.totalAmount ||
      order.originalAmount ||
      order.rechargeSummary?.rechargeAmount,
  )

const getOrderTime = (order: ApiOrder) => {
  const timeText =
    getOrderCreatedAt(order) ||
    normalizeText(order.paidAt) ||
    normalizeText(order.completedAt) ||
    getOrderUpdatedAt(order)

  if (timeText) return formatBusinessDateTime(timeText)

  return formatBusinessDateTime(order.businessDate || order.business?.businessDate)
}

const latestOrderCard = computed<LatestOrderCard | null>(() => {
  const order = latestOrder.value
  if (!order) return null

  const statusConfig = getStatusConfig(order)
  const items = getOrderItems(order)

  return {
    amount: getOrderAmount(order),
    dailySeqLabel: normalizeText(order.dailySeq || order.orderNo) || '--',
    hasMoreItems: items.length > HOME_LATEST_ORDER_ITEM_PREVIEW_LIMIT,
    items: items.slice(0, HOME_LATEST_ORDER_ITEM_PREVIEW_LIMIT),
    meta: getOrderMeta(order),
    status: statusConfig.label,
    statusTone: statusConfig.tone,
    time: getOrderTime(order),
    title: getOrderTitle(order),
  }
})

watch(
  () => [
    selectedScope.value?.merchantId,
    selectedScope.value?.storeId,
    currentBusiness.value?.id,
    currentBusiness.value?.businessDate,
    orgScopeStore.currentBusinessLoading,
    orgScopeStore.currentBusinessErrorMessage,
  ],
  () => {
    void loadLatestOrder()
  },
  { immediate: true },
)

const openTablePicker = () => {
  isTablePickerOpen.value = true
}

const openScopePicker = () => {
  isScopePickerOpen.value = true

  if (!orgScopeStore.loaded && !orgScopeStore.loading) {
    void orgScopeStore.loadMyScopes().catch(() => {
      message.error('组织范围加载失败，请稍后重试')
    })
  }
}

const closeScopePicker = () => {
  isScopePickerOpen.value = false
}

const selectScope = (merchantId?: string, storeId?: string) => {
  if (!merchantId || !storeId) return

  const previousScope = selectedScope.value
  const selection = orgScopeStore.selectScope(merchantId, storeId)

  if (!selection) {
    message.warning('该组织暂不可用')
    return
  }

  if (
    previousScope?.merchantId !== selection.merchantId ||
    previousScope?.storeId !== selection.storeId
  ) {
    tableSeatStore.clearSelectedSeat()
  }

  message.success(`已切换至 ${selection.merchantName} / ${selection.storeName}`)
  closeScopePicker()
}

const handleLogout = async () => {
  tableSeatStore.clearSelectedSeat()
  orgScopeStore.resetSession()
  clearAuthSession()
  await router.replace({
    name: 'login',
  })
}
</script>

<template>
  <main class="tab-page home-page" aria-label="首页">
    <section class="home-topbar">
      <div class="home-wordmark">
        <span>WULIN SCALE</span>
        <strong>無鳞</strong>
      </div>

      <button class="home-logout" type="button" @click="handleLogout">退出</button>
    </section>

    <section class="home-hero" aria-label="無鳞首页">
      <div class="home-hero-mark" aria-hidden="true">
        <img :src="brandMarkUrl" alt="" />
      </div>

      <div class="home-hero-copy">
        <p>THE SCALE BAR</p>
        <h1>欢迎回来，{{ displayName }}</h1>
        <span>今晚的牌桌已经亮起</span>
      </div>
    </section>

    <section class="home-action-grid" aria-label="快捷入口">
      <button
        class="home-action-tile home-action-button"
        type="button"
        aria-haspopup="dialog"
        :aria-expanded="isTablePickerOpen"
        @click="openTablePicker"
      >
        <TableOutlined class="home-action-icon" />
        <span>TABLE</span>
        <strong>开台</strong>
        <small>牌桌管理</small>
      </button>

      <RouterLink class="home-action-tile" :to="{ name: 'menu' }">
        <FireOutlined class="home-action-icon" />
        <span>ORDER</span>
        <strong>点单</strong>
        <small>酒水小食</small>
      </RouterLink>
    </section>

    <button
      class="home-account-card home-scope-card"
      type="button"
      aria-haspopup="dialog"
      :aria-expanded="isScopePickerOpen"
      @click="openScopePicker"
    >
      <span class="home-account-avatar home-scope-avatar" aria-hidden="true">
        <ShopOutlined />
      </span>
      <span class="home-account-copy">
        <strong>{{ scopeCardTitle }}</strong>
        <small>{{ scopeCardSubtitle }}</small>
        <span
          v-if="selectedScope"
          class="home-business-status-tag"
          :class="businessStatus.className"
        >
          开市状态：{{ businessStatus.text }}
        </span>
      </span>
      <ArrowRightOutlined class="home-card-arrow" />
    </button>

    <section class="home-mini-grid" aria-label="服务入口">
      <RouterLink class="home-mini-card" :to="{ name: 'orders' }">
        <span>
          <strong>订单</strong>
          <small>ORDERS</small>
        </span>
        <CrownOutlined class="home-mini-icon" />
      </RouterLink>

      <RouterLink class="home-mini-card" :to="{ name: 'mine' }">
        <span>
          <strong>筹码</strong>
          <small>WALLET</small>
        </span>
        <WalletOutlined class="home-mini-icon" />
      </RouterLink>
    </section>

    <RouterLink class="home-latest-order-card" :to="{ name: 'orders' }" aria-label="查看最新订单">
      <div class="home-latest-order-copy">
        <template v-if="latestOrderCard">
          <p>{{ latestOrderCard.time }}</p>
          <div class="home-latest-order-head">
            <span class="home-latest-order-seq">
              <strong>#{{ latestOrderCard.dailySeqLabel }}</strong>
              <em>{{ latestOrderCard.amount }}</em>
            </span>
            <span class="home-latest-order-status" :class="`is-${latestOrderCard.statusTone}`">
              {{ latestOrderCard.status }}
            </span>
          </div>
          <strong class="home-latest-order-title">{{ latestOrderCard.title }}</strong>
          <span v-if="latestOrderCard.meta">{{ latestOrderCard.meta }}</span>
          <div class="home-latest-order-items">
            <div
              v-for="item in latestOrderCard.items"
              :key="item.key"
              class="home-latest-order-item"
            >
              <span class="home-latest-order-item-name">{{ item.name }}</span>
              <span class="home-latest-order-item-quantity">x{{ item.quantity }}</span>
              <span class="home-latest-order-item-unit">单价 {{ item.unitPrice }}</span>
              <strong class="home-latest-order-item-total">总价 {{ item.totalPrice }}</strong>
            </div>
            <span v-if="!latestOrderCard.items.length">暂无菜品明细</span>
            <span v-else-if="latestOrderCard.hasMoreItems" class="home-latest-order-more">
              前往订单页查看详情
            </span>
          </div>
        </template>

        <template v-else-if="latestOrderLoading">
          <p>最新订单</p>
          <strong class="home-latest-order-title">正在加载订单</strong>
          <span>{{ selectedScope?.storeName || '当前门店' }}</span>
        </template>

        <template v-else-if="latestOrderError">
          <p>最新订单</p>
          <strong class="home-latest-order-title">订单加载失败</strong>
          <span>{{ latestOrderError }}</span>
        </template>

        <template v-else-if="orgScopeStore.currentBusinessErrorMessage">
          <p>最新订单</p>
          <strong class="home-latest-order-title">营业记录加载失败</strong>
          <span>请稍后重新进入首页</span>
        </template>

        <template v-else-if="!selectedScope">
          <p>最新订单</p>
          <strong class="home-latest-order-title">暂无可用门店</strong>
          <span>请联系管理员分配组织范围</span>
        </template>

        <template v-else-if="!currentBusiness">
          <p>最新订单</p>
          <strong class="home-latest-order-title">暂无营业日</strong>
          <span>开市后展示最新订单</span>
        </template>

        <template v-else>
          <p>最新订单</p>
          <strong class="home-latest-order-title">暂无订单</strong>
          <span>{{ businessDateText }} 尚无订单</span>
        </template>
      </div>
      <ArrowRightOutlined class="home-card-arrow" />
    </RouterLink>

    <TableSeatPicker v-model:open="isTablePickerOpen" />

    <section
      v-if="isScopePickerOpen"
      class="table-picker-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="切换组织"
      @click.self="closeScopePicker"
    >
      <div class="table-picker-sheet scope-picker-sheet">
        <header class="table-picker-head">
          <div>
            <p>ORGANIZATION</p>
            <h2>切换组织</h2>
          </div>

          <button class="table-picker-close" type="button" aria-label="关闭" @click="closeScopePicker">
            <CloseOutlined />
          </button>
        </header>

        <div class="table-picker-stats" aria-label="组织概览">
          <span>
            <strong>{{ orgScopeStore.scopes.length }}</strong>
            <small>商户</small>
          </span>
          <span>
            <strong>{{ orgScopeStore.storeCount }}</strong>
            <small>门店</small>
          </span>
        </div>

        <div class="table-group-list scope-group-list">
          <p v-if="orgScopeStore.loading" class="scope-empty-text">正在加载组织</p>
          <p v-else-if="!orgScopeStore.storeCount" class="scope-empty-text">暂无可用组织</p>

          <template v-else>
            <section
              v-for="scope in orgScopeStore.scopes"
              :key="scope.merchant?.id || scope.merchant?.name"
              class="table-group scope-group"
            >
              <header class="table-group-head">
                <div>
                  <span>MERCHANT</span>
                  <h3>{{ scope.merchant?.name || '未命名商户' }}</h3>
                </div>
                <small>{{ scope.stores?.length ?? 0 }} 个门店</small>
              </header>

              <div class="scope-store-list">
                <button
                  v-for="store in scope.stores"
                  :key="`${scope.merchant?.id}-${store.id}`"
                  class="scope-store-card"
                  :class="{
                    'is-selected':
                      selectedScope?.merchantId === scope.merchant?.id &&
                      selectedScope?.storeId === store.id,
                  }"
                  type="button"
                  :aria-pressed="
                    selectedScope?.merchantId === scope.merchant?.id &&
                    selectedScope?.storeId === store.id
                  "
                  @click="selectScope(scope.merchant?.id, store.id)"
                >
                  <span class="scope-store-copy">
                    <strong>{{ store.name || '未命名门店' }}</strong>
                    <small>{{ scope.merchant?.name || '未命名商户' }}</small>
                  </span>
                  <CheckCircleFilled
                    v-if="
                      selectedScope?.merchantId === scope.merchant?.id &&
                      selectedScope?.storeId === store.id
                    "
                    class="scope-store-check"
                  />
                </button>
              </div>
            </section>
          </template>
        </div>
      </div>
    </section>
  </main>
</template>
