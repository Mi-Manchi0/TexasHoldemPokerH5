<script setup lang="ts">
import {
  PlusCircleOutlined,
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import {
  ChevronRight,
  Check,
  CirclePlus,
  DoorOpen,
  MapPin,
  Minus,
  Plus,
  ReceiptText,
  RefreshCw,
  RotateCcw,
  ShoppingCart,
  Table2,
  WalletCards,
  X,
} from 'lucide-vue-next'
import { computed, ref, watch } from 'vue'
import TableSeatPicker from '@/components/TableSeatPicker.vue'
import {
  deleteApiOrderV1TableSessionsItems,
  getApiDishV1Categories,
  getApiDishV1Dishes,
  getApiOrderV1TableSessions,
  getApiOrderV1TableSessionsById,
  getApiTableV1Tables,
  postApiOrderV1TableSessionsCheckout,
  postApiOrderV1TableSessionsItems,
  postApiOrderV1TableSessionsOpen,
  type GetApiDishV1CategoriesResponse,
  type GetApiDishV1DishesResponse,
  type GetApiOrderV1TableSessionsByIdResponse,
  type GetApiOrderV1TableSessionsResponse,
  type GetApiTableV1TablesResponse,
} from '@/services/basis/basis'
import { useOrgScopeStore } from '@/stores/orgScope'
import { useTableSeatStore } from '@/stores/tableSeat'

const orgScopeStore = useOrgScopeStore()
const tableSeatStore = useTableSeatStore()
const selectedScope = computed(() => orgScopeStore.selected)
const selectedSeat = computed(() =>
  tableSeatStore.isSelectedSeatForScope(selectedScope.value) ? tableSeatStore.selected : null,
)
const seatTitle = computed(() => selectedSeat.value?.name || '请选择桌位')
const seatSubtitle = computed(() => {
  if (selectedSeat.value) {
    return [selectedSeat.value.storeName, selectedSeat.value.note].filter(Boolean).join(' · ')
  }

  if (orgScopeStore.loading && !selectedScope.value) return '正在同步门店与桌位'
  if (selectedScope.value?.storeName) return `${selectedScope.value.storeName} · 未选择桌位`

  return '请先选择组织与桌位'
})
const seatIcon = computed(() => (selectedSeat.value ? Table2 : MapPin))

type ApiTable = NonNullable<GetApiTableV1TablesResponse['tables']>[number]
type ApiTableSession = NonNullable<GetApiOrderV1TableSessionsResponse['sessions']>[number]
type ApiTableSessionDetail = NonNullable<GetApiOrderV1TableSessionsByIdResponse['session']>
type ApiTableSessionItem = NonNullable<ApiTableSessionDetail['items']>[number]
type ApiDishCategory = NonNullable<GetApiDishV1CategoriesResponse['categories']>[number]
type ApiDish = NonNullable<GetApiDishV1DishesResponse['dishes']>[number]

type ActiveScope = {
  merchantId: string
  storeId: string
}

interface TableBillItemView {
  amountText: string
  cancelReason: string
  createdBy: string
  id: string
  isCancelled: boolean
  key: string
  name: string
  quantityText: string
  raw: ApiTableSessionItem
  remark: string
  statusText: string
  unitPriceText: string
}

interface TableBillBatchView {
  amountText: string
  items: TableBillItemView[]
  key: string
  label: string
  meta: string
  quantityText: string
}

interface MenuCategoryView {
  id: string
  label: string
  note: string
}

interface MenuProductView {
  category: string
  dishId: string
  id: string
  imageUrl: string
  label: string
  name: string
  priceCents: number
  priceText: string
  tag: string
  unitText: string
}

interface MenuCartItem {
  dishId: string
  name: string
  priceCents: number
  quantity: number
  unitText: string
}

const TABLE_PROGRESS_PAGE_SIZE = 200
const DISH_PAGE_SIZE = 100
const guestCountOptions = [
  { id: 'one', label: '1人', value: 1 },
  { id: 'two', label: '2人', value: 2 },
  { id: 'four', label: '4人', value: 4 },
  { id: 'custom', label: '自定义', value: 0 },
] as const

type GuestCountOptionId = (typeof guestCountOptions)[number]['id']

const openedTableSeatCount = ref(0)
const openableTableSeatCount = ref(0)
const openTableSessions = ref<ApiTableSession[]>([])
const activeTableAction = ref<'bill' | 'add'>('add')
const isTablePickerOpen = ref(false)
const isOpeningTable = ref(false)
const tableBillSession = ref<ApiTableSessionDetail | null>(null)
const tableBillLoading = ref(false)
const tableBillError = ref('')
const cancellingTableItemId = ref('')
const pendingCancelTableItem = ref<TableBillItemView | null>(null)
const isCheckingOutTable = ref(false)
const isCheckoutSheetOpen = ref(false)
const tableProgressError = ref('')
const tableProgressLoading = ref(false)
const dishCategories = ref<ApiDishCategory[]>([])
const menuDishes = ref<ApiDish[]>([])
const menuCartItemsByDishId = ref<Record<string, MenuCartItem>>({})
const isMenuCartPanelOpen = ref(false)
const activeCategory = ref('')
const menuCategoryLoading = ref(false)
const menuProductLoading = ref(false)
const menuCategoryError = ref('')
const menuProductError = ref('')
const isSubmittingMenuCart = ref(false)
const selectedGuestCountOption = ref<GuestCountOptionId>('two')
const customGuestCount = ref('2')

const checkoutPaymentMethods = [
  { id: 'cash', label: '现金' },
  { id: 'wechat', label: '微信' },
  { id: 'gold', label: '金币' },
  { id: 'free', label: '免支付' },
] as const

type CheckoutPaymentMethod = (typeof checkoutPaymentMethods)[number]['id']

const checkoutPaymentMethod = ref<CheckoutPaymentMethod>('cash')
const checkoutRemark = ref('')

let tableProgressRequestId = 0
let tableBillRequestId = 0
let menuCategoryRequestId = 0
let menuProductRequestId = 0

const tableProgressPercent = computed(() => {
  if (!openableTableSeatCount.value) return 0

  return Math.min((openedTableSeatCount.value / openableTableSeatCount.value) * 100, 100)
})

const tableProgressStyle = computed(() => ({
  '--menu-table-progress': `${tableProgressPercent.value}%`,
}))

const tableProgressText = computed(() => {
  if (tableProgressLoading.value || (orgScopeStore.loading && !selectedScope.value)) {
    return '正在同步开台进度'
  }

  if (tableProgressError.value) return tableProgressError.value
  if (!selectedScope.value) return '请选择组织查看开台进度'
  if (!openableTableSeatCount.value) return '暂无可开台桌位'

  return `已开台桌位 ${openedTableSeatCount.value}/${openableTableSeatCount.value}`
})

const selectedScopeKey = computed(() => {
  const scope = selectedScope.value
  if (!scope) return ''

  return `${scope.merchantId}:${scope.storeId}`
})

const normalizeText = (value: unknown) => {
  if (value === undefined || value === null) return ''

  return String(value).trim()
}

const isOpenableTable = (table: ApiTable) => {
  const tableStatus = table.status === undefined ? 1 : Number(table.status)

  return table.billingEnabled !== false && tableStatus === 1
}

const getSessionTableId = (session: ApiTableSession) =>
  normalizeText(session.tableId || session.table?.id)

const getSessionScope = (session: ApiTableSession) => ({
  merchantId: normalizeText(session.merchantId || session.merchant?.id),
  storeId: normalizeText(session.storeId || session.store?.id),
})

const isOpenSession = (session: ApiTableSession) => {
  const status = normalizeText(session.status).toLowerCase()

  return !status || status === 'open'
}

const selectedOpenSession = computed(() => {
  const scope = selectedScope.value
  const seat = selectedSeat.value

  if (!scope || !seat) return null

  return (
    openTableSessions.value.find((session) => {
      const sessionScope = getSessionScope(session)
      const isSameScope =
        (!sessionScope.merchantId || sessionScope.merchantId === scope.merchantId) &&
        (!sessionScope.storeId || sessionScope.storeId === scope.storeId)

      return isSameScope && getSessionTableId(session) === seat.id && isOpenSession(session)
    }) ?? null
  )
})

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

const formatDishPrice = (value?: string) => {
  const cents = Number(value)
  if (!Number.isFinite(cents)) return '0'

  const yuan = cents / 100

  return new Intl.NumberFormat('zh-CN', {
    maximumFractionDigits: 2,
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
  }).format(yuan)
}

const parseCents = (value?: string) => {
  const cents = Number(value)

  return Number.isFinite(cents) ? cents : null
}

const getDishPriceCents = (dish: ApiDish) => parseCents(dish.price || dish.basePrice) ?? 0

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
  const normalizedText = isDateOnly ? `${text}T00:00:00` : text.replace(' ', 'T')
  const date = new Date(normalizedText)
  if (Number.isNaN(date.getTime())) return null

  return date
}

const formatBillTime = (value?: string) => {
  const date = parseDateText(value)
  if (!date) return ''

  return date.toLocaleString('zh-CN', {
    day: '2-digit',
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
    month: '2-digit',
  })
}

const selectedSessionItemCount = computed(() => {
  const session = selectedOpenSession.value
  if (!session) return 0

  const activeItemCount = Number(session.activeItemCount)
  if (Number.isFinite(activeItemCount)) return activeItemCount

  return (session.items ?? []).filter(
    (item) => normalizeText(item.status).toLowerCase() !== 'cancelled',
  ).length
})

const selectedSessionBillSummary = computed(() => {
  const session = selectedOpenSession.value
  if (!session) return ''

  return `${formatMoney(session.totalAmount)} · ${selectedSessionItemCount.value}项`
})

const selectedGuestCount = computed(() => {
  if (selectedGuestCountOption.value !== 'custom') {
    return guestCountOptions.find((option) => option.id === selectedGuestCountOption.value)?.value ?? 2
  }

  const value = Number(customGuestCount.value)

  return Number.isFinite(value) && value > 0 ? Math.floor(value) : 2
})

const guestCountText = computed(() => `${selectedGuestCount.value}人`)

const isCancelledItem = (item: ApiTableSessionItem) =>
  normalizeText(item.status).toLowerCase() === 'cancelled'

const getItemAmountCents = (item: ApiTableSessionItem) => {
  const subtotalCents = parseCents(item.subtotal)
  if (subtotalCents !== null) return subtotalCents

  const priceCents = parseCents(item.price)
  const quantity = Number(item.quantity ?? 0)

  if (priceCents === null || !Number.isFinite(quantity)) return 0

  return Math.round(priceCents * quantity)
}

const tableBillItems = computed(() => tableBillSession.value?.items ?? [])

const activeTableBillItems = computed(() =>
  tableBillItems.value.filter((item) => !isCancelledItem(item)),
)

const tableBillActiveQuantity = computed(() =>
  activeTableBillItems.value.reduce((total, item) => {
    const quantity = Number(item.quantity ?? 0)

    return total + (Number.isFinite(quantity) ? quantity : 0)
  }, 0),
)

const tableBillActiveAmountCents = computed(() => {
  const totalAmountCents = parseCents(tableBillSession.value?.totalAmount)
  if (totalAmountCents !== null) return totalAmountCents

  return activeTableBillItems.value.reduce((total, item) => total + getItemAmountCents(item), 0)
})

const tableBillSummaryText = computed(() =>
  `${formatQuantity(tableBillActiveQuantity.value)}份 · ${formatMoney(String(tableBillActiveAmountCents.value))}`,
)

const tableBillCheckoutText = computed(() =>
  `离店结算 ${formatMoney(String(tableBillActiveAmountCents.value))}`,
)

const pendingCancelTableItemSummary = computed(() => {
  const item = pendingCancelTableItem.value
  if (!item) return ''

  return `${item.quantityText}份 · ${item.amountText}`
})

const menuCartItems = computed(() => Object.values(menuCartItemsByDishId.value))

const menuCartQuantity = computed(() =>
  menuCartItems.value.reduce((total, item) => total + item.quantity, 0),
)

const menuCartLineCount = computed(() => menuCartItems.value.length)

const menuCartAmountCents = computed(() =>
  menuCartItems.value.reduce((total, item) => total + item.priceCents * item.quantity, 0),
)

const menuCartSummaryText = computed(() =>
  menuCartQuantity.value
    ? `${formatQuantity(menuCartQuantity.value)}份 · ${menuCartLineCount.value}种`
    : '购物车为空',
)

const menuCartTotalText = computed(() => formatMoney(String(menuCartAmountCents.value)))

const menuCartDetailItems = computed(() =>
  menuCartItems.value.map((item) => ({
    ...item,
    amountText: formatMoney(String(item.priceCents * item.quantity)),
    priceText: formatMoney(String(item.priceCents)),
    quantityText: formatQuantity(item.quantity),
  })),
)

const getTableBillItemName = (item: ApiTableSessionItem) =>
  normalizeText(item.dishName) || normalizeText(item.dish?.name) || '未命名菜品'

const getTableBillItemUnitPrice = (item: ApiTableSessionItem) => {
  const priceCents = parseCents(item.price)
  if (priceCents !== null) return priceCents

  const quantity = Number(item.quantity ?? 0)
  if (!Number.isFinite(quantity) || quantity <= 0) return 0

  return Math.round(getItemAmountCents(item) / quantity)
}

const createTableBillItemView = (item: ApiTableSessionItem, index: number): TableBillItemView => {
  const isCancelled = isCancelledItem(item)
  const itemId = normalizeText(item.id)
  const name = getTableBillItemName(item)
  const cancelReason = normalizeText(item.cancelReason)
  const createdBy = normalizeText(item.createdByAccount?.name)
  const remark = normalizeText(item.remark)

  return {
    amountText: formatMoney(String(getItemAmountCents(item))),
    cancelReason,
    createdBy,
    id: itemId,
    isCancelled,
    key:
      itemId ||
      `${normalizeText(item.batchNo) || 'batch'}-${normalizeText(item.dishId) || name}-${index}`,
    name,
    quantityText: formatQuantity(item.quantity),
    raw: item,
    remark,
    statusText: isCancelled ? '已退菜' : '有效',
    unitPriceText: formatMoney(String(getTableBillItemUnitPrice(item))),
  }
}

const tableBillBatches = computed<TableBillBatchView[]>(() => {
  const batchMap = new Map<string, ApiTableSessionItem[]>()

  tableBillItems.value.forEach((item) => {
    const batchNo = normalizeText(item.batchNo) || '未分批次'
    const currentItems = batchMap.get(batchNo) ?? []

    currentItems.push(item)
    batchMap.set(batchNo, currentItems)
  })

  return [...batchMap.entries()].map(([batchNo, items], index) => {
    const activeItems = items.filter((item) => !isCancelledItem(item))
    const quantity = activeItems.reduce((total, item) => {
      const itemQuantity = Number(item.quantity ?? 0)

      return total + (Number.isFinite(itemQuantity) ? itemQuantity : 0)
    }, 0)
    const amountCents = activeItems.reduce((total, item) => total + getItemAmountCents(item), 0)
    const firstItem = items[0]
    const createdAt = formatBillTime(firstItem?.createdAt)
    const createdBy = normalizeText(firstItem?.createdByAccount?.name)

    return {
      amountText: formatMoney(String(amountCents)),
      items: items.map(createTableBillItemView),
      key: `${batchNo}-${index}`,
      label: batchNo === '未分批次' ? batchNo : `加菜批次 ${batchNo}`,
      meta: [createdAt, createdBy].filter(Boolean).join(' · ') || '加菜记录',
      quantityText: `${formatQuantity(quantity)}份`,
    }
  })
})

const loadTableList = async (scope: ActiveScope) => {
  const firstPage = await getApiTableV1Tables({
    'pageRequest.page': 1,
    'pageRequest.pageSize': TABLE_PROGRESS_PAGE_SIZE,
    merchantId: scope.merchantId,
    storeId: scope.storeId,
  })
  const tables = [...(firstPage.tables ?? [])]
  const total = Number(firstPage.pageReply?.total ?? tables.length)
  const pageCount = Math.ceil(total / TABLE_PROGRESS_PAGE_SIZE)

  for (let page = 2; page <= pageCount; page += 1) {
    const result = await getApiTableV1Tables({
      'pageRequest.page': page,
      'pageRequest.pageSize': TABLE_PROGRESS_PAGE_SIZE,
      merchantId: scope.merchantId,
      storeId: scope.storeId,
    })
    tables.push(...(result.tables ?? []))
  }

  return tables
}

const loadOpenTableSessions = async (scope: ActiveScope) => {
  const firstPage = await getApiOrderV1TableSessions({
    'pageRequest.page': 1,
    'pageRequest.pageSize': TABLE_PROGRESS_PAGE_SIZE,
    merchantId: scope.merchantId,
    status: 'open',
    storeId: scope.storeId,
  })
  const sessions = [...(firstPage.sessions ?? [])]
  const total = Number(firstPage.pageReply?.total ?? sessions.length)
  const pageCount = Math.ceil(total / TABLE_PROGRESS_PAGE_SIZE)

  for (let page = 2; page <= pageCount; page += 1) {
    const result = await getApiOrderV1TableSessions({
      'pageRequest.page': page,
      'pageRequest.pageSize': TABLE_PROGRESS_PAGE_SIZE,
      merchantId: scope.merchantId,
      status: 'open',
      storeId: scope.storeId,
    })
    sessions.push(...(result.sessions ?? []))
  }

  return sessions
}

const sortMenuCategories = (items: ApiDishCategory[]) =>
  [...items].sort((left, right) => {
    const leftSort = Number(left.sort)
    const rightSort = Number(right.sort)

    if (Number.isFinite(leftSort) && Number.isFinite(rightSort) && leftSort !== rightSort) {
      return leftSort - rightSort
    }

    return 0
  })

const getCategorySourceText = (category: ApiDishCategory) => {
  if (category.source === 'DISH_SOURCE_STORE') return '门店分类'
  if (category.source === 'DISH_SOURCE_MERCHANT') return '商户分类'

  const sort = Number(category.sort)
  if (Number.isFinite(sort)) return `排序 ${sort}`

  return '菜品分类'
}

const categories = computed<MenuCategoryView[]>(() =>
  dishCategories.value
    .map((category) => {
      const id = normalizeText(category.id)

      return {
        id,
        label: normalizeText(category.name) || '未命名分类',
        note: getCategorySourceText(category),
      }
    })
    .filter((category) => Boolean(category.id)),
)

const activeCategoryInfo = computed<MenuCategoryView>(
  () =>
    categories.value.find((category) => category.id === activeCategory.value) ??
    categories.value[0] ?? {
      id: '',
      label: '菜单',
      note: '',
    },
)

const getDishCategoryId = (dish: ApiDish) =>
  normalizeText(dish.categories?.find((category) => normalizeText(category.id))?.id) ||
  activeCategory.value

const getDishLabel = (dish: ApiDish) => {
  const intro = normalizeText(dish.intro)
  if (intro) return intro

  const categoryNames = (dish.categories ?? [])
    .map((category) => normalizeText(category.name))
    .filter(Boolean)
    .join(' · ')

  return categoryNames || activeCategoryInfo.value.label
}

const getDishTag = (dish: ApiDish) => {
  const productType = dish.productType === 'DISH_PRODUCT_TYPE_COMBO' ? '套餐' : ''
  const sales = Number(dish.sales)
  const salesText = Number.isFinite(sales) ? `销量 ${sales}` : ''
  const shelfText = dish.isOnShelf === false ? '已下架' : dish.isOnShelf === true ? '已上架' : ''

  return productType || salesText || shelfText || '菜品'
}

const createMenuProductView = (dish: ApiDish, index: number): MenuProductView => {
  const name = normalizeText(dish.name) || '未命名菜品'
  const dishId = normalizeText(dish.id)

  return {
    category: getDishCategoryId(dish),
    dishId,
    id: dishId || `${activeCategory.value}-${name}-${index}`,
    imageUrl: normalizeText(dish.imageUrl),
    label: getDishLabel(dish),
    name,
    priceCents: getDishPriceCents(dish),
    priceText: formatDishPrice(dish.price || dish.basePrice),
    tag: getDishTag(dish),
    unitText: normalizeText(dish.unit),
  }
}

const visibleProducts = computed(() => menuDishes.value.map(createMenuProductView))

const getMenuCartQuantity = (product: MenuProductView) =>
  product.dishId ? menuCartItemsByDishId.value[product.dishId]?.quantity ?? 0 : 0

const isMenuLoading = computed(
  () => menuCategoryLoading.value || menuProductLoading.value || (orgScopeStore.loading && !selectedScope.value),
)

const menuListError = computed(() => menuCategoryError.value || menuProductError.value)

const resetMenuProducts = () => {
  menuProductRequestId += 1
  menuDishes.value = []
  menuProductError.value = ''
  menuProductLoading.value = false
}

const resetMenu = () => {
  dishCategories.value = []
  activeCategory.value = ''
  menuCategoryError.value = ''
  resetMenuProducts()
}

const loadDishList = async (scope: ActiveScope, categoryId: string) => {
  const firstPage = await getApiDishV1Dishes({
    'pageRequest.page': 1,
    'pageRequest.pageSize': DISH_PAGE_SIZE,
    categoryId,
    merchantId: scope.merchantId,
    storeId: scope.storeId,
  })
  const dishes = [...(firstPage.dishes ?? [])]
  const total = Number(firstPage.pageReply?.total ?? dishes.length)
  const pageSize = Number(firstPage.pageReply?.pageSize ?? DISH_PAGE_SIZE)
  const pageCount = Math.ceil(total / (Number.isFinite(pageSize) && pageSize > 0 ? pageSize : DISH_PAGE_SIZE))

  for (let page = 2; page <= pageCount; page += 1) {
    const result = await getApiDishV1Dishes({
      'pageRequest.page': page,
      'pageRequest.pageSize': DISH_PAGE_SIZE,
      categoryId,
      merchantId: scope.merchantId,
      storeId: scope.storeId,
    })

    dishes.push(...(result.dishes ?? []))
  }

  return dishes
}

const loadMenuDishes = async (categoryId = activeCategory.value) => {
  const requestId = ++menuProductRequestId
  const scope = selectedScope.value
  const currentCategoryId = normalizeText(categoryId)

  menuProductError.value = ''
  menuDishes.value = []

  if (!scope || !currentCategoryId) {
    menuProductLoading.value = false
    return
  }

  menuProductLoading.value = true

  try {
    const dishes = await loadDishList(scope, currentCategoryId)

    if (requestId !== menuProductRequestId) return

    menuDishes.value = dishes.filter((dish) => dish.isOnShelf !== false)
  } catch {
    if (requestId !== menuProductRequestId) return

    menuProductError.value = '菜品加载失败，请稍后重试'
  } finally {
    if (requestId === menuProductRequestId) {
      menuProductLoading.value = false
    }
  }
}

const loadMenuCategories = async () => {
  const requestId = ++menuCategoryRequestId
  const scope = selectedScope.value

  menuCategoryError.value = ''
  resetMenuProducts()

  if (!scope) {
    resetMenu()
    menuCategoryLoading.value = false
    return
  }

  menuCategoryLoading.value = true

  try {
    const result = await getApiDishV1Categories({
      merchantId: scope.merchantId,
      storeId: scope.storeId,
    })

    if (requestId !== menuCategoryRequestId) return

    const nextCategories = sortMenuCategories(result.categories ?? [])
    const previousActiveCategory = activeCategory.value
    const nextActiveCategory =
      nextCategories.find((category) => normalizeText(category.id) === previousActiveCategory)
        ? previousActiveCategory
        : normalizeText(nextCategories[0]?.id)

    dishCategories.value = nextCategories
    activeCategory.value = nextActiveCategory

    if (!nextActiveCategory) {
      resetMenuProducts()
      return
    }

    if (previousActiveCategory === nextActiveCategory) {
      void loadMenuDishes(nextActiveCategory)
    }
  } catch {
    if (requestId !== menuCategoryRequestId) return

    dishCategories.value = []
    activeCategory.value = ''
    menuCategoryError.value = '分类加载失败，请稍后重试'
    resetMenuProducts()
  } finally {
    if (requestId === menuCategoryRequestId) {
      menuCategoryLoading.value = false
    }
  }
}

const reloadMenu = () => {
  if (menuCategoryError.value || !categories.value.length) {
    void loadMenuCategories()
    return
  }

  void loadMenuDishes()
}

const findCurrentOpenTableSession = async () => {
  const scope = selectedScope.value
  const seat = selectedSeat.value

  if (!scope || !seat) return null

  const result = await getApiOrderV1TableSessions({
    'pageRequest.page': 1,
    'pageRequest.pageSize': TABLE_PROGRESS_PAGE_SIZE,
    merchantId: scope.merchantId,
    status: 'open',
    storeId: scope.storeId,
    tableId: seat.id,
  })
  const sessions = result.sessions ?? []
  const matchedSession =
    sessions.find((session) => {
      const sessionScope = getSessionScope(session)
      const isSameScope =
        (!sessionScope.merchantId || sessionScope.merchantId === scope.merchantId) &&
        (!sessionScope.storeId || sessionScope.storeId === scope.storeId)

      return isSameScope && getSessionTableId(session) === seat.id && isOpenSession(session)
    }) ?? null

  if (matchedSession) {
    const matchedId = normalizeText(matchedSession.id)
    const otherSessions = openTableSessions.value.filter(
      (session) => normalizeText(session.id) !== matchedId,
    )

    openTableSessions.value = matchedId ? [matchedSession, ...otherSessions] : sessions
  }

  return matchedSession
}

const resetTableProgress = () => {
  openedTableSeatCount.value = 0
  openableTableSeatCount.value = 0
  openTableSessions.value = []
}

const resetTableBill = () => {
  tableBillSession.value = null
  tableBillError.value = ''
  cancellingTableItemId.value = ''
  pendingCancelTableItem.value = null
  isCheckoutSheetOpen.value = false
  checkoutPaymentMethod.value = 'cash'
  checkoutRemark.value = ''
}

const clearMenuCart = () => {
  menuCartItemsByDishId.value = {}
  isMenuCartPanelOpen.value = false
}

const selectGuestCountOption = (option: GuestCountOptionId) => {
  selectedGuestCountOption.value = option

  const matchedOption = guestCountOptions.find((item) => item.id === option)
  if (matchedOption && matchedOption.value > 0) {
    customGuestCount.value = String(matchedOption.value)
  }
}

const loadTableProgress = async () => {
  const requestId = ++tableProgressRequestId
  const scope = selectedScope.value

  tableProgressError.value = ''

  if (!scope) {
    resetTableProgress()
    tableProgressLoading.value = false
    return
  }

  tableProgressLoading.value = true

  try {
    const [tables, sessions] = await Promise.all([
      loadTableList(scope),
      loadOpenTableSessions(scope),
    ])

    if (requestId !== tableProgressRequestId) return

    const openableTableIds = new Set(
      tables
        .filter(isOpenableTable)
        .map((table) => normalizeText(table.id))
        .filter(Boolean),
    )
    const openedTableIds = new Set(sessions.map(getSessionTableId).filter(Boolean))

    openTableSessions.value = sessions
    openableTableSeatCount.value = openableTableIds.size
    openedTableSeatCount.value = [...openedTableIds].filter((tableId) =>
      openableTableIds.has(tableId),
    ).length
  } catch {
    if (requestId !== tableProgressRequestId) return

    resetTableProgress()
    tableProgressError.value = '开台进度加载失败'
  } finally {
    if (requestId === tableProgressRequestId) {
      tableProgressLoading.value = false
    }
  }
}

const loadTableBill = async () => {
  const requestId = ++tableBillRequestId

  tableBillLoading.value = true
  tableBillError.value = ''

  try {
    const session = await findCurrentOpenTableSession()

    if (requestId !== tableBillRequestId) return

    const sessionId = normalizeText(session?.id)
    if (!sessionId) {
      tableBillSession.value = null
      tableBillError.value = '未找到当前桌位的开台会话'
      return
    }

    const detail = await getApiOrderV1TableSessionsById({ id: sessionId })

    if (requestId !== tableBillRequestId) return

    tableBillSession.value = detail.session ?? null
    if (!detail.session) {
      tableBillError.value = '挂账明细为空'
    }
  } catch {
    if (requestId !== tableBillRequestId) return

    tableBillSession.value = null
    tableBillError.value = '挂账明细加载失败，请稍后重试'
  } finally {
    if (requestId === tableBillRequestId) {
      tableBillLoading.value = false
    }
  }
}

watch(
  () => [selectedScope.value?.merchantId, selectedScope.value?.storeId],
  () => {
    void loadTableProgress()
  },
  { immediate: true },
)

watch(
  selectedScopeKey,
  () => {
    void loadMenuCategories()
  },
  { immediate: true },
)

watch(activeCategory, (categoryId, previousCategoryId) => {
  if (!categoryId || categoryId === previousCategoryId) return

  void loadMenuDishes(categoryId)
})

watch(menuCartQuantity, (quantity) => {
  if (!quantity) {
    isMenuCartPanelOpen.value = false
  }
})

watch(selectedOpenSession, (session, previousSession) => {
  if (session?.id === previousSession?.id) return

  activeTableAction.value = 'add'
  clearMenuCart()
  resetTableBill()
})

const openTablePicker = () => {
  isTablePickerOpen.value = true
}

const handleTableSeatSelected = () => {
  void loadTableProgress()
}

const selectTableAction = (action: 'bill' | 'add') => {
  activeTableAction.value = action

  if (action === 'bill') {
    void loadTableBill()
  } else {
    pendingCancelTableItem.value = null
  }
}

const addMenuProductToCart = (
  product: Pick<MenuProductView, 'dishId' | 'name' | 'priceCents' | 'unitText'>,
) => {
  if (!product.dishId || isSubmittingMenuCart.value) return

  const currentItem = menuCartItemsByDishId.value[product.dishId]

  menuCartItemsByDishId.value = {
    ...menuCartItemsByDishId.value,
    [product.dishId]: {
      dishId: product.dishId,
      name: product.name,
      priceCents: product.priceCents,
      quantity: (currentItem?.quantity ?? 0) + 1,
      unitText: product.unitText,
    },
  }
}

const decreaseMenuProductInCart = (product: Pick<MenuProductView, 'dishId'>) => {
  if (!product.dishId || isSubmittingMenuCart.value) return

  const currentItem = menuCartItemsByDishId.value[product.dishId]
  if (!currentItem) return

  if (currentItem.quantity <= 1) {
    const nextItems = { ...menuCartItemsByDishId.value }
    delete nextItems[product.dishId]
    menuCartItemsByDishId.value = nextItems

    if (!Object.keys(nextItems).length) {
      isMenuCartPanelOpen.value = false
    }
    return
  }

  menuCartItemsByDishId.value = {
    ...menuCartItemsByDishId.value,
    [product.dishId]: {
      ...currentItem,
      quantity: currentItem.quantity - 1,
    },
  }
}

const toggleMenuCartPanel = () => {
  if (!menuCartQuantity.value) {
    isMenuCartPanelOpen.value = false
    return
  }

  isMenuCartPanelOpen.value = !isMenuCartPanelOpen.value
}

const submitMenuCart = async () => {
  const sessionId = normalizeText(selectedOpenSession.value?.id)
  const items = menuCartItems.value

  if (!sessionId || !items.length || isSubmittingMenuCart.value) return

  isSubmittingMenuCart.value = true

  try {
    const result = await postApiOrderV1TableSessionsItems({
      tableSessionId: sessionId,
      items: items.map((item) => ({
        dishId: item.dishId,
        quantity: item.quantity,
      })),
    })

    tableBillSession.value = result.session ?? tableBillSession.value
    message.success(`已加菜 ${formatQuantity(menuCartQuantity.value)}份`)
    clearMenuCart()
    await loadTableProgress()
    activeTableAction.value = 'bill'
    await loadTableBill()
  } catch {
    message.error('加菜失败，请稍后重试')
  } finally {
    isSubmittingMenuCart.value = false
  }
}

const openSelectedTable = async () => {
  const scope = selectedScope.value
  const seat = selectedSeat.value

  if (!scope || !seat || selectedOpenSession.value || isOpeningTable.value) return

  isOpeningTable.value = true

  try {
    await postApiOrderV1TableSessionsOpen({
      guestCount: selectedGuestCount.value,
      merchantId: scope.merchantId,
      storeId: scope.storeId,
      tableId: seat.id,
    })

    message.success(`${seat.name} 已开台 · ${guestCountText.value}`)
    await loadTableProgress()
  } catch {
    message.error('开台失败，请稍后重试')
  } finally {
    isOpeningTable.value = false
  }
}

const openCancelTableBillItemConfirm = (item: TableBillItemView) => {
  if (!item.id || item.isCancelled || cancellingTableItemId.value) return

  pendingCancelTableItem.value = item
}

const closeCancelTableBillItemConfirm = () => {
  if (cancellingTableItemId.value) return

  pendingCancelTableItem.value = null
}

const cancelTableBillItem = async () => {
  const sessionId = normalizeText(tableBillSession.value?.id)
  const item = pendingCancelTableItem.value

  if (!sessionId || !item?.id || item.isCancelled || cancellingTableItemId.value) return

  cancellingTableItemId.value = item.id

  try {
    const result = await deleteApiOrderV1TableSessionsItems({
      cancelReason: '后台退菜',
      itemId: item.id,
      tableSessionId: sessionId,
    })

    tableBillSession.value = result.session ?? tableBillSession.value
    pendingCancelTableItem.value = null
    message.success(`${item.name} 已退菜`)
    await loadTableProgress()
  } catch {
    message.error('退菜失败，请稍后重试')
  } finally {
    cancellingTableItemId.value = ''
  }
}

const openCheckoutSheet = () => {
  const sessionId = normalizeText(tableBillSession.value?.id || selectedOpenSession.value?.id)

  if (!sessionId || tableBillLoading.value || isCheckingOutTable.value) return

  pendingCancelTableItem.value = null
  checkoutPaymentMethod.value = 'cash'
  checkoutRemark.value = ''
  isCheckoutSheetOpen.value = true
}

const closeCheckoutSheet = () => {
  if (isCheckingOutTable.value) return

  isCheckoutSheetOpen.value = false
}

const selectCheckoutPaymentMethod = (method: CheckoutPaymentMethod) => {
  checkoutPaymentMethod.value = method
}

const checkoutSelectedTable = async () => {
  const sessionId = normalizeText(tableBillSession.value?.id || selectedOpenSession.value?.id)
  const remark = normalizeText(checkoutRemark.value)

  if (!sessionId || isCheckingOutTable.value) return

  isCheckingOutTable.value = true

  try {
    const result = await postApiOrderV1TableSessionsCheckout({
      paymentMethod: checkoutPaymentMethod.value,
      remark: remark || undefined,
      tableSessionId: sessionId,
    })

    tableBillSession.value = result.session ?? tableBillSession.value
    isCheckoutSheetOpen.value = false
    message.success(`${seatTitle.value} 已结算`)
    await loadTableProgress()
    activeTableAction.value = 'add'
    resetTableBill()
  } catch {
    message.error('离店结算失败，请稍后重试')
  } finally {
    isCheckingOutTable.value = false
  }
}

</script>

<template>
  <main class="tab-page menu-page" aria-label="点单">
    <header class="menu-location" aria-label="座位信息">
      <button
        class="menu-location-main"
        type="button"
        aria-haspopup="dialog"
        :aria-expanded="isTablePickerOpen"
        aria-label="查看或切换座位"
        @click="openTablePicker"
      >
        <component :is="seatIcon" class="menu-location-icon" />
        <span>{{ seatTitle }}</span>
        <ChevronRight class="menu-location-arrow" />
      </button>

      <span class="menu-distance">{{ seatSubtitle }}</span>

      <div class="menu-delivery-track" :style="tableProgressStyle" :aria-label="tableProgressText">
        <span>{{ tableProgressText }}</span>
      </div>

      <div v-if="selectedOpenSession" class="menu-table-actions" aria-label="桌位操作">
        <div class="menu-table-action-grid">
          <button
            class="menu-table-action-card"
            :class="{ 'is-active': activeTableAction === 'bill' }"
            type="button"
            :aria-pressed="activeTableAction === 'bill'"
            @click="selectTableAction('bill')"
          >
            <ReceiptText />
            <span>
              <strong>挂账明细</strong>
              <small>{{ selectedSessionBillSummary }}</small>
            </span>
          </button>

          <button
            class="menu-table-action-card"
            :class="{ 'is-active': activeTableAction === 'add' }"
            type="button"
            :aria-pressed="activeTableAction === 'add'"
            @click="selectTableAction('add')"
          >
            <CirclePlus />
            <span>
              <strong>加菜</strong>
              <small>继续选择商品</small>
            </span>
          </button>
        </div>
      </div>
    </header>

    <TableSeatPicker v-model:open="isTablePickerOpen" @selected="handleTableSeatSelected" />

    <section
      v-if="activeTableAction === 'bill' && selectedOpenSession"
      class="menu-bill-shell"
      aria-label="挂账明细"
    >
      <section class="menu-bill-summary" aria-label="当前桌位挂账汇总">
        <div>
          <span>{{ seatTitle }}</span>
          <h1>挂账明细</h1>
          <small>{{ tableBillSession?.sessionNo || selectedOpenSession.sessionNo || '当前开台' }}</small>
        </div>

        <strong>{{ tableBillSummaryText }}</strong>
      </section>

      <section class="menu-bill-list" aria-label="加菜批次">
        <div v-if="tableBillLoading" class="menu-bill-state">正在加载挂账明细</div>

        <div v-else-if="tableBillError" class="menu-bill-state is-error">
          <span>{{ tableBillError }}</span>
          <button class="menu-bill-state-button" type="button" @click="loadTableBill">
            <RefreshCw />
            <span>重新加载</span>
          </button>
        </div>

        <div v-else-if="!tableBillBatches.length" class="menu-bill-state">暂无挂账菜品</div>

        <article v-for="batch in tableBillBatches" v-else :key="batch.key" class="menu-bill-batch">
          <header class="menu-bill-batch-head">
            <div>
              <h2>{{ batch.label }}</h2>
              <span>{{ batch.meta }}</span>
            </div>
            <strong>{{ batch.quantityText }} · {{ batch.amountText }}</strong>
          </header>

          <div class="menu-bill-item-list">
            <div
              v-for="item in batch.items"
              :key="item.key"
              class="menu-bill-item"
              :class="{ 'is-cancelled': item.isCancelled }"
            >
              <div class="menu-bill-item-main">
                <strong>{{ item.name }}</strong>
                <span>
                  x{{ item.quantityText }} · 单价 {{ item.unitPriceText }}
                  <template v-if="item.remark"> · {{ item.remark }}</template>
                </span>
                <small v-if="item.isCancelled">
                  {{ item.cancelReason ? `退菜原因：${item.cancelReason}` : '已退菜' }}
                </small>
              </div>

              <div class="menu-bill-item-side">
                <strong>{{ item.amountText }}</strong>
                <button
                  class="menu-bill-cancel-button"
                  type="button"
                  :disabled="item.isCancelled || Boolean(cancellingTableItemId)"
                  @click="openCancelTableBillItemConfirm(item)"
                >
                  <RotateCcw />
                  <span>
                    {{ cancellingTableItemId === item.id ? '退菜中' : item.statusText === '已退菜' ? '已退菜' : '退菜' }}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </article>
      </section>

      <footer class="menu-bill-checkout">
        <div>
          <span>当前菜品</span>
          <strong>{{ tableBillSummaryText }}</strong>
        </div>

        <button
          class="menu-bill-checkout-button"
          type="button"
          :disabled="tableBillLoading || isCheckingOutTable || !tableBillSession"
          @click="openCheckoutSheet"
        >
          <WalletCards />
          <span>{{ tableBillCheckoutText }}</span>
        </button>
      </footer>

      <section
        v-if="isCheckoutSheetOpen"
        class="menu-checkout-overlay"
        role="dialog"
        aria-label="离店结算"
        aria-modal="true"
        @click.self="closeCheckoutSheet"
      >
        <div class="menu-checkout-sheet">
          <header class="menu-checkout-head">
            <div>
              <span>{{ seatTitle }}</span>
              <h2>离店结算</h2>
            </div>

            <button
              class="menu-checkout-close"
              type="button"
              aria-label="关闭结算弹窗"
              :disabled="isCheckingOutTable"
              @click="closeCheckoutSheet"
            >
              <X />
            </button>
          </header>

          <section class="menu-checkout-summary" aria-label="结算汇总">
            <div>
              <span>当前菜品</span>
              <strong>{{ tableBillSummaryText }}</strong>
            </div>
            <div>
              <span>待收金额</span>
              <strong>{{ formatMoney(String(tableBillActiveAmountCents)) }}</strong>
            </div>
          </section>

          <section class="menu-checkout-field" aria-label="结算方式">
            <span>结算方式</span>
            <div class="menu-checkout-method-grid">
              <button
                v-for="method in checkoutPaymentMethods"
                :key="method.id"
                class="menu-checkout-method"
                :class="{ 'is-selected': checkoutPaymentMethod === method.id }"
                type="button"
                :aria-pressed="checkoutPaymentMethod === method.id"
                :disabled="isCheckingOutTable"
                @click="selectCheckoutPaymentMethod(method.id)"
              >
                {{ method.label }}
              </button>
            </div>
          </section>

          <label class="menu-checkout-field">
            <span>备注</span>
            <textarea
              v-model="checkoutRemark"
              class="menu-checkout-remark"
              maxlength="120"
              placeholder="输入结算备注"
              rows="3"
              :disabled="isCheckingOutTable"
            ></textarea>
          </label>

          <footer class="menu-checkout-foot">
            <button
              class="menu-checkout-secondary"
              type="button"
              :disabled="isCheckingOutTable"
              @click="closeCheckoutSheet"
            >
              取消
            </button>

            <button
              class="menu-checkout-submit"
              type="button"
              :disabled="isCheckingOutTable || !tableBillSession"
              @click="checkoutSelectedTable"
            >
              <WalletCards />
              <span>{{ isCheckingOutTable ? '提交中' : '完成结算' }}</span>
            </button>
          </footer>
        </div>
      </section>

      <section
        v-if="pendingCancelTableItem"
        class="menu-cancel-confirm-overlay"
        role="dialog"
        aria-label="确认退菜"
        aria-modal="true"
        @click.self="closeCancelTableBillItemConfirm"
      >
        <div class="menu-cancel-confirm-panel">
          <header class="menu-cancel-confirm-head">
            <div>
              <span>{{ seatTitle }}</span>
              <h2>确认退菜</h2>
            </div>

            <button
              class="menu-checkout-close"
              type="button"
              aria-label="关闭退菜确认弹窗"
              :disabled="Boolean(cancellingTableItemId)"
              @click="closeCancelTableBillItemConfirm"
            >
              <X />
            </button>
          </header>

          <section class="menu-cancel-confirm-body" aria-label="退菜明细">
            <strong>{{ pendingCancelTableItem.name }}</strong>
            <span>{{ pendingCancelTableItemSummary }}</span>
          </section>

          <p class="menu-cancel-confirm-text">确认后该菜品将从当前挂账中退菜。</p>

          <footer class="menu-cancel-confirm-foot">
            <button
              class="menu-checkout-secondary"
              type="button"
              :disabled="Boolean(cancellingTableItemId)"
              @click="closeCancelTableBillItemConfirm"
            >
              取消
            </button>

            <button
              class="menu-cancel-confirm-submit"
              type="button"
              :disabled="Boolean(cancellingTableItemId)"
              @click="cancelTableBillItem"
            >
              <RotateCcw />
              <span>{{ cancellingTableItemId ? '退菜中' : '确认退菜' }}</span>
            </button>
          </footer>
        </div>
      </section>
    </section>

    <section v-else-if="selectedOpenSession" class="menu-order-shell" aria-label="商品分类与列表">
      <aside class="menu-category-rail" aria-label="饮品分类">
        <button
          v-for="category in categories"
          :key="category.id"
          class="menu-category"
          :class="{ 'is-active': category.id === activeCategory }"
          type="button"
          @click="activeCategory = category.id"
        >
          <span>{{ category.label }}</span>
          <small>{{ category.note }}</small>
        </button>
      </aside>

      <div class="menu-products-pane">
        <section class="menu-section-head">
          <h1>{{ activeCategoryInfo.label }}</h1>
        </section>

        <section v-if="isMenuLoading" class="menu-bill-state">正在加载菜单</section>

        <section v-else-if="menuListError" class="menu-bill-state is-error">
          <span>{{ menuListError }}</span>
          <button class="menu-bill-state-button" type="button" @click="reloadMenu">
            <RefreshCw />
            <span>重新加载</span>
          </button>
        </section>

        <section v-else-if="!categories.length" class="menu-bill-state">暂无菜品分类</section>

        <section v-else-if="!visibleProducts.length" class="menu-bill-state">暂无菜品</section>

        <section v-else class="menu-product-grid" aria-label="商品列表">
          <article
            v-for="product in visibleProducts"
            :key="product.id"
            class="menu-product-card"
            :class="{ 'has-cover': product.imageUrl }"
          >
            <div v-if="product.imageUrl" class="menu-product-cover">
              <img :src="product.imageUrl" :alt="product.name" loading="lazy" />
            </div>

            <div class="menu-product-info">
              <h2>{{ product.name }}</h2>
              <p>{{ product.label }}</p>
              <span>{{ product.tag }}</span>
            </div>

            <div class="menu-product-foot">
              <div class="menu-product-price">
                <strong>￥{{ product.priceText }}</strong>
                <small v-if="product.unitText">/{{ product.unitText }}</small>
              </div>
              <div class="menu-product-stepper" :class="{ 'is-active': getMenuCartQuantity(product) }">
                <button
                  v-if="getMenuCartQuantity(product)"
                  class="menu-step-button"
                  type="button"
                  :aria-label="`减少${product.name}`"
                  :disabled="isSubmittingMenuCart"
                  @click="decreaseMenuProductInCart(product)"
                >
                  <Minus />
                </button>

                <span v-if="getMenuCartQuantity(product)" class="menu-step-count">
                  {{ formatQuantity(getMenuCartQuantity(product)) }}
                </span>

                <button
                  class="menu-step-button is-add"
                  type="button"
                  :aria-label="`添加${product.name}`"
                  :disabled="isSubmittingMenuCart || !product.dishId"
                  @click="addMenuProductToCart(product)"
                >
                  <PlusCircleOutlined />
                </button>
              </div>
            </div>
          </article>
        </section>
      </div>

      <section
        v-if="isMenuCartPanelOpen"
        class="menu-cart-panel"
        aria-label="购物车菜品详情"
      >
        <header class="menu-cart-panel-head">
          <strong>已选菜品</strong>
          <button type="button" @click="clearMenuCart">清空</button>
        </header>

        <div class="menu-cart-list">
          <article v-for="item in menuCartDetailItems" :key="item.dishId" class="menu-cart-item">
            <div class="menu-cart-item-main">
              <strong>{{ item.name }}</strong>
              <span>
                {{ item.priceText }}
                <template v-if="item.unitText">/{{ item.unitText }}</template>
              </span>
            </div>

            <div class="menu-cart-item-side">
              <strong>{{ item.amountText }}</strong>
              <div class="menu-cart-item-stepper">
                <button
                  type="button"
                  :aria-label="`减少${item.name}`"
                  :disabled="isSubmittingMenuCart"
                  @click="decreaseMenuProductInCart(item)"
                >
                  <Minus />
                </button>
                <span>{{ item.quantityText }}</span>
                <button
                  type="button"
                  :aria-label="`添加${item.name}`"
                  :disabled="isSubmittingMenuCart"
                  @click="addMenuProductToCart(item)"
                >
                  <Plus />
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <footer class="menu-cart-bar" aria-label="购物车">
        <div class="menu-cart-summary">
          <button
            class="menu-cart-icon"
            type="button"
            :aria-expanded="isMenuCartPanelOpen"
            aria-label="查看购物车"
            :disabled="!menuCartQuantity"
            @click="toggleMenuCartPanel"
          >
            <ShoppingCart />
            <small v-if="menuCartQuantity">{{ formatQuantity(menuCartQuantity) }}</small>
          </button>
          <div>
            <strong>{{ menuCartSummaryText }}</strong>
            <small>{{ menuCartTotalText }}</small>
          </div>
        </div>

        <button
          class="menu-cart-submit"
          type="button"
          :disabled="!menuCartQuantity || isSubmittingMenuCart"
          @click="submitMenuCart"
        >
          <Check />
          <span>{{ isSubmittingMenuCart ? '提交中' : '确认加菜' }}</span>
        </button>
      </footer>
    </section>

    <section v-else-if="selectedSeat" class="menu-open-shell" aria-label="开台人数">
      <section class="menu-open-card">
        <header class="menu-open-head">
          <span>{{ seatTitle }}</span>
          <h1>选择人数</h1>
          <small>{{ selectedScope?.storeName || '当前门店' }}</small>
        </header>

        <div class="menu-guest-grid" aria-label="就餐人数">
          <button
            v-for="option in guestCountOptions"
            :key="option.id"
            class="menu-guest-card"
            :class="{ 'is-active': selectedGuestCountOption === option.id }"
            type="button"
            :aria-pressed="selectedGuestCountOption === option.id"
            @click="selectGuestCountOption(option.id)"
          >
            <strong>{{ option.label }}</strong>
            <span v-if="option.id === 'custom'">{{ guestCountText }}</span>
            <span v-else>就餐人数</span>
          </button>
        </div>

        <label v-if="selectedGuestCountOption === 'custom'" class="menu-custom-guest">
          <span>自定义人数</span>
          <input
            v-model="customGuestCount"
            inputmode="numeric"
            min="1"
            pattern="[0-9]*"
            type="number"
          />
        </label>

        <button
          class="menu-open-table-button menu-open-table-button-main"
          type="button"
          :disabled="tableProgressLoading || isOpeningTable || Boolean(tableProgressError) || !selectedScope"
          @click="openSelectedTable"
        >
          <DoorOpen />
          <span>{{ isOpeningTable ? '开台中' : `点击开台 · ${guestCountText}` }}</span>
        </button>
      </section>
    </section>

    <section v-else class="menu-open-shell" aria-label="选择桌位">
      <section class="menu-open-card">
        <header class="menu-open-head">
          <span>{{ selectedScope?.storeName || '当前门店' }}</span>
          <h1>请选择桌位</h1>
          <small>选择桌位后开台点单</small>
        </header>

        <button
          class="menu-open-table-button menu-open-table-button-main"
          type="button"
          @click="openTablePicker"
        >
          <Table2 />
          <span>选择桌位</span>
        </button>
      </section>
    </section>
  </main>
</template>
