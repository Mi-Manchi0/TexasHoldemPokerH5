<script setup lang="ts">
import {
  ArrowLeftOutlined,
  CheckCircleFilled,
  CheckOutlined,
  CloseOutlined,
  CreditCardOutlined,
  DownOutlined,
  VerticalAlignTopOutlined,
  FileTextOutlined,
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { computed, nextTick, onMounted, ref, watch, type Component } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import {
  getApiOrderV1Orders,
  getApiTicketV1Tickets,
  putApiTicketV1TicketsApprove,
  putApiTicketV1TicketsReject,
  type GetApiOrderV1OrdersResponse,
  type GetApiTicketV1TicketsResponse,
} from '@/services/basis/basis'
import { useOrgScopeStore } from '@/stores/orgScope'
import {
  parsePointsTicketEntity,
  parseWineStorageTicketEntity,
  type PointsTicketEntity,
  type WineStorageTicketEntity,
} from '@/utils/ticketEntity'

const router = useRouter()
const route = useRoute()
const orgScopeStore = useOrgScopeStore()

type ApiOrder = NonNullable<GetApiOrderV1OrdersResponse['orders']>[number]
type ApiOrderPromotion = NonNullable<ApiOrder['promotions']>[number]
type ApiTicket = NonNullable<GetApiTicketV1TicketsResponse['tickets']>[number]
type ApiOrderWithCreatedAt = ApiOrder & { createdAt?: string }
type ApiTicketWithReview = ApiTicket & {
  reviewedAt?: string
  reviewer?: {
    id?: string
    name?: string
    phone?: string
  }
  reviewerId?: string
}
type OrderStatusTone = 'live' | 'making' | 'pending' | 'done'
type OrderDisplayMode = 'orders' | 'tickets'
type TicketTypeFilter = 'points_deposit' | 'points_withdraw' | 'member_wine_deposit' | 'member_wine_withdraw'
type JsonRecord = Record<string, unknown>

interface TimelineOrderDetail {
  label: string
  value: string
}

interface TimelineOrderItem {
  key: string
  name: string
  quantityLabel: string
  totalPriceLabel: string
  unitPriceLabel: string
}

interface TimelinePromotion {
  key: string
  meta: string
  name: string
}

interface TimelineOrder {
  amount: string
  canAudit: boolean
  dailySeqLabel: string
  details: TimelineOrderDetail[]
  emptyItemsText: string
  icon: Component
  isExpanded: boolean
  items: TimelineOrderItem[]
  key: string
  meta: string
  promotions: TimelinePromotion[]
  status: string
  statusTone: OrderStatusTone
  summary: TimelineOrderDetail[]
  tag: string
  ticketId: string
  time: string
  title: string
  variant: OrderDisplayMode
}

const ORDER_PAGE_SIZE = 10
const LOAD_MORE_DISTANCE = 72
const TICKET_AUDIT_ACTION_WIDTH = 132
const TICKET_AUDIT_SWIPE_THRESHOLD = 58
const TICKET_TYPE_FILTERS: readonly TicketTypeFilter[] = [
  'points_deposit',
  'points_withdraw',
  'member_wine_deposit',
  'member_wine_withdraw',
]

function getRouteQueryText(value: unknown) {
  const rawValue = Array.isArray(value) ? value[0] : value

  return rawValue === undefined || rawValue === null ? '' : String(rawValue).trim()
}

function getRouteDisplayMode() {
  const mode = getRouteQueryText(route.query.mode || route.query.view)
  const ticketType = getRouteQueryText(route.query.type || route.query.ticketType)

  return mode === 'tickets' || mode === 'ticket' || TICKET_TYPE_FILTERS.includes(ticketType as TicketTypeFilter)
    ? 'tickets'
    : 'orders'
}

function getRouteTicketType() {
  const type = getRouteQueryText(route.query.type || route.query.ticketType)

  return TICKET_TYPE_FILTERS.includes(type as TicketTypeFilter) ? type : ''
}

const orders = ref<ApiOrder[]>([])
const tickets = ref<ApiTicket[]>([])
const currentPage = ref(0)
const ticketCurrentPage = ref(0)
const totalOrders = ref(0)
const totalTickets = ref(0)
const hasMoreOrders = ref(true)
const hasMoreTickets = ref(true)
const isInitialLoading = ref(false)
const isTicketInitialLoading = ref(false)
const isLoadingMore = ref(false)
const isTicketLoadingMore = ref(false)
const ordersError = ref('')
const ticketsError = ref('')
const loadMoreError = ref('')
const ticketLoadMoreError = ref('')
const orderListRef = ref<HTMLElement | null>(null)
const expandedOrderKeys = ref<Set<string>>(new Set())
const expandedTicketKeys = ref<Set<string>>(new Set())
const displayMode = ref<OrderDisplayMode>(getRouteDisplayMode())
const selectedTicketType = ref(getRouteTicketType())
const today = new Date()
const openAuditTicketKey = ref('')
const swipingTicketKey = ref('')
const ticketSwipeStartX = ref(0)
const ticketSwipeStartY = ref(0)
const ticketSwipeStartOffset = ref(0)
const ticketSwipeOffset = ref(0)
const isTicketSwipeLocked = ref(false)
const auditingTicketKey = ref('')
const auditingAction = ref<'' | 'approve' | 'reject'>('')

let ordersRequestId = 0
let ticketsRequestId = 0

const selectedScope = computed(() => orgScopeStore.selected)
const selectedScopeKey = computed(() => {
  const scope = selectedScope.value
  if (!scope) return ''

  return `${scope.merchantId}:${scope.storeId}`
})

const heroDateLabel = today
  .toLocaleDateString('zh-CN', {
    month: '2-digit',
    day: '2-digit',
  })
  .replace(/\//g, '.')

const orderStats = computed(() => {
  if (displayMode.value === 'tickets') {
    const loadedTickets = tickets.value
    const pendingCount = loadedTickets.filter((ticket) => normalizeStatus(ticket.status) === 'pending').length
    const handledCount = loadedTickets.filter((ticket) =>
      ['approved', 'rejected', 'cancelled'].includes(normalizeStatus(ticket.status)),
    ).length
    const total = totalTickets.value || loadedTickets.length

    return [
      { label: '工单', value: String(total) },
      { label: '待审核', value: String(pendingCount) },
      { label: '已处理', value: String(handledCount) },
    ]
  }

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

const isTicketMode = computed(() => displayMode.value === 'tickets')
const switchModeLabel = computed(() => (isTicketMode.value ? '订单' : '工单'))
const pageAriaLabel = computed(() => (isTicketMode.value ? '工单' : '订单'))
const topbarTitle = computed(() => (isTicketMode.value ? '無鳞工单' : '無鳞订单'))
const heroKindLabel = computed(() => (isTicketMode.value ? 'TICKET' : 'CONSUME'))
const heroTitle = computed(() => (isTicketMode.value ? '工单' : '消费订单'))
const overviewAriaLabel = computed(() => (isTicketMode.value ? '今日工单概览' : '今日订单概览'))
const statsAriaLabel = computed(() => (isTicketMode.value ? '工单状态' : '订单状态'))
const timelineAriaLabel = computed(() => (isTicketMode.value ? '今日工单' : '今日订单'))
const sectionTitle = computed(() => (isTicketMode.value ? '今日工单' : '今日订单'))
const sectionSubtitle = computed(() => (isTicketMode.value ? '按创建时间排列' : '按下单时间排列'))
const loadingText = computed(() => (isTicketMode.value ? '正在加载工单' : '正在加载订单'))
const emptyText = computed(() => (isTicketMode.value ? '暂无工单' : '暂无消费订单'))
const allLoadedText = computed(() => (isTicketMode.value ? '已加载全部工单' : '已加载全部订单'))
const currentError = computed(() => (isTicketMode.value ? ticketsError.value : ordersError.value))
const currentLoadMoreError = computed(() =>
  isTicketMode.value ? ticketLoadMoreError.value : loadMoreError.value,
)
const currentHasMore = computed(() => (isTicketMode.value ? hasMoreTickets.value : hasMoreOrders.value))
const currentInitialLoading = computed(() =>
  isTicketMode.value ? isTicketInitialLoading.value : isInitialLoading.value,
)
const currentLoadingMore = computed(() =>
  isTicketMode.value ? isTicketLoadingMore.value : isLoadingMore.value,
)

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

const ticketStatusMap: Record<
  string,
  {
    label: string
    tone: OrderStatusTone
  }
> = {
  approved: {
    label: '已通过',
    tone: 'done',
  },
  cancelled: {
    label: '已取消',
    tone: 'done',
  },
  pending: {
    label: '待审核',
    tone: 'pending',
  },
  rejected: {
    label: '已驳回',
    tone: 'done',
  },
}

const ticketTypeMap: Record<string, string> = {
  member_wine_deposit: '会员存酒申请',
  member_wine_withdraw: '会员取酒申请',
  points_deposit: '积分存入申请',
  points_withdraw: '积分提取申请',
}

const ticketTypeOptions = computed(() => [
  { label: '全部', value: '' },
  ...Object.entries(ticketTypeMap).map(([value, label]) => ({
    label,
    value,
  })),
])

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

const isRecord = (value: unknown): value is JsonRecord =>
  Boolean(value) && typeof value === 'object' && !Array.isArray(value)

const parseJsonRecord = (value?: string) => {
  const text = normalizeText(value)
  if (!text) return null

  try {
    const parsed = JSON.parse(text) as unknown

    return isRecord(parsed) ? parsed : null
  } catch {
    return null
  }
}

const pickRecordValue = (record: JsonRecord | null, keys: string[]) => {
  if (!record) return ''

  for (const key of keys) {
    const value = record[key]
    const text = normalizeText(value)

    if (text) return text
  }

  return ''
}

const pickNestedRecordValue = (record: JsonRecord | null, paths: string[][]) => {
  if (!record) return ''

  for (const path of paths) {
    let value: unknown = record

    for (const key of path) {
      if (!isRecord(value)) {
        value = undefined
        break
      }

      value = value[key]
    }

    const text = normalizeText(value)
    if (text) return text
  }

  return ''
}

const pickFirstRecordFromArray = (record: JsonRecord | null, keys: string[]) => {
  if (!record) return null

  for (const key of keys) {
    const value = record[key]
    if (!Array.isArray(value)) continue

    const firstRecord = value.find(isRecord)
    if (firstRecord) return firstRecord
  }

  return null
}

const parseRecordNumber = (record: JsonRecord | null, keys: string[]) => {
  const value = pickRecordValue(record, keys)
  if (!value) return null

  const numberValue = Number(value)

  return Number.isFinite(numberValue) ? numberValue : null
}

const parseNestedRecordNumber = (record: JsonRecord | null, paths: string[][]) => {
  const value = pickNestedRecordValue(record, paths)
  if (!value) return null

  const numberValue = Number(value)

  return Number.isFinite(numberValue) ? numberValue : null
}

const filterTicketDetails = (details: TimelineOrderDetail[]) =>
  details.filter((detail) => normalizeText(detail.value) && detail.value !== '--')

const formatQuantity = (value?: number) => {
  const quantity = Number(value)
  if (!Number.isFinite(quantity)) return '0'

  return new Intl.NumberFormat('zh-CN', {
    maximumFractionDigits: 2,
  }).format(quantity)
}

const formatPoints = (value: number | null | undefined) =>
  value === null || value === undefined
    ? '--'
    : new Intl.NumberFormat('zh-CN', {
        maximumFractionDigits: 2,
      }).format(value)

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

const formatTicketTime = (ticket: ApiTicket) => {
  const parsedDate = parseDateText(ticket.createdAt) ?? parseDateText(ticket.updatedAt)

  if (!parsedDate) return '--:--'

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
      quantityLabel: `x${formatQuantity(quantity)}`,
      totalPriceLabel: `总价 ${totalPriceCents === null ? '¥0' : formatMoney(String(totalPriceCents))}`,
      unitPriceLabel: `单价 ${unitPriceCents === null ? '¥0' : formatMoney(String(unitPriceCents))}`,
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

const getTicketTypeLabel = (ticket: ApiTicket) => {
  const type = normalizeStatus(ticket.type || ticket.targetType)

  return ticketTypeMap[type] || type || '工单'
}

const getTicketStatusConfig = (ticket: ApiTicket) => {
  const status = normalizeStatus(ticket.status)

  return (
    ticketStatusMap[status] ?? {
      label: status || '处理中',
      tone: 'live' as const,
    }
  )
}

const isPointsTicketType = (type: string) => type === 'points_deposit' || type === 'points_withdraw'
const isWineTicketType = (type: string) => type === 'member_wine_deposit' || type === 'member_wine_withdraw'

const getTicketAmount = (ticket: ApiTicket, payload: JsonRecord | null, entity: JsonRecord | null) => {
  const type = normalizeStatus(ticket.type || ticket.targetType)

  if (isPointsTicketType(type)) {
    const pointsEntity = parsePointsTicketEntity(entity)
    const points =
      pointsEntity?.points ??
      pointsEntity?.depositPoints ??
      pointsEntity?.originalPoints

    return formatPoints(points)
  }

  if (isWineTicketType(type)) {
    const payloadQuantity = getTicketPayloadQuantity(payload)
    if (payloadQuantity !== null) return formatQuantity(payloadQuantity)

    const wineEntity = parseWineStorageTicketEntity(entity)

    return wineEntity?.quantity === null || wineEntity?.quantity === undefined
      ? '--'
      : formatQuantity(wineEntity.quantity)
  }

  const amount =
    parseRecordNumber(payload, ['amount', 'points', 'pointAmount', 'quantity', 'count']) ??
    parseRecordNumber(entity, ['amount', 'points', 'pointAmount', 'quantity', 'count'])

  if (amount === null) return '--'

  if (normalizeStatus(ticket.type).includes('points')) {
    return formatPoints(amount)
  }

  return formatQuantity(amount)
}

const getTicketUnitLabel = (ticket: ApiTicket) => {
  const type = normalizeStatus(ticket.type)

  if (type.includes('points')) return '积分'
  if (type.includes('wine')) return '份'

  return '数量'
}

const getPointsFinalValue = (pointsEntity: PointsTicketEntity | null) =>
  pointsEntity?.points ?? pointsEntity?.depositPoints ?? null

const getTicketOperationTime = (ticket: ApiTicket, entity: JsonRecord | null) => {
  const ticketWithReview = ticket as ApiTicketWithReview

  return (
    pickRecordValue(entity, ['reviewedAt', 'reviewed_at', 'updatedAt', 'updated_at', 'createdAt', 'created_at']) ||
    normalizeText(ticketWithReview.reviewedAt) ||
    normalizeText(ticket.updatedAt) ||
    normalizeText(ticket.createdAt)
  )
}

const getTicketReviewerText = (ticket: ApiTicket, entity: JsonRecord | null) => {
  const ticketWithReview = ticket as ApiTicketWithReview
  const reviewerName =
    normalizeText(ticketWithReview.reviewer?.name) ||
    pickRecordValue(entity, ['reviewerName', 'reviewer_name'])
  const reviewerPhone =
    normalizeText(ticketWithReview.reviewer?.phone) ||
    pickRecordValue(entity, ['reviewerPhone', 'reviewer_phone'])
  const reviewerId =
    normalizeText(ticketWithReview.reviewer?.id) ||
    normalizeText(ticketWithReview.reviewerId) ||
    pickRecordValue(entity, ['reviewerId', 'reviewer_id'])
  const reviewerText = [reviewerName, reviewerPhone].filter(Boolean).join(' ')

  if (reviewerText) return reviewerText
  if (reviewerId && reviewerId !== '0') return `ID ${reviewerId}`

  return '--'
}

const getTicketReviewMetaParts = (ticket: ApiTicket, entity: JsonRecord | null) => {
  const operationTime = formatDateTime(getTicketOperationTime(ticket, entity))
  const reviewer = getTicketReviewerText(ticket, entity)

  return [
    operationTime !== '--' ? `操作 ${operationTime}` : '',
    reviewer !== '--' ? `审批 ${reviewer}` : '审批 --',
  ].filter(Boolean)
}

const getTicketTargetName = (ticket: ApiTicket, payload: JsonRecord | null, entity: JsonRecord | null) => {
  const type = normalizeStatus(ticket.type || ticket.targetType)

  if (isWineTicketType(type)) {
    const wineEntity = parseWineStorageTicketEntity(entity)
    const payloadItem = pickFirstRecordFromArray(payload, ['items', 'wines', 'dishes', 'details'])
    const wineName =
      pickRecordValue(payload, ['dishName', 'dish_name', 'wineName', 'wine_name', 'targetName', 'target_name', 'name']) ||
      pickRecordValue(payloadItem, ['dishName', 'dish_name', 'wineName', 'wine_name', 'name']) ||
      wineEntity?.dishName ||
      pickRecordValue(entity, ['targetName', 'dishName', 'wineName', 'name']) ||
      normalizeText(ticket.target?.name)

    return (
      wineName ||
      pickRecordValue(payload, ['dishId', 'dish_id', 'wineId', 'wine_id']) ||
      pickRecordValue(payloadItem, ['dishId', 'dish_id', 'wineId', 'wine_id']) ||
      (wineEntity?.dishId ? `酒水ID ${wineEntity.dishId}` : '') ||
      normalizeText(ticket.targetId) ||
      '--'
    )
  }

  return (
    normalizeText(ticket.target?.name) ||
    pickRecordValue(payload, ['targetName', 'dishName', 'wineName', 'name']) ||
    pickRecordValue(entity, ['targetName', 'dishName', 'wineName', 'name', 'dishId']) ||
    normalizeText(ticket.targetId) ||
    '--'
  )
}

const getTicketPayloadQuantity = (payload: JsonRecord | null) =>
  parseRecordNumber(payload, ['quantity', 'totalQuantity', 'total_quantity', 'count', 'amount']) ??
  parseRecordNumber(pickFirstRecordFromArray(payload, ['items', 'wines', 'dishes', 'details']), [
    'quantity',
    'totalQuantity',
    'total_quantity',
    'count',
    'amount',
  ])

const getTicketPayloadDishText = (payload: JsonRecord | null) => {
  const payloadItem = pickFirstRecordFromArray(payload, ['items', 'wines', 'dishes', 'details'])

  return (
    pickRecordValue(payload, ['dishName', 'dish_name', 'wineName', 'wine_name', 'targetName', 'target_name', 'name']) ||
    pickRecordValue(payloadItem, ['dishName', 'dish_name', 'wineName', 'wine_name', 'targetName', 'target_name', 'name'])
  )
}

const getTicketSummaryItem = (ticket: ApiTicket, payload: JsonRecord | null, entity: JsonRecord | null) => {
  const type = normalizeStatus(ticket.type || ticket.targetType)
  const typeLabel = getTicketTypeLabel(ticket)

  if (isPointsTicketType(type)) {
    const pointsEntity = parsePointsTicketEntity(entity)
    const finalPoints = formatPoints(getPointsFinalValue(pointsEntity))

    if (type === 'points_deposit') {
      const originalPoints = formatPoints(pointsEntity?.originalPoints)
      const drawChanceCount = formatPoints(pointsEntity?.drawChanceCount)

      return {
        name: typeLabel,
        quantityLabel: finalPoints === '--' ? '积分' : `${finalPoints}积分`,
        totalPriceLabel:
          originalPoints === '--'
            ? '原始 --'
            : `原始 ${originalPoints}${finalPoints === '--' ? '' : ` · 实存 ${finalPoints}`}`,
        unitPriceLabel: drawChanceCount === '--' ? '抽奖 --' : `抽奖 ${drawChanceCount}次`,
      }
    }

    return {
      name: typeLabel,
      quantityLabel: finalPoints === '--' ? '积分' : `${finalPoints}积分`,
      totalPriceLabel: finalPoints === '--' ? '积分 --' : `积分 ${finalPoints}`,
      unitPriceLabel: '积分提取',
    }
  }

  if (isWineTicketType(type)) {
    const wineEntity = parseWineStorageTicketEntity(entity)
    const dishName = getTicketPayloadDishText(payload) || getWineEntityDishText(ticket, entity, wineEntity)
    const payloadQuantity = getTicketPayloadQuantity(payload)
    const quantity = payloadQuantity ?? wineEntity?.quantity ?? null
    const quantityText = quantity === null ? '--' : formatQuantity(quantity)
    const actionText = getWineActionText(type, wineEntity)

    return {
      name: dishName === '--' ? typeLabel : dishName,
      quantityLabel: quantityText === '--' ? '份' : `x${quantityText}`,
      totalPriceLabel: `${actionText}数量 ${quantityText}`,
      unitPriceLabel: typeLabel,
    }
  }

  const targetName = getTicketTargetName(ticket, payload, entity)
  const amount = getTicketAmount(ticket, payload, entity)
  const unitLabel = getTicketUnitLabel(ticket)

  return {
    name: typeLabel,
    quantityLabel: amount === '--' ? unitLabel : `${amount}${unitLabel}`,
    totalPriceLabel: `目标 ${targetName}`,
    unitPriceLabel: normalizeText(ticket.target?.status) || normalizeText(ticket.targetType) || '待处理',
  }
}

const getTicketItems = (ticket: ApiTicket): TimelineOrderItem[] => {
  const payload = parseJsonRecord(ticket.payload)
  const entity = parseJsonRecord(ticket.entityJson)
  const item = getTicketSummaryItem(ticket, payload, entity)

  return [
    {
      key: normalizeText(ticket.targetId) || normalizeText(ticket.id) || item.name,
      ...item,
    },
  ]
}

const getTicketTitle = (ticket: ApiTicket) => {
  const memberName = normalizeText(ticket.member?.name)
  const targetName = normalizeText(ticket.target?.name)
  const typeLabel = getTicketTypeLabel(ticket)

  if (memberName) return `${memberName} ${typeLabel}`
  if (targetName) return `${targetName} ${typeLabel}`

  return typeLabel
}

const getTicketMeta = (ticket: ApiTicket) => {
  const entity = parseJsonRecord(ticket.entityJson)
  const applicantName = normalizeText(ticket.applicant?.name)
  const applicantPhone = normalizeText(ticket.applicant?.phone)
  const memberName = normalizeText(ticket.member?.name)
  const memberPhone = normalizeText(ticket.member?.phone)
  const applicantInfo = [applicantName, applicantPhone].filter(Boolean).join(' ')
  const memberInfo = [memberName, memberPhone].filter(Boolean).join(' ')
  const metaParts = [
    applicantInfo ? `申请人 ${applicantInfo}` : '申请人 --',
    memberInfo ? `会员 ${memberInfo}` : '',
    ...getTicketReviewMetaParts(ticket, entity),
  ].filter(Boolean)

  return metaParts.join(' · ') || '工单申请'
}

const getTicketApplicantText = (ticket: ApiTicket) => {
  const applicantName = normalizeText(ticket.applicant?.name)
  const applicantPhone = normalizeText(ticket.applicant?.phone)

  return [applicantName, applicantPhone].filter(Boolean).join(' ') || '--'
}

const getTicketEntityMemberText = (ticket: ApiTicket, entity: JsonRecord | null) => {
  const memberName =
    pickRecordValue(entity, ['memberName', 'member_name']) ||
    pickNestedRecordValue(entity, [
      ['member', 'name'],
      ['member', 'nickname'],
    ]) ||
    normalizeText(ticket.member?.name)
  const memberPhone =
    pickRecordValue(entity, ['memberPhone', 'member_phone', 'phone']) ||
    pickNestedRecordValue(entity, [['member', 'phone']]) ||
    normalizeText(ticket.member?.phone)

  return [memberName, memberPhone].filter(Boolean).join(' ') || '--'
}

const getTicketEntityStoreText = (ticket: ApiTicket, entity: JsonRecord | null) =>
  pickRecordValue(entity, ['storeName', 'store_name']) ||
  pickNestedRecordValue(entity, [['store', 'name']]) ||
  normalizeText(ticket.store?.name) ||
  '--'

const getTicketEntityStorageStoreText = (ticket: ApiTicket, entity: JsonRecord | null) =>
  pickRecordValue(entity, ['storageStoreName', 'storage_store_name']) ||
  pickNestedRecordValue(entity, [['storageStore', 'name']]) ||
  getTicketEntityStoreText(ticket, entity)

const getTicketEntityDishText = (ticket: ApiTicket, entity: JsonRecord | null) =>
  pickRecordValue(entity, ['dishName', 'dish_name', 'wineName', 'wine_name', 'targetName', 'target_name', 'name']) ||
  pickNestedRecordValue(entity, [
    ['dish', 'name'],
    ['target', 'name'],
  ]) ||
  normalizeText(ticket.target?.name) ||
  '--'

const getTicketEntityQuantityText = (entity: JsonRecord | null) => {
  const quantity =
    parseRecordNumber(entity, ['quantity', 'totalQuantity', 'total_quantity', 'count', 'amount']) ??
    parseNestedRecordNumber(entity, [['storageRecord', 'remainingQuantity']])

  return quantity === null ? '--' : formatQuantity(quantity)
}

const getTicketEntityPointsText = (
  entity: JsonRecord | null,
  pointsEntity?: PointsTicketEntity | null,
) => {
  if (pointsEntity) {
    return formatPoints(pointsEntity.points ?? pointsEntity.depositPoints)
  }

  const points = parseRecordNumber(entity, [
    'points',
    'pointAmount',
    'amount',
    'rawPoints',
    'raw_points',
    'depositPoints',
    'deposit_points',
    'withdrawPoints',
    'withdraw_points',
    'changePoints',
    'change_points',
  ])

  return formatPoints(points)
}

const getTicketEntityBalanceText = (entity: JsonRecord | null) => {
  const balance =
    parseRecordNumber(entity, [
      'balanceAfter',
      'balance_after',
      'remainingQuantity',
      'remaining_quantity',
      'currentPoints',
      'current_points',
      'balance',
      'remainingPoints',
      'remaining_points',
    ]) ?? parseNestedRecordNumber(entity, [['storageRecord', 'remainingQuantity']])

  if (balance === null) return '--'

  return formatQuantity(balance)
}

const getTicketEntityRemark = (entity: JsonRecord | null) =>
  pickRecordValue(entity, ['remark', 'reviewRemark', 'review_remark', 'reason', 'description', 'note']) || '--'

const getPointsResultLabel = (type: string) => (type === 'points_withdraw' ? '折算积分' : '最终存入积分')
const getWineActionText = (type: string, wineEntity?: WineStorageTicketEntity | null) => {
  const entityType = normalizeStatus(wineEntity?.type)

  if (entityType === 'withdraw' || type === 'member_wine_withdraw') return '取酒'
  if (entityType === 'deposit' || type === 'member_wine_deposit') return '存酒'

  return type.includes('withdraw') ? '取酒' : '存酒'
}

const getWineEntityDishText = (
  ticket: ApiTicket,
  entity: JsonRecord | null,
  wineEntity?: WineStorageTicketEntity | null,
) =>
  wineEntity?.dishName ||
  pickRecordValue(entity, ['dishName', 'dish_name', 'wineName', 'wine_name', 'targetName', 'target_name', 'name']) ||
  normalizeText(ticket.target?.name) ||
  (wineEntity?.dishId ? `酒水ID ${wineEntity.dishId}` : '') ||
  '--'

const getWineEntityQuantityText = (wineEntity: WineStorageTicketEntity | null) =>
  wineEntity?.quantity === null || wineEntity?.quantity === undefined ? '--' : formatQuantity(wineEntity.quantity)

const getWineEntityBalanceText = (wineEntity: WineStorageTicketEntity | null) =>
  wineEntity?.balanceAfter === null || wineEntity?.balanceAfter === undefined
    ? '--'
    : formatQuantity(wineEntity.balanceAfter)

const getWineEntityStoreText = (
  ticket: ApiTicket,
  entity: JsonRecord | null,
  wineEntity?: WineStorageTicketEntity | null,
) =>
  wineEntity?.storeName ||
  pickRecordValue(entity, ['storeName', 'store_name']) ||
  normalizeText(ticket.store?.name) ||
  (wineEntity?.storeId ? `门店ID ${wineEntity.storeId}` : '') ||
  '--'

const getWineEntityStorageStoreText = (
  ticket: ApiTicket,
  entity: JsonRecord | null,
  wineEntity?: WineStorageTicketEntity | null,
) =>
  wineEntity?.storageStoreName ||
  pickRecordValue(entity, ['storageStoreName', 'storage_store_name']) ||
  (wineEntity?.storageStoreId ? `门店ID ${wineEntity.storageStoreId}` : '') ||
  getWineEntityStoreText(ticket, entity, wineEntity)

const getTicketBusinessDescription = (ticket: ApiTicket, entity: JsonRecord | null) => {
  const type = normalizeStatus(ticket.type || ticket.targetType)
  const member = getTicketEntityMemberText(ticket, entity)
  const memberLabel = member === '--' ? '会员' : member
  const payload = parseJsonRecord(ticket.payload)

  if (type === 'points_deposit') {
    const pointsEntity = parsePointsTicketEntity(entity)
    const points = getTicketEntityPointsText(entity, pointsEntity)
    const originalPoints = formatPoints(pointsEntity?.originalPoints)

    if (points !== '--' && originalPoints !== '--' && originalPoints !== points) {
      return `${memberLabel} 申请存入 ${originalPoints} 原始积分，最终存入 ${points} 积分`
    }
    return points === '--' ? `${memberLabel} 申请存入积分` : `${memberLabel} 申请存入 ${points} 积分`
  }

  if (type === 'points_withdraw') {
    const pointsEntity = parsePointsTicketEntity(entity)
    const points = getTicketEntityPointsText(entity, pointsEntity)
    const originalPoints = formatPoints(pointsEntity?.originalPoints)
    const drawChanceCount = formatPoints(pointsEntity?.drawChanceCount)

    if (points === '--') return `${memberLabel} 申请提取积分`
    if (originalPoints !== '--' && drawChanceCount !== '--') {
      return `${memberLabel} 申请提取 ${originalPoints} 原始积分，折算 ${points} 积分，获得 ${drawChanceCount} 次抽奖`
    }

    return `${memberLabel} 申请提取 ${points} 积分`
  }

  if (type === 'member_wine_deposit') {
    const wineEntity = parseWineStorageTicketEntity(entity)
    const dish = getTicketPayloadDishText(payload) || getWineEntityDishText(ticket, entity, wineEntity)
    const payloadQuantity = getTicketPayloadQuantity(payload)
    const quantity = payloadQuantity === null ? getWineEntityQuantityText(wineEntity) : formatQuantity(payloadQuantity)

    return quantity === '--' ? `${memberLabel} 申请存酒 ${dish}` : `${memberLabel} 申请存酒 ${dish} x${quantity}`
  }

  if (type === 'member_wine_withdraw') {
    const wineEntity = parseWineStorageTicketEntity(entity)
    const dish = getTicketPayloadDishText(payload) || getWineEntityDishText(ticket, entity, wineEntity)
    const payloadQuantity = getTicketPayloadQuantity(payload)
    const quantity = payloadQuantity === null ? getWineEntityQuantityText(wineEntity) : formatQuantity(payloadQuantity)

    return quantity === '--' ? `${memberLabel} 申请取酒 ${dish}` : `${memberLabel} 申请取酒 ${dish} x${quantity}`
  }

  return `${memberLabel} 提交${getTicketTypeLabel(ticket)}`
}

const createPointsExchangeText = (pointsEntity: PointsTicketEntity) =>
  pointsEntity.exchangeSegments
    .map((segment, index) => {
      const range =
        segment.maxPoints === 0
          ? `${formatPoints(segment.minPoints)}以上`
          : `${formatPoints(segment.minPoints)}-${formatPoints(segment.maxPoints)}`
      const sourcePoints = formatPoints(segment.sourcePoints)
      const depositPoints = formatPoints(segment.depositPoints)
      const drawChanceCount = formatPoints(segment.drawChanceCount)
      const exchangeParts = [
        depositPoints !== '--' ? `折算${depositPoints}积分` : '',
        drawChanceCount !== '--' && drawChanceCount !== '0' ? `${drawChanceCount}次抽奖` : '',
      ].filter(Boolean)

      return `第${index + 1}段 ${range}：${sourcePoints}原始积分${exchangeParts.length ? `，${exchangeParts.join('，')}` : ''}`
    })
    .join('；')

const getPointsEntityDetails = (
  ticket: ApiTicket,
  entity: JsonRecord | null,
): TimelineOrderDetail[] | null => {
  const type = normalizeStatus(ticket.type || ticket.targetType)
  const pointsEntity = parsePointsTicketEntity(entity)
  if (!pointsEntity) return null

  const exchangeText = createPointsExchangeText(pointsEntity)

  return filterTicketDetails([
    {
      label: '业务描述',
      value: getTicketBusinessDescription(ticket, entity),
    },
    {
      label: '会员',
      value: getTicketEntityMemberText(ticket, entity),
    },
    {
      label: '积分记录ID',
      value: pointsEntity.id || '--',
    },
    {
      label: '原始积分',
      value: formatPoints(pointsEntity.originalPoints),
    },
    {
      label: getPointsResultLabel(type),
      value: formatPoints(pointsEntity.points ?? pointsEntity.depositPoints),
    },
    {
      label: '未入账积分',
      value: formatPoints(pointsEntity.undepositedPoints),
    },
    {
      label: '未转换余数',
      value: formatPoints(pointsEntity.unconvertedPoints),
    },
    {
      label: '抽奖次数',
      value: formatPoints(pointsEntity.drawChanceCount),
    },
    {
      label: '抽奖积分',
      value: formatPoints(pointsEntity.drawSourcePoints),
    },
    {
      label: '分段换算',
      value: exchangeText,
    },
    {
      label: '业务日期',
      value: formatDateTime(pointsEntity.businessDate),
    },
    {
      label: '审核状态',
      value: ticketStatusMap[normalizeStatus(pointsEntity.status)]?.label || pointsEntity.status,
    },
    {
      label: '审核时间',
      value: formatDateTime(pointsEntity.reviewedAt),
    },
    {
      label: '审批人',
      value: getTicketReviewerText(ticket, entity),
    },
    {
      label: '备注',
      value: pointsEntity.reviewRemark || getTicketEntityRemark(entity),
    },
  ])
}

const getWineEntityDetails = (
  ticket: ApiTicket,
  entity: JsonRecord | null,
): TimelineOrderDetail[] | null => {
  const type = normalizeStatus(ticket.type || ticket.targetType)
  const payload = parseJsonRecord(ticket.payload)
  const wineEntity = parseWineStorageTicketEntity(entity)
  if (!wineEntity) return null

  const actionText = getWineActionText(type, wineEntity)
  const payloadQuantity = getTicketPayloadQuantity(payload)
  const quantityText = payloadQuantity === null ? getWineEntityQuantityText(wineEntity) : formatQuantity(payloadQuantity)

  return filterTicketDetails([
    {
      label: '业务描述',
      value: getTicketBusinessDescription(ticket, entity),
    },
    {
      label: '会员',
      value:
        [wineEntity.memberName, wineEntity.memberId ? `ID ${wineEntity.memberId}` : ''].filter(Boolean).join(' ') ||
        getTicketEntityMemberText(ticket, entity),
    },
    {
      label: '流水ID',
      value: wineEntity.id || '--',
    },
    {
      label: '业务类型',
      value: actionText,
    },
    {
      label: '酒水',
      value: getTicketPayloadDishText(payload) || getWineEntityDishText(ticket, entity, wineEntity),
    },
    {
      label: '酒水ID',
      value: wineEntity.dishId || '--',
    },
    {
      label: '数量',
      value: quantityText,
    },
    {
      label: '剩余数量',
      value: getWineEntityBalanceText(wineEntity),
    },
    {
      label: '业务门店',
      value: getWineEntityStoreText(ticket, entity, wineEntity),
    },
    {
      label: '存酒门店',
      value: getWineEntityStorageStoreText(ticket, entity, wineEntity),
    },
    {
      label: '存酒记录ID',
      value: wineEntity.storageRecordId || '--',
    },
    {
      label: '关联工单ID',
      value: wineEntity.ticketId || '--',
    },
    {
      label: '业务时间',
      value: formatDateTime(wineEntity.createdAt),
    },
    {
      label: '审核状态',
      value: ticketStatusMap[normalizeStatus(wineEntity.status)]?.label || wineEntity.status,
    },
    {
      label: '审核时间',
      value: formatDateTime(wineEntity.reviewedAt),
    },
    {
      label: '审批人',
      value: getTicketReviewerText(ticket, entity),
    },
    {
      label: '备注',
      value: wineEntity.reviewRemark || wineEntity.remark || getTicketEntityRemark(entity),
    },
  ])
}

const getTicketEntityDetails = (ticket: ApiTicket, entity: JsonRecord | null): TimelineOrderDetail[] => {
  const type = normalizeStatus(ticket.type || ticket.targetType)
  const baseDetails = [
    {
      label: '业务描述',
      value: getTicketBusinessDescription(ticket, entity),
    },
    {
      label: '会员',
      value: getTicketEntityMemberText(ticket, entity),
    },
  ]

  if (isPointsTicketType(type)) {
    const pointsDetails = getPointsEntityDetails(ticket, entity)
    if (pointsDetails) return pointsDetails
  }

  if (isPointsTicketType(type)) {
    return filterTicketDetails([
      ...baseDetails,
      {
        label: '积分数量',
        value: getTicketEntityPointsText(entity),
      },
      {
        label: '当前积分',
        value: getTicketEntityBalanceText(entity),
      },
      {
        label: '备注',
        value: getTicketEntityRemark(entity),
      },
    ])
  }

  if (isWineTicketType(type)) {
    const wineDetails = getWineEntityDetails(ticket, entity)
    if (wineDetails) return wineDetails

    return filterTicketDetails([
      ...baseDetails,
      {
        label: '酒水',
        value: getTicketEntityDishText(ticket, entity),
      },
      {
        label: '数量',
        value: getTicketEntityQuantityText(entity),
      },
      {
        label: '业务门店',
        value: getTicketEntityStoreText(ticket, entity),
      },
      {
        label: '存酒门店',
        value: getTicketEntityStorageStoreText(ticket, entity),
      },
      {
        label: '剩余数量',
        value: getTicketEntityBalanceText(entity),
      },
      {
        label: '备注',
        value: getTicketEntityRemark(entity),
      },
    ])
  }

  return filterTicketDetails([
    ...baseDetails,
    {
      label: '目标',
      value: getTicketTargetName(ticket, null, entity),
    },
    {
      label: '备注',
      value: getTicketEntityRemark(entity),
    },
  ])
}

const getTicketDetails = (ticket: ApiTicket): TimelineOrderDetail[] => {
  const entity = parseJsonRecord(ticket.entityJson)
  const entityDetails = getTicketEntityDetails(ticket, entity)

  return [
    ...entityDetails,
    {
      label: '工单ID',
      value: normalizeText(ticket.id) || '--',
    },
    {
      label: '创建时间',
      value: formatDateTime(ticket.createdAt),
    },
    {
      label: '更新时间',
      value: formatDateTime(ticket.updatedAt),
    },
    {
      label: '目标ID',
      value: normalizeText(ticket.targetId) || normalizeText(ticket.target?.id) || '--',
    },
  ]
}

const getTicketReviewSummaryText = (ticket: ApiTicket, entity: JsonRecord | null) => {
  const reviewer = getTicketReviewerText(ticket, entity)
  if (reviewer === '--') return '待审核'

  const operationTime = formatDateTime(getTicketOperationTime(ticket, entity))

  return [reviewer, operationTime === '--' ? '' : operationTime].filter(Boolean).join(' · ')
}

const getTicketAmountSummaryText = (amount: string, unitLabel: string) => {
  if (amount === '--') return '待处理'

  return unitLabel === '数量' ? amount : `${amount}${unitLabel}`
}

const getTicketObjectSummaryText = (
  ticket: ApiTicket,
  payload: JsonRecord | null,
  entity: JsonRecord | null,
) => {
  const type = normalizeStatus(ticket.type || ticket.targetType)

  if (isPointsTicketType(type)) return '积分'
  if (isWineTicketType(type)) {
    const wineEntity = parseWineStorageTicketEntity(entity)

    return getTicketPayloadDishText(payload) || getWineEntityDishText(ticket, entity, wineEntity)
  }

  return getTicketTargetName(ticket, payload, entity)
}

const getTicketSummary = (
  ticket: ApiTicket,
  payload: JsonRecord | null,
  entity: JsonRecord | null,
  amount: string,
  unitLabel: string,
): TimelineOrderDetail[] =>
  [
    {
      label: '类型',
      value: getTicketTypeLabel(ticket),
    },
    {
      label: '对象',
      value: getTicketObjectSummaryText(ticket, payload, entity),
    },
    {
      label: '数量',
      value: getTicketAmountSummaryText(amount, unitLabel),
    },
    {
      label: '会员',
      value: getTicketEntityMemberText(ticket, entity),
    },
    {
      label: '申请人',
      value: getTicketApplicantText(ticket),
    },
    {
      label: '审批',
      value: getTicketReviewSummaryText(ticket, entity),
    },
  ].filter((detail) => {
    const value = normalizeText(detail.value)

    return value && value !== '--'
  })

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

const getTicketId = (ticket: ApiTicket) => normalizeText(ticket.id)

const canAuditTicket = (ticket: ApiTicket) => normalizeStatus(ticket.status) === 'pending' && Boolean(getTicketId(ticket))

const clampTicketAuditOffset = (offset: number) =>
  Math.min(Math.max(offset, 0), TICKET_AUDIT_ACTION_WIDTH)

const getTicketAuditOffset = (order: TimelineOrder) => {
  if (!order.canAudit) return 0
  if (swipingTicketKey.value === order.key) return ticketSwipeOffset.value

  return openAuditTicketKey.value === order.key ? TICKET_AUDIT_ACTION_WIDTH : 0
}

const getTicketAuditSurfaceStyle = (order: TimelineOrder) => {
  const offset = getTicketAuditOffset(order)

  return offset ? `transform: translateX(-${offset}px);` : ''
}

const closeTicketAuditActions = () => {
  openAuditTicketKey.value = ''
  swipingTicketKey.value = ''
  ticketSwipeOffset.value = 0
  isTicketSwipeLocked.value = false
}

const handleTicketAuditPointerDown = (order: TimelineOrder, event: PointerEvent) => {
  if (!order.canAudit || auditingTicketKey.value) return

  ;(event.currentTarget as HTMLElement | null)?.setPointerCapture?.(event.pointerId)
  swipingTicketKey.value = order.key
  ticketSwipeStartX.value = event.clientX
  ticketSwipeStartY.value = event.clientY
  ticketSwipeStartOffset.value = openAuditTicketKey.value === order.key ? TICKET_AUDIT_ACTION_WIDTH : 0
  ticketSwipeOffset.value = ticketSwipeStartOffset.value
  isTicketSwipeLocked.value = false

  if (openAuditTicketKey.value && openAuditTicketKey.value !== order.key) {
    openAuditTicketKey.value = ''
  }
}

const handleTicketAuditPointerMove = (order: TimelineOrder, event: PointerEvent) => {
  if (swipingTicketKey.value !== order.key) return

  const deltaX = ticketSwipeStartX.value - event.clientX
  const deltaY = ticketSwipeStartY.value - event.clientY

  if (!isTicketSwipeLocked.value) {
    if (Math.abs(deltaX) < 8 && Math.abs(deltaY) < 8) return
    if (Math.abs(deltaY) > Math.abs(deltaX)) {
      closeTicketAuditActions()
      return
    }

    isTicketSwipeLocked.value = true
  }

  event.preventDefault()
  ticketSwipeOffset.value = clampTicketAuditOffset(ticketSwipeStartOffset.value + deltaX)
}

const handleTicketAuditPointerEnd = (order: TimelineOrder) => {
  if (swipingTicketKey.value !== order.key) return

  const shouldOpen = isTicketSwipeLocked.value && ticketSwipeOffset.value >= TICKET_AUDIT_SWIPE_THRESHOLD

  openAuditTicketKey.value = shouldOpen ? order.key : ''
  swipingTicketKey.value = ''
  ticketSwipeOffset.value = 0
  isTicketSwipeLocked.value = false
}

const replaceTicketInList = (nextTicket: ApiTicket) => {
  const nextTicketId = getTicketId(nextTicket)
  if (!nextTicketId) return

  tickets.value = tickets.value.map((ticket) => (getTicketId(ticket) === nextTicketId ? nextTicket : ticket))
}

const handleAuditTicket = async (order: TimelineOrder, action: 'approve' | 'reject') => {
  if (!order.canAudit || !order.ticketId || auditingTicketKey.value) return

  auditingTicketKey.value = order.key
  auditingAction.value = action

  try {
    const result =
      action === 'approve'
        ? await putApiTicketV1TicketsApprove({
            id: order.ticketId,
            reviewRemark: '工单审核通过',
          })
        : await putApiTicketV1TicketsReject({
            id: order.ticketId,
            reviewRemark: '工单审核驳回',
          })

    if (result.ticket) {
      replaceTicketInList(result.ticket)
    } else {
      await loadTicketsPage(1, true)
    }

    message.success(action === 'approve' ? '工单已通过' : '工单已驳回')
    closeTicketAuditActions()
  } catch {
    message.error(action === 'approve' ? '工单通过失败，请稍后重试' : '工单驳回失败，请稍后重试')
  } finally {
    auditingTicketKey.value = ''
    auditingAction.value = ''
  }
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

const toggleTicketExpanded = (key: string) => {
  const nextKeys = new Set(expandedTicketKeys.value)

  if (nextKeys.has(key)) {
    nextKeys.delete(key)
  } else {
    nextKeys.add(key)
  }

  expandedTicketKeys.value = nextKeys
}

const toggleTimelineExpanded = (order: TimelineOrder) => {
  if (order.variant === 'tickets') {
    toggleTicketExpanded(order.key)
    return
  }

  toggleOrderExpanded(order.key)
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
    emptyItemsText: '暂无菜品明细',
    icon: CreditCardOutlined,
    isExpanded: expandedOrderKeys.value.has(key),
    items: getOrderItems(order),
    key,
    meta: getOrderMeta(order),
    promotions: getOrderPromotions(order),
    status: statusConfig.label,
    statusTone: statusConfig.tone,
    summary: [],
    canAudit: false,
    tag: hasOrderMember(order) ? '小程序' : '后台开单',
    ticketId: '',
    time: formatOrderTime(order),
    title: getOrderTitle(order),
    variant: 'orders',
  }
}

const createTimelineTicket = (ticket: ApiTicket, index: number): TimelineOrder => {
  const statusConfig = getTicketStatusConfig(ticket)
  const ticketId = getTicketId(ticket)
  const key = ticketId || normalizeText(ticket.targetId) || `${ticketCurrentPage.value}-${index}`
  const payload = parseJsonRecord(ticket.payload)
  const entity = parseJsonRecord(ticket.entityJson)
  const amount = getTicketAmount(ticket, payload, entity)
  const unitLabel = getTicketUnitLabel(ticket)

  return {
    amount: amount === '--' ? '待处理' : `${amount}${unitLabel}`,
    dailySeqLabel: normalizeText(ticket.id).slice(-6) || '--',
    details: getTicketDetails(ticket),
    emptyItemsText: '暂无工单明细',
    icon: FileTextOutlined,
    isExpanded: expandedTicketKeys.value.has(key),
    items: getTicketItems(ticket),
    key,
    meta: getTicketMeta(ticket),
    promotions: [],
    status: statusConfig.label,
    statusTone: statusConfig.tone,
    summary: getTicketSummary(ticket, payload, entity, amount, unitLabel),
    canAudit: canAuditTicket(ticket),
    tag: '工单',
    ticketId,
    time: formatTicketTime(ticket),
    title: getTicketTitle(ticket),
    variant: 'tickets',
  }
}

const timelineOrders = computed(() =>
  displayMode.value === 'tickets' ? tickets.value.map(createTimelineTicket) : orders.value.map(createTimelineOrder),
)

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

const loadTicketsPage = async (page: number, replace = false) => {
  if (!replace && (isTicketInitialLoading.value || isTicketLoadingMore.value)) return
  if (!replace && !hasMoreTickets.value) return

  const requestId = replace ? ++ticketsRequestId : ticketsRequestId

  if (replace) {
    isTicketInitialLoading.value = true
    isTicketLoadingMore.value = false
    ticketsError.value = ''
    ticketLoadMoreError.value = ''
    tickets.value = []
    ticketCurrentPage.value = 0
    totalTickets.value = 0
    hasMoreTickets.value = true
    expandedTicketKeys.value = new Set()
    orderListRef.value?.scrollTo({ top: 0 })
  } else {
    isTicketLoadingMore.value = true
    ticketLoadMoreError.value = ''
  }

  try {
    const scope = await ensureActiveScope()

    if (requestId !== ticketsRequestId) return

    if (!scope) {
      hasMoreTickets.value = false
      ticketsError.value = '暂无可用组织'
      return
    }

    const result = await getApiTicketV1Tickets({
      'pageRequest.page': page,
      'pageRequest.pageSize': ORDER_PAGE_SIZE,
      merchantId: scope.merchantId,
      storeId: scope.storeId,
      type: selectedTicketType.value || undefined,
    })

    if (requestId !== ticketsRequestId) return

    const nextTickets = result.tickets ?? []
    const total = Number(result.pageReply?.total)
    const nextPage = Number(result.pageReply?.page ?? page)

    tickets.value = replace ? nextTickets : [...tickets.value, ...nextTickets]
    ticketCurrentPage.value = Number.isFinite(nextPage) ? nextPage : page
    totalTickets.value = Number.isFinite(total) ? total : tickets.value.length
    hasMoreTickets.value = Number.isFinite(total)
      ? tickets.value.length < total
      : nextTickets.length >= ORDER_PAGE_SIZE
  } catch {
    if (requestId !== ticketsRequestId) return

    if (replace) {
      ticketsError.value = '工单数据加载失败，请稍后重试'
      hasMoreTickets.value = false
    } else {
      ticketLoadMoreError.value = '加载失败，点此重试'
      message.warning('下一页工单加载失败')
    }
  } finally {
    if (requestId === ticketsRequestId) {
      isTicketInitialLoading.value = false
      isTicketLoadingMore.value = false
      queueLoadMoreCheck()
    }
  }
}

const reloadOrders = () => {
  if (displayMode.value === 'tickets') {
    void loadTicketsPage(1, true)
    return
  }

  void loadOrdersPage(1, true)
}

const loadNextOrders = (force = false) => {
  if (displayMode.value === 'tickets') {
    if (isTicketInitialLoading.value || isTicketLoadingMore.value || !hasMoreTickets.value) return
    if (ticketLoadMoreError.value && !force) return

    void loadTicketsPage(ticketCurrentPage.value + 1)
    return
  }

  if (isInitialLoading.value || isLoadingMore.value || !hasMoreOrders.value) return
  if (loadMoreError.value && !force) return

  void loadOrdersPage(currentPage.value + 1)
}

const toggleDisplayMode = () => {
  displayMode.value = displayMode.value === 'tickets' ? 'orders' : 'tickets'
  orderListRef.value?.scrollTo({ top: 0 })

  if (displayMode.value === 'tickets' && !tickets.value.length && !isTicketInitialLoading.value) {
    void loadTicketsPage(1, true)
  } else if (displayMode.value === 'orders' && !orders.value.length && !isInitialLoading.value) {
    void loadOrdersPage(1, true)
  } else {
    queueLoadMoreCheck()
  }
}

const handleTicketTypeChange = (type: string) => {
  if (selectedTicketType.value === type) return

  selectedTicketType.value = type
  void loadTicketsPage(1, true)
}

const clearOrdersCache = () => {
  ordersRequestId += 1
  orders.value = []
  currentPage.value = 0
  totalOrders.value = 0
  hasMoreOrders.value = true
  isInitialLoading.value = false
  isLoadingMore.value = false
  ordersError.value = ''
  loadMoreError.value = ''
  expandedOrderKeys.value = new Set()
}

const clearTicketsCache = () => {
  ticketsRequestId += 1
  tickets.value = []
  ticketCurrentPage.value = 0
  totalTickets.value = 0
  hasMoreTickets.value = true
  isTicketInitialLoading.value = false
  isTicketLoadingMore.value = false
  ticketsError.value = ''
  ticketLoadMoreError.value = ''
  expandedTicketKeys.value = new Set()
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

const scrollOrdersToTop = () => {
  orderListRef.value?.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
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

watch(
  () => [route.query.mode, route.query.view, route.query.type, route.query.ticketType],
  () => {
    const nextMode = getRouteDisplayMode()
    const nextTicketType = getRouteTicketType()
    const modeChanged = displayMode.value !== nextMode
    const typeChanged = selectedTicketType.value !== nextTicketType

    if (!modeChanged && !typeChanged) return

    displayMode.value = nextMode
    selectedTicketType.value = nextTicketType
    orderListRef.value?.scrollTo({ top: 0 })

    if (nextMode === 'tickets') {
      clearOrdersCache()
      void loadTicketsPage(1, true)
      return
    }

    clearTicketsCache()
    void loadOrdersPage(1, true)
  },
)

watch(selectedScopeKey, (nextScopeKey, previousScopeKey) => {
  if (!previousScopeKey || nextScopeKey === previousScopeKey) return

  if (displayMode.value === 'tickets') {
    clearOrdersCache()
    void loadTicketsPage(1, true)
  } else {
    clearTicketsCache()
    void loadOrdersPage(1, true)
  }
})
</script>

<template>
  <main class="tab-page orders-page" :aria-label="pageAriaLabel">
    <section class="orders-topbar" aria-label="订单导航">
      <button class="orders-icon-button" type="button" aria-label="返回" @click="handleBack">
        <ArrowLeftOutlined />
      </button>

      <strong>{{ topbarTitle }}</strong>

      <button class="orders-text-button" type="button" @click="toggleDisplayMode">
        {{ switchModeLabel }}
      </button>
    </section>

    <section class="orders-hero" :aria-label="overviewAriaLabel">
      <div>
        <p>{{ heroKindLabel }} {{ heroDateLabel }}</p>
        <h1>{{ heroTitle }}</h1>
      </div>
    </section>

    <section class="orders-stat-strip" :aria-label="statsAriaLabel">
      <div v-for="stat in orderStats" :key="stat.label" class="orders-stat">
        <strong>{{ stat.value }}</strong>
        <span>{{ stat.label }}</span>
      </div>
    </section>

    <section v-if="isTicketMode" class="orders-filter-strip" aria-label="工单类型筛选">
      <button
        v-for="option in ticketTypeOptions"
        :key="option.value || 'all'"
        class="orders-filter-button"
        :class="{ 'is-active': selectedTicketType === option.value }"
        type="button"
        :aria-pressed="selectedTicketType === option.value"
        @click="handleTicketTypeChange(option.value)"
      >
        {{ option.label }}
      </button>
    </section>

    <section class="orders-timeline" :aria-label="timelineAriaLabel">
      <div class="orders-section-heading">
        <h2>{{ sectionTitle }}</h2>
        <span>{{ sectionSubtitle }}</span>
      </div>

      <ol
        ref="orderListRef"
        class="orders-timeline-list"
        :class="{ 'is-empty': !timelineOrders.length }"
        @scroll.passive="handleOrderListScroll"
      >
        <li
          v-if="currentInitialLoading"
          class="orders-list-state"
        >
          {{ loadingText }}
        </li>
        <li
          v-else-if="currentError && !timelineOrders.length"
          class="orders-list-state is-error"
        >
          <span>{{ currentError }}</span>
          <button class="orders-state-button" type="button" @click="reloadOrders">重新加载</button>
        </li>
        <li
          v-else-if="!timelineOrders.length"
          class="orders-list-state"
        >
          {{ emptyText }}
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
                :aria-label="order.isExpanded ? `收起${heroTitle}详情` : `展开${heroTitle}详情`"
                @click="toggleTimelineExpanded(order)"
              >
                <DownOutlined />
              </button>
            </div>

            <div v-if="order.variant === 'orders'" class="orders-card-meta">
              <component :is="order.icon" />
              <span>{{ order.meta }}</span>
            </div>

            <div v-if="order.summary.length" class="orders-card-summary">
              <div
                v-for="detail in order.summary"
                :key="detail.label"
                class="orders-card-summary-row"
              >
                <span>{{ detail.label }}</span>
                <strong>{{ detail.value }}</strong>
              </div>
            </div>

            <div v-else-if="order.items.length" class="orders-card-items">
              <div v-for="item in order.items" :key="item.key" class="orders-card-item">
                <span class="orders-item-name">{{ item.name }}</span>
                <span class="orders-item-quantity">{{ item.quantityLabel }}</span>
                <span class="orders-item-unit">{{ item.unitPriceLabel }}</span>
                <strong class="orders-item-total">{{ item.totalPriceLabel }}</strong>
              </div>
            </div>

            <div v-else class="orders-card-items is-empty">
              {{ order.emptyItemsText }}
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

            <div
              class="orders-card-foot"
              :class="{ 'has-audit-actions': order.canAudit, 'is-open': openAuditTicketKey === order.key }"
              @pointerdown="handleTicketAuditPointerDown(order, $event)"
              @pointermove="handleTicketAuditPointerMove(order, $event)"
              @pointerup="handleTicketAuditPointerEnd(order)"
              @pointercancel="handleTicketAuditPointerEnd(order)"
              @pointerleave="handleTicketAuditPointerEnd(order)"
            >
              <div v-if="order.canAudit" class="orders-card-audit-actions" aria-label="工单审核操作">
                <button
                  class="orders-audit-action is-approve"
                  type="button"
                  :disabled="Boolean(auditingTicketKey)"
                  @pointerdown.stop
                  @pointerup.stop
                  @click.stop="handleAuditTicket(order, 'approve')"
                >
                  <CheckOutlined />
                  <span>{{ auditingTicketKey === order.key && auditingAction === 'approve' ? '处理中' : '通过' }}</span>
                </button>
                <button
                  class="orders-audit-action is-reject"
                  type="button"
                  :disabled="Boolean(auditingTicketKey)"
                  @pointerdown.stop
                  @pointerup.stop
                  @click.stop="handleAuditTicket(order, 'reject')"
                >
                  <CloseOutlined />
                  <span>{{ auditingTicketKey === order.key && auditingAction === 'reject' ? '处理中' : '驳回' }}</span>
                </button>
              </div>

              <div class="orders-card-foot-surface" :style="getTicketAuditSurfaceStyle(order)">
                <span class="orders-status" :class="`is-${order.statusTone}`">{{ order.status }}</span>
                <strong>{{ order.amount }}</strong>
              </div>
            </div>
          </article>
        </li>

        <li
          v-if="timelineOrders.length && currentLoadingMore"
          class="orders-list-state is-tail"
        >
          正在加载更多
        </li>
        <li
          v-else-if="timelineOrders.length && currentLoadMoreError"
          class="orders-list-state is-tail is-error"
        >
          <button class="orders-state-button" type="button" @click="loadNextOrders(true)">
            {{ currentLoadMoreError }}
          </button>
        </li>
        <li
          v-else-if="timelineOrders.length && !currentHasMore"
          class="orders-list-state is-tail"
        >
          {{ allLoadedText }}
        </li>
      </ol>
    </section>

    <button
      class="orders-scroll-top-button"
      type="button"
      aria-label="回到顶部"
      @click="scrollOrdersToTop"
    >
      <VerticalAlignTopOutlined />
    </button>
  </main>
</template>
