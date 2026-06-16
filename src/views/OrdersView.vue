<script setup lang="ts">
import {
  ArrowLeftOutlined,
  CalendarOutlined,
  CheckCircleFilled,
  CreditCardOutlined,
  DownOutlined,
  PlusOutlined,
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { computed, nextTick, onMounted, ref, watch, type Component } from 'vue'
import { useRouter } from 'vue-router'
import {
  getApiOrderV1Orders,
  type GetApiOrderV1OrdersResponse,
} from '@/services/basis/basis'
import { useOrgScopeStore } from '@/stores/orgScope'

const router = useRouter()
const orgScopeStore = useOrgScopeStore()

type ApiOrder = NonNullable<GetApiOrderV1OrdersResponse['orders']>[number]
type ApiOrderPromotion = NonNullable<ApiOrder['promotions']>[number]
type ApiOrderWithCreatedAt = ApiOrder & { createdAt?: string }
type OrderStatusTone = 'live' | 'making' | 'pending' | 'done'

interface TimelineOrderDetail {
  label: string
  value: string
}

interface TimelineOrderItem {
  key: string
  name: string
  quantity: string
  totalPrice: string
  unitPrice: string
}

interface TimelinePromotion {
  key: string
  meta: string
  name: string
}

interface TimelineOrder {
  amount: string
  dailySeqLabel: string
  details: TimelineOrderDetail[]
  icon: Component
  isExpanded: boolean
  items: TimelineOrderItem[]
  key: string
  meta: string
  promotions: TimelinePromotion[]
  status: string
  statusTone: OrderStatusTone
  tag: string
  time: string
  title: string
}

const ORDER_PAGE_SIZE = 10
const LOAD_MORE_DISTANCE = 72

const orders = ref<ApiOrder[]>([])
const currentPage = ref(0)
const totalOrders = ref(0)
const hasMoreOrders = ref(true)
const isInitialLoading = ref(false)
const isLoadingMore = ref(false)
const ordersError = ref('')
const loadMoreError = ref('')
const orderListRef = ref<HTMLElement | null>(null)
const expandedOrderKeys = ref<Set<string>>(new Set())
const today = new Date()

let ordersRequestId = 0

const selectedScope = computed(() => orgScopeStore.selected)
const selectedScopeKey = computed(() => {
  const scope = selectedScope.value
  if (!scope) return ''

  return `${scope.merchantId}:${scope.storeId}`
})

const orderDays = Array.from({ length: 7 }, (_, index) => {
  const date = new Date(today)
  date.setDate(today.getDate() + index - 2)

  return {
    active: date.toDateString() === today.toDateString(),
    date: String(date.getDate()).padStart(2, '0'),
    label: date.toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase(),
  }
})

const heroDateLabel = today
  .toLocaleDateString('zh-CN', {
    month: '2-digit',
    day: '2-digit',
  })
  .replace(/\//g, '.')

const orderStats = computed(() => {
  const loadedOrders = orders.value
  const pendingCount = loadedOrders.filter((order) => normalizeStatus(order.status) === 'pending').length
  const completedCount = loadedOrders.filter(
    (order) => normalizeStatus(order.status) === 'completed',
  ).length
  const total = totalOrders.value || loadedOrders.length

  return [
    { label: '消费订单', value: String(total) },
    { label: '待支付', value: String(pendingCount) },
    { label: '已完成', value: String(completedCount) },
  ]
})

const normalizeText = (value: unknown) => {
  if (value === undefined || value === null) return ''

  return String(value).trim()
}

const normalizeStatus = (value: unknown) => normalizeText(value).toLowerCase()

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

const paymentMethodMap: Record<string, string> = {
  free: '免费',
  gold: '金币支付',
  wechat: '微信支付',
}

const promotionStatusMap: Record<string, string> = {
  locked: '已锁定',
  released: '已释放',
  used: '已核销',
  voided: '已作废',
}

const promotionTypeMap: Record<string, string> = {
  coupon: '优惠券',
  discount: '自动折扣',
}

const refundStatusMap: Record<string, string> = {
  approved: '已同意',
  completed: '已退款',
  failed: '退款失败',
  none: '无退款',
  pending: '退款中',
  rejected: '已驳回',
}

const waitForOrgScopeLoading = () =>
  new Promise<void>((resolve) => {
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

const ensureActiveScope = async () => {
  if (selectedScope.value) return selectedScope.value

  if (!orgScopeStore.loaded && !orgScopeStore.loading) {
    await orgScopeStore.loadMyScopes()
  } else if (orgScopeStore.loading) {
    await waitForOrgScopeLoading()
  }

  return selectedScope.value
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

const formatQuantity = (value?: number) => {
  const quantity = Number(value)
  if (!Number.isFinite(quantity)) return '0'

  return new Intl.NumberFormat('zh-CN', {
    maximumFractionDigits: 2,
  }).format(quantity)
}

const parseDateText = (value?: string) => {
  const text = normalizeText(value)
  if (!text) return null

  const isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(text)
  const date = new Date(isDateOnly ? `${text}T00:00:00` : text)

  if (Number.isNaN(date.getTime())) return null

  return {
    date,
    isDateOnly,
  }
}

const formatDateTime = (value?: string) => {
  const parsedDate = parseDateText(value)
  if (!parsedDate) return '--'

  if (parsedDate.isDateOnly) {
    return parsedDate.date.toLocaleDateString('zh-CN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }

  return parsedDate.date.toLocaleString('zh-CN', {
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

const formatOrderTime = (order: ApiOrder) => {
  const parsedDate =
    parseDateText(order.paidAt) ?? parseDateText(order.completedAt) ?? parseDateText(order.businessDate)

  if (!parsedDate) return '--:--'

  if (parsedDate.isDateOnly) {
    return parsedDate.date.toLocaleDateString('zh-CN', {
      day: '2-digit',
      month: '2-digit',
    })
  }

  return parsedDate.date.toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
  })
}

const getPaymentMethodLabel = (value?: string) => {
  const method = normalizeStatus(value)

  return paymentMethodMap[method] ?? ''
}

const getRefundLabel = (order: ApiOrder) => {
  const status = normalizeStatus(order.refundStatus)
  const refundAmountCents = parseCents(order.refundAmount)
  const hasRefund =
    (Boolean(status) && status !== 'none') ||
    (refundAmountCents !== null && refundAmountCents > 0)

  if (!hasRefund) return '无退款'

  const statusText = status && status !== 'none' ? refundStatusMap[status] || status : '有退款'
  const amountText =
    refundAmountCents !== null && refundAmountCents > 0
      ? ` ${formatMoney(String(refundAmountCents))}`
      : ''

  return `${statusText}${amountText}`
}

const getPromotionMeta = (promotion: ApiOrderPromotion) => {
  const type = normalizeStatus(promotion.promotionType)
  const status = normalizeStatus(promotion.status)
  const discountAmountCents = parseCents(promotion.discountAmount)
  const promotionId = normalizeText(promotion.promotionId)
  const metaParts = [
    promotionTypeMap[type] || type,
    discountAmountCents !== null && discountAmountCents > 0
      ? `优惠 ${formatMoney(String(discountAmountCents))}`
      : '',
    promotionStatusMap[status] || status,
    promotionId ? `规则ID ${promotionId}` : '',
  ].filter(Boolean)

  return metaParts.join(' · ') || '营销规则'
}

const getOrderPromotions = (order: ApiOrder): TimelinePromotion[] =>
  (order.promotions ?? []).map((promotion, index) => {
    const type = normalizeStatus(promotion.promotionType)
    const name = normalizeText(promotion.name) || promotionTypeMap[type] || `营销规则 ${index + 1}`
    const promotionKey =
      normalizeText(promotion.promotionId) || normalizeText(promotion.memberCouponId) || name

    return {
      key: `${promotionKey}-${index}`,
      meta: getPromotionMeta(promotion),
      name,
    }
  })

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

const getOrderItems = (order: ApiOrder): TimelineOrderItem[] =>
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
      quantity: formatQuantity(quantity),
      totalPrice: totalPriceCents === null ? '¥0' : formatMoney(String(totalPriceCents)),
      unitPrice: unitPriceCents === null ? '¥0' : formatMoney(String(unitPriceCents)),
    }
  })

const getOrderTitle = (order: ApiOrder) => {
  const tableName = normalizeText(order.table?.name)
  const memberName = normalizeText(order.member?.name)

  if (tableName) return `${tableName} 消费订单`
  if (memberName) return `${memberName} 消费订单`

  return '消费订单'
}

const getOrderMeta = (order: ApiOrder) => {
  const paymentMethod = getPaymentMethodLabel(order.paymentMethod) || '支付方式 --'
  const memberName = normalizeText(order.member?.name)
  const memberPhone = normalizeText(order.member?.phone)
  const memberInfo = [memberName, memberPhone].filter(Boolean).join(' ')
  const metaParts = [
    paymentMethod,
    memberInfo ? `会员 ${memberInfo}` : '会员 --',
  ].filter(Boolean)

  return metaParts.join(' · ') || '店内消费'
}

const getOrderCreatedAt = (order: ApiOrder) => normalizeText((order as ApiOrderWithCreatedAt).createdAt)

const getOrderDetails = (order: ApiOrder): TimelineOrderDetail[] => [
  {
    label: '订单号',
    value: normalizeText(order.orderNo) || '--',
  },
  {
    label: '创建时间',
    value: formatDateTime(getOrderCreatedAt(order)),
  },
  {
    label: '会员ID',
    value: normalizeText(order.memberId) || normalizeText(order.member?.id) || '--',
  },
  {
    label: '退款',
    value: getRefundLabel(order),
  },
]

const hasOrderMember = (order: ApiOrder) =>
  Boolean(
    normalizeText(order.memberId) ||
      normalizeText(order.member?.id) ||
      normalizeText(order.member?.name) ||
      normalizeText(order.member?.phone) ||
      normalizeText(order.member?.avatarUrl),
  )

const getStatusConfig = (order: ApiOrder) => {
  const status = normalizeStatus(order.status)

  return (
    orderStatusMap[status] ?? {
      label: status || '处理中',
      tone: 'live' as const,
    }
  )
}

const toggleOrderExpanded = (key: string) => {
  const nextKeys = new Set(expandedOrderKeys.value)

  if (nextKeys.has(key)) {
    nextKeys.delete(key)
  } else {
    nextKeys.add(key)
  }

  expandedOrderKeys.value = nextKeys
}

const createTimelineOrder = (order: ApiOrder, index: number): TimelineOrder => {
  const statusConfig = getStatusConfig(order)
  const key =
    normalizeText(order.id) ||
    normalizeText(order.dailySeq) ||
    normalizeText(order.orderNo) ||
    `${currentPage.value}-${index}`

  return {
    amount: formatMoney(order.payableAmount || order.totalAmount || order.originalAmount),
    dailySeqLabel: normalizeText(order.dailySeq) || '--',
    details: getOrderDetails(order),
    icon: CreditCardOutlined,
    isExpanded: expandedOrderKeys.value.has(key),
    items: getOrderItems(order),
    key,
    meta: getOrderMeta(order),
    promotions: getOrderPromotions(order),
    status: statusConfig.label,
    statusTone: statusConfig.tone,
    tag: hasOrderMember(order) ? '小程序' : '后台开单',
    time: formatOrderTime(order),
    title: getOrderTitle(order),
  }
}

const timelineOrders = computed(() => orders.value.map(createTimelineOrder))

const queueLoadMoreCheck = () => {
  void nextTick(() => {
    window.requestAnimationFrame(() => {
      const listElement = orderListRef.value
      if (!listElement) return

      const distanceToBottom =
        listElement.scrollHeight - listElement.scrollTop - listElement.clientHeight

      if (distanceToBottom <= LOAD_MORE_DISTANCE) {
        loadNextOrders()
      }
    })
  })
}

const loadOrdersPage = async (page: number, replace = false) => {
  if (!replace && (isInitialLoading.value || isLoadingMore.value)) return
  if (!replace && !hasMoreOrders.value) return

  const requestId = replace ? ++ordersRequestId : ordersRequestId

  if (replace) {
    isInitialLoading.value = true
    isLoadingMore.value = false
    ordersError.value = ''
    loadMoreError.value = ''
    orders.value = []
    currentPage.value = 0
    totalOrders.value = 0
    hasMoreOrders.value = true
    expandedOrderKeys.value = new Set()
    orderListRef.value?.scrollTo({ top: 0 })
  } else {
    isLoadingMore.value = true
    loadMoreError.value = ''
  }

  try {
    const scope = await ensureActiveScope()

    if (requestId !== ordersRequestId) return

    if (!scope) {
      hasMoreOrders.value = false
      ordersError.value = '暂无可用组织'
      return
    }

    const result = await getApiOrderV1Orders({
      'pageRequest.page': page,
      'pageRequest.pageSize': ORDER_PAGE_SIZE,
      merchantId: scope.merchantId,
      orderType: 'consume',
      storeId: scope.storeId,
    })

    if (requestId !== ordersRequestId) return

    const nextOrders = (result.orders ?? []).filter((order) => {
      const orderType = normalizeStatus(order.orderType)

      return !orderType || orderType === 'consume'
    })
    const total = Number(result.pageReply?.total)
    const nextPage = Number(result.pageReply?.page ?? page)

    orders.value = replace ? nextOrders : [...orders.value, ...nextOrders]
    currentPage.value = Number.isFinite(nextPage) ? nextPage : page
    totalOrders.value = Number.isFinite(total) ? total : orders.value.length
    hasMoreOrders.value = Number.isFinite(total)
      ? orders.value.length < total
      : nextOrders.length >= ORDER_PAGE_SIZE
  } catch {
    if (requestId !== ordersRequestId) return

    if (replace) {
      ordersError.value = '订单数据加载失败，请稍后重试'
      hasMoreOrders.value = false
    } else {
      loadMoreError.value = '加载失败，点此重试'
      message.warning('下一页订单加载失败')
    }
  } finally {
    if (requestId === ordersRequestId) {
      isInitialLoading.value = false
      isLoadingMore.value = false
      queueLoadMoreCheck()
    }
  }
}

const reloadOrders = () => {
  void loadOrdersPage(1, true)
}

const loadNextOrders = (force = false) => {
  if (isInitialLoading.value || isLoadingMore.value || !hasMoreOrders.value) return
  if (loadMoreError.value && !force) return

  void loadOrdersPage(currentPage.value + 1)
}

const handleOrderListScroll = () => {
  const listElement = orderListRef.value
  if (!listElement) return

  const distanceToBottom =
    listElement.scrollHeight - listElement.scrollTop - listElement.clientHeight

  if (distanceToBottom <= LOAD_MORE_DISTANCE) {
    loadNextOrders()
  }
}

const handleBack = async () => {
  if (window.history.length > 1) {
    router.back()
    return
  }

  await router.push({ name: 'home' })
}

onMounted(() => {
  reloadOrders()
})

watch(selectedScopeKey, (nextScopeKey, previousScopeKey) => {
  if (!previousScopeKey || nextScopeKey === previousScopeKey) return

  reloadOrders()
})
</script>

<template>
  <main class="tab-page orders-page" aria-label="订单">
    <section class="orders-topbar" aria-label="订单导航">
      <button class="orders-icon-button" type="button" aria-label="返回" @click="handleBack">
        <ArrowLeftOutlined />
      </button>

      <strong>無鳞订单</strong>

      <button class="orders-text-button" type="button">消费</button>
    </section>

    <section class="orders-hero" aria-label="今日订单概览">
      <div>
        <p>CONSUME {{ heroDateLabel }}</p>
        <h1>消费订单</h1>
      </div>

      <div class="orders-shift-pill">
        <CalendarOutlined />
        <span>{{ selectedScope?.storeName || '当前门店' }}</span>
      </div>
    </section>

    <section class="orders-day-strip" aria-label="订单日期">
      <button
        v-for="day in orderDays"
        :key="day.date"
        class="orders-day"
        :class="{ 'is-active': day.active }"
        type="button"
      >
        <small>{{ day.label }}</small>
        <span>{{ day.date }}</span>
      </button>
    </section>

    <section class="orders-stat-strip" aria-label="订单状态">
      <div v-for="stat in orderStats" :key="stat.label" class="orders-stat">
        <strong>{{ stat.value }}</strong>
        <span>{{ stat.label }}</span>
      </div>
    </section>

    <section class="orders-timeline" aria-label="今日订单">
      <div class="orders-section-heading">
        <h2>今日订单</h2>
        <span>按下单时间排列</span>
      </div>

      <ol
        ref="orderListRef"
        class="orders-timeline-list"
        :class="{ 'is-empty': !timelineOrders.length }"
        @scroll.passive="handleOrderListScroll"
      >
        <li
          v-if="isInitialLoading"
          class="orders-list-state"
        >
          正在加载订单
        </li>
        <li
          v-else-if="ordersError && !timelineOrders.length"
          class="orders-list-state is-error"
        >
          <span>{{ ordersError }}</span>
          <button class="orders-state-button" type="button" @click="reloadOrders">重新加载</button>
        </li>
        <li
          v-else-if="!timelineOrders.length"
          class="orders-list-state"
        >
          暂无消费订单
        </li>

        <li v-for="order in timelineOrders" :key="order.key" class="orders-row">
          <time>{{ order.time }}</time>

          <span class="orders-rail" :class="`is-${order.statusTone}`" aria-hidden="true">
            <CheckCircleFilled v-if="order.statusTone === 'done'" />
          </span>

          <article class="orders-card" :class="`is-${order.statusTone}`">
            <div class="orders-card-head">
              <div>
                <div class="orders-card-tags">
                  <strong class="orders-seq-text">#{{ order.dailySeqLabel }}</strong>
                  <span>{{ order.tag }}</span>
                </div>
                <h3>{{ order.title }}</h3>
              </div>

              <button
                class="orders-card-toggle"
                :class="{ 'is-expanded': order.isExpanded }"
                type="button"
                :aria-expanded="order.isExpanded"
                :aria-label="order.isExpanded ? '收起订单详情' : '展开订单详情'"
                @click="toggleOrderExpanded(order.key)"
              >
                <DownOutlined />
              </button>
            </div>

            <div class="orders-card-meta">
              <component :is="order.icon" />
              <span>{{ order.meta }}</span>
            </div>

            <div v-if="order.items.length" class="orders-card-items">
              <div v-for="item in order.items" :key="item.key" class="orders-card-item">
                <span class="orders-item-name">{{ item.name }}</span>
                <span class="orders-item-quantity">x{{ item.quantity }}</span>
                <span class="orders-item-unit">单价 {{ item.unitPrice }}</span>
                <strong class="orders-item-total">总价 {{ item.totalPrice }}</strong>
              </div>
            </div>

            <div v-else class="orders-card-items is-empty">
              暂无菜品明细
            </div>

            <div v-if="order.isExpanded" class="orders-card-extra">
              <dl class="orders-extra-list">
                <div v-for="detail in order.details" :key="detail.label" class="orders-extra-row">
                  <dt>{{ detail.label }}</dt>
                  <dd>{{ detail.value }}</dd>
                </div>
              </dl>

              <div v-if="order.promotions.length" class="orders-promotions">
                <span class="orders-extra-title">营销规则</span>
                <div class="orders-promotion-list">
                  <div
                    v-for="promotion in order.promotions"
                    :key="promotion.key"
                    class="orders-promotion-item"
                  >
                    <strong>{{ promotion.name }}</strong>
                    <span>{{ promotion.meta }}</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="orders-card-foot">
              <span class="orders-status" :class="`is-${order.statusTone}`">{{ order.status }}</span>
              <strong>{{ order.amount }}</strong>
            </div>
          </article>
        </li>

        <li
          v-if="timelineOrders.length && isLoadingMore"
          class="orders-list-state is-tail"
        >
          正在加载更多
        </li>
        <li
          v-else-if="timelineOrders.length && loadMoreError"
          class="orders-list-state is-tail is-error"
        >
          <button class="orders-state-button" type="button" @click="loadNextOrders(true)">
            {{ loadMoreError }}
          </button>
        </li>
        <li
          v-else-if="timelineOrders.length && !hasMoreOrders"
          class="orders-list-state is-tail"
        >
          已加载全部订单
        </li>
      </ol>
    </section>

    <button class="orders-add-button" type="button" aria-label="新增订单">
      <PlusOutlined />
    </button>
  </main>
</template>
