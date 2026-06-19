<script setup lang="ts">
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  CloseOutlined,
  CoffeeOutlined,
  CrownOutlined,
  DownloadOutlined,
  EditOutlined,
  QrcodeOutlined,
  ShopOutlined,
  TableOutlined,
  UploadOutlined,
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import brandMarkUrl from '@/assets/bgc.jpg'
import TableSeatPicker from '@/components/TableSeatPicker.vue'
import {
  getApiOrderV1Orders,
  postApiTableV1ReservationsArrive,
  type GetApiOrderV1OrdersResponse,
  type PostApiStoreV1BusinessCurrentResponse,
} from '@/services/basis/basis'
import { useOrgScopeStore } from '@/stores/orgScope'
import type { OrgScopeSelection } from '@/stores/orgScope'
import { useTableSeatStore } from '@/stores/tableSeat'
import { normalizeUrl } from '@/utils'
import { decodeQrFromImage, resolveArriveVerifyFromRaw } from '@/utils/arriveVerify'
import { getUserInfo, refreshUserInfo, type AuthUserInfo } from '@/utils/auth'

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
const route = useRoute()
const orgScopeStore = useOrgScopeStore()
const tableSeatStore = useTableSeatStore()
const userInfo = ref<AuthUserInfo | null>(getUserInfo())
const normalizedBrandMarkUrl = normalizeUrl(brandMarkUrl)
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
const isArriveVerifyCardOpen = ref(false)
const isArriveManualOpen = ref(false)
const arriveVerifyCode = ref('')
const arriveScanMessage = ref('')
const arriveCapturing = ref(false)
const arriveVerifying = ref(false)
const arriveManualInputRef = ref<HTMLInputElement | null>(null)
const arriveVerifyPanelRef = ref<HTMLElement | null>(null)
const isWineStorageCardOpen = ref(false)
const wineStoragePanelRef = ref<HTMLElement | null>(null)

let latestOrderRequestId = 0

const reloadUserInfo = async () => {
  try {
    userInfo.value = await refreshUserInfo()
  } catch {
    userInfo.value = getUserInfo()
  }
}

onMounted(() => {
  void reloadUserInfo()
})

const focusArriveVerifyPanel = () => {
  void nextTick(() => {
    arriveVerifyPanelRef.value?.focus({
      preventScroll: true,
    })
  })
}

const focusArriveManualInput = () => {
  void nextTick(() => {
    arriveManualInputRef.value?.focus({
      preventScroll: true,
    })
  })
}

const focusWineStoragePanel = () => {
  void nextTick(() => {
    wineStoragePanelRef.value?.focus({
      preventScroll: true,
    })
  })
}

const normalizeText = (value: unknown) => {
  if (value === undefined || value === null) return ''

  return String(value).trim()
}

const normalizeStatus = (value: unknown) => normalizeText(value).toLowerCase()

const canOperateArriveStore = (storeId: string) => {
  const scope = selectedScope.value
  const targetStoreId = normalizeText(storeId)
  if (!scope?.merchantId || !targetStoreId) return false
  if (scope.storeId === targetStoreId) return true

  return orgScopeStore.availableSelections.some(
    (selection) =>
      selection.merchantId === scope.merchantId && selection.storeId === targetStoreId,
  )
}

const resolveArriveRawValue = (rawValue: string) =>
  resolveArriveVerifyFromRaw(rawValue, {
    canOperateStore: canOperateArriveStore,
    merchantId: selectedScope.value?.merchantId || '',
  })

const ensureArriveVerifyScope = () => {
  if (selectedScope.value?.merchantId && selectedScope.value?.storeId) return true

  if (!orgScopeStore.loaded && !orgScopeStore.loading) {
    void orgScopeStore.loadMyScopes().catch(() => {
      message.error('组织范围加载失败，请稍后重试')
    })
  }

  message.warning('请先选择可核验门店')
  return false
}

const ensureWineStorageScope = () => {
  if (selectedScope.value?.merchantId && selectedScope.value?.storeId) return true

  if (!orgScopeStore.loaded && !orgScopeStore.loading) {
    void orgScopeStore.loadMyScopes().catch(() => {
      message.error('组织范围加载失败，请稍后重试')
    })
  }

  message.warning('请先选择存取酒门店')
  return false
}

const switchArriveStore = (storeId: string) => {
  const scope = selectedScope.value
  const targetStoreId = normalizeText(storeId)

  if (!scope || !targetStoreId || scope.storeId === targetStoreId) return true

  const selection = orgScopeStore.findSelection(scope.merchantId, targetStoreId)
  if (!selection) return false

  orgScopeStore.applySelection(selection)
  tableSeatStore.clearSelectedSeat()
  return true
}

const resetArriveVerifyCard = () => {
  arriveVerifyCode.value = ''
  arriveScanMessage.value = ''
  isArriveManualOpen.value = false
}

const toggleArriveVerifyCard = () => {
  if (isArriveVerifyCardOpen.value) {
    if (!arriveCapturing.value && !arriveVerifying.value) {
      isArriveVerifyCardOpen.value = false
      resetArriveVerifyCard()
    }
    return
  }

  if (!ensureArriveVerifyScope()) return

  resetArriveVerifyCard()
  isArriveVerifyCardOpen.value = true
  focusArriveVerifyPanel()
}

const openArriveVerifyCard = () => {
  if (isArriveVerifyCardOpen.value) {
    focusArriveVerifyPanel()
    return
  }

  if (!ensureArriveVerifyScope()) return

  resetArriveVerifyCard()
  isArriveVerifyCardOpen.value = true
  focusArriveVerifyPanel()
}

const closeArriveVerifyCard = () => {
  if (arriveCapturing.value || arriveVerifying.value) return

  isArriveVerifyCardOpen.value = false
  resetArriveVerifyCard()
}

const closeWineStorageCard = () => {
  isWineStorageCardOpen.value = false
}

const toggleWineStorageCard = () => {
  if (isWineStorageCardOpen.value) {
    closeWineStorageCard()
    return
  }

  if (!ensureWineStorageScope()) return

  isWineStorageCardOpen.value = true
  focusWineStoragePanel()
}

const handleArriveVerifyFocusOut = (event: FocusEvent) => {
  if (isArriveManualOpen.value || arriveCapturing.value || arriveVerifying.value) return

  const currentTarget = event.currentTarget as HTMLElement
  const nextTarget = event.relatedTarget as Node | null

  if (nextTarget && currentTarget.contains(nextTarget)) return

  window.setTimeout(() => {
    const activeElement = document.activeElement
    if (activeElement && currentTarget.contains(activeElement)) return
    if (!document.hasFocus()) return

    closeArriveVerifyCard()
  })
}

const handleWineStorageFocusOut = (event: FocusEvent) => {
  const currentTarget = event.currentTarget as HTMLElement
  const nextTarget = event.relatedTarget as Node | null

  if (nextTarget && currentTarget.contains(nextTarget)) return

  window.setTimeout(() => {
    const activeElement = document.activeElement
    if (activeElement && currentTarget.contains(activeElement)) return
    if (!document.hasFocus()) return

    closeWineStorageCard()
  })
}

const handleArriveVerifyOutsidePointerDown = (event: PointerEvent) => {
  const target = event.target as Node | null

  if (
    isArriveVerifyCardOpen.value &&
    !isArriveManualOpen.value &&
    !arriveCapturing.value &&
    !arriveVerifying.value
  ) {
    const panel = arriveVerifyPanelRef.value
    if (panel && (!target || !panel.contains(target))) {
      closeArriveVerifyCard()
    }
  }

  if (isWineStorageCardOpen.value) {
    const panel = wineStoragePanelRef.value
    if (panel && (!target || !panel.contains(target))) {
      closeWineStorageCard()
    }
  }
}

window.addEventListener('pointerdown', handleArriveVerifyOutsidePointerDown, true)

onBeforeUnmount(() => {
  window.removeEventListener('pointerdown', handleArriveVerifyOutsidePointerDown, true)
})

const openManualArriveInput = () => {
  if (!ensureArriveVerifyScope()) return

  isArriveManualOpen.value = true
  arriveScanMessage.value = ''
  focusArriveManualInput()
}

const closeManualArriveInput = () => {
  if (arriveVerifying.value) return

  isArriveManualOpen.value = false
  arriveVerifyCode.value = ''
  arriveScanMessage.value = ''
  focusArriveVerifyPanel()
}

const openWineStoragePage = async (mode: 'deposit' | 'withdraw') => {
  if (!ensureWineStorageScope()) return

  closeWineStorageCard()
  await router.push({
    name: 'wine-storage',
    query: {
      mode,
    },
  })
}

const refreshHomeAfterArriveVerify = async () => {
  const scope = selectedScope.value

  if (scope) {
    await orgScopeStore.loadCurrentBusiness(scope).catch(() => undefined)
  }

  void loadLatestOrder()
}

const submitArriveVerify = async (rawValue?: string, preferredStoreId?: string) => {
  if (!ensureArriveVerifyScope() || arriveVerifying.value) return

  const resolved = resolveArriveRawValue(rawValue ?? arriveVerifyCode.value)

  if (resolved.status === 'empty') {
    message.warning('请输入核验码')
    return
  }

  if (resolved.status === 'invalid') {
    arriveScanMessage.value = resolved.message
    message.warning(resolved.message)
    return
  }

  if (resolved.storeId && !switchArriveStore(resolved.storeId)) {
    arriveScanMessage.value = '该预约商户/门店不在操作权限内'
    message.warning(arriveScanMessage.value)
    return
  }

  const verifyStoreId = normalizeText(resolved.storeId || preferredStoreId || selectedScope.value?.storeId)
  if (!verifyStoreId) {
    message.warning('请先选择核验门店')
    return
  }

  arriveVerifying.value = true
  arriveVerifyCode.value = resolved.reservationId
  arriveScanMessage.value = '正在核验到店'

  try {
    await postApiTableV1ReservationsArrive(
      { id: resolved.reservationId },
      {
        errorMessageMode: 'none',
        headers: {
          'x-store-id': verifyStoreId,
        },
      },
    )
    message.success('到店核验成功')
    isArriveVerifyCardOpen.value = false
    resetArriveVerifyCard()
    await refreshHomeAfterArriveVerify()
  } catch {
    arriveScanMessage.value = '到店核验失败，请确认核验码是否有效'
    message.error(arriveScanMessage.value)
  } finally {
    arriveVerifying.value = false
  }
}

const resolveArriveScannedValue = (rawValue: string) => {
  const resolved = resolveArriveRawValue(rawValue)

  if (resolved.status === 'empty') return false

  if (resolved.status === 'invalid') {
    arriveScanMessage.value = resolved.message
    message.warning(resolved.message)
    return true
  }

  if (resolved.storeId && !switchArriveStore(resolved.storeId)) {
    arriveScanMessage.value = '该预约商户/门店不在操作权限内'
    message.warning(arriveScanMessage.value)
    return true
  }

  arriveVerifyCode.value = resolved.reservationId
  arriveScanMessage.value = '已识别核验码'
  void submitArriveVerify(resolved.reservationId, resolved.storeId)
  return true
}

const handleArriveCaptureChange = async (event: Event) => {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]

  input.value = ''

  if (!file || !ensureArriveVerifyScope()) return

  arriveCapturing.value = true
  isArriveManualOpen.value = false
  arriveScanMessage.value = '正在识别二维码'

  try {
    const rawValue = await decodeQrFromImage(file)

    if (resolveArriveScannedValue(rawValue)) return

    arriveScanMessage.value = '未识别到二维码，请重新扫码或输入核验码'
  } catch {
    arriveScanMessage.value = '二维码识别失败，请重新扫码或输入核验码'
  } finally {
    arriveCapturing.value = false
  }
}

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

watch(
  () => [
    route.query.action,
    selectedScope.value?.merchantId,
    selectedScope.value?.storeId,
    orgScopeStore.loading,
  ],
  ([action]) => {
    const actionValue = Array.isArray(action) ? action[0] : action
    if (actionValue !== 'arrive-verify') return
    if (orgScopeStore.loading) return

    openArriveVerifyCard()
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

</script>

<template>
  <main class="tab-page home-page" aria-label="首页">
    <section class="home-topbar">
      <div class="home-wordmark">
        <span>WULIN SCALE</span>
        <strong>無鳞</strong>
      </div>

    </section>

    <section class="home-hero" aria-label="無鳞首页">
      <div class="home-hero-mark" aria-hidden="true">
        <img :src="normalizedBrandMarkUrl" alt="" />
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

      <section
        id="home-arrive-verify-card"
        class="home-action-tile home-action-button home-arrive-verify-tile"
        :class="{ 'is-open': isArriveVerifyCardOpen }"
        aria-label="到店核验"
        @focusout="handleArriveVerifyFocusOut"
      >
        <button
          class="home-arrive-verify-trigger"
          type="button"
          aria-controls="home-arrive-verify-actions"
          :aria-expanded="isArriveVerifyCardOpen"
          :disabled="arriveCapturing || arriveVerifying"
          @click="toggleArriveVerifyCard"
        >
          <QrcodeOutlined class="home-action-icon" />
          <span>VERIFY</span>
          <strong>核验</strong>
          <small>预约到店</small>
        </button>

        <div
          v-if="isArriveVerifyCardOpen"
          id="home-arrive-verify-actions"
          ref="arriveVerifyPanelRef"
          class="home-arrive-action-panel"
          tabindex="-1"
        >
          <div class="home-arrive-action-grid">
            <label
              class="home-arrive-action"
              :class="{ 'is-disabled': arriveCapturing || arriveVerifying }"
            >
              <QrcodeOutlined />
              <span>
                <strong>{{ arriveCapturing ? '识别中' : arriveVerifying ? '核验中' : '拍照核验' }}</strong>
              </span>
              <input
                type="file"
                accept="image/*"
                capture="environment"
                :disabled="arriveCapturing || arriveVerifying"
                @change="handleArriveCaptureChange"
              />
            </label>

            <button
              class="home-arrive-action"
              type="button"
              aria-controls="home-arrive-manual-dialog"
              :aria-expanded="isArriveManualOpen"
              aria-haspopup="dialog"
              :disabled="arriveCapturing || arriveVerifying"
              @click="openManualArriveInput"
            >
              <EditOutlined />
              <span>
                <strong>输入核验码</strong>
              </span>
            </button>
          </div>

          <p v-if="arriveScanMessage && !isArriveManualOpen" class="home-arrive-message">
            {{ arriveScanMessage }}
          </p>
        </div>
      </section>

    </section>

    <section
      v-if="isArriveManualOpen"
      class="table-picker-overlay home-arrive-manual-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="home-arrive-manual-title"
      @click.self="closeManualArriveInput"
      @keydown.esc="closeManualArriveInput"
    >
      <form
        id="home-arrive-manual-dialog"
        class="home-arrive-manual home-arrive-manual-dialog"
        @submit.prevent="submitArriveVerify()"
      >
        <header class="home-arrive-manual-head">
          <p>VERIFY CODE</p>
          <h2 id="home-arrive-manual-title">输入核验码</h2>
        </header>

        <label class="home-arrive-input-field">
          <span>核验码</span>
          <input
            v-model="arriveVerifyCode"
            ref="arriveManualInputRef"
            autocomplete="off"
            placeholder="输入预约 ID 或完整核验内容"
            :disabled="arriveVerifying"
          />
        </label>

        <button
          class="home-arrive-submit"
          type="submit"
          :disabled="arriveVerifying"
        >
          <CheckCircleFilled />
          <span>{{ arriveVerifying ? '核验中' : '确认核验' }}</span>
        </button>

        <p v-if="arriveScanMessage" class="home-arrive-message">
          {{ arriveScanMessage }}
        </p>
      </form>
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
      <RouterLink class="home-mini-card" :to="{ name: 'points-deposit' }">
        <span>
          <strong>存积分</strong>
          <small>POINTS</small>
        </span>
        <CrownOutlined class="home-mini-icon" />
      </RouterLink>

      <section
        class="home-mini-card home-wine-storage-card"
        :class="{ 'is-open': isWineStorageCardOpen }"
        aria-label="存取酒"
        @focusout="handleWineStorageFocusOut"
      >
        <button
          class="home-wine-storage-trigger"
          type="button"
          aria-controls="home-wine-storage-actions"
          :aria-expanded="isWineStorageCardOpen"
          @click="toggleWineStorageCard"
        >
          <span>
            <strong>存取酒</strong>
            <small>WINE</small>
          </span>
          <CoffeeOutlined class="home-mini-icon" />
        </button>

        <div
          v-if="isWineStorageCardOpen"
          id="home-wine-storage-actions"
          ref="wineStoragePanelRef"
          class="home-wine-storage-panel"
          tabindex="-1"
        >
          <div class="home-arrive-action-grid">
            <button
              class="home-arrive-action"
              type="button"
              @click="openWineStoragePage('deposit')"
            >
              <UploadOutlined />
              <span>
                <strong>存酒</strong>
              </span>
            </button>

            <button
              class="home-arrive-action"
              type="button"
              @click="openWineStoragePage('withdraw')"
            >
              <DownloadOutlined />
              <span>
                <strong>取酒</strong>
              </span>
            </button>
          </div>
        </div>
      </section>
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

    <Teleport to="body">
      <section
        v-if="isScopePickerOpen"
        class="table-picker-overlay home-scope-picker-overlay"
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
    </Teleport>
  </main>
</template>
