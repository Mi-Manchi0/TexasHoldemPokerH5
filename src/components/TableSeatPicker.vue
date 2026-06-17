<script setup lang="ts">
import { CheckCircleFilled, CloseOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { computed, ref, watch } from 'vue'
import {
  getApiOrderV1TableSessions,
  getApiTableV1Tables,
  type GetApiOrderV1TableSessionsResponse,
  type GetApiTableV1TablesResponse,
} from '@/services/basis/basis'
import { useOrgScopeStore } from '@/stores/orgScope'
import { useTableSeatStore, type TableSeatSelection } from '@/stores/tableSeat'

const props = defineProps<{
  open: boolean
}>()

const emit = defineEmits<{
  (event: 'update:open', open: boolean): void
  (event: 'selected', selection: TableSeatSelection): void
}>()

type SeatStatus = 'available' | 'busy' | 'reserved'
type ApiTable = NonNullable<GetApiTableV1TablesResponse['tables']>[number]
type ApiTableSession = NonNullable<GetApiOrderV1TableSessionsResponse['sessions']>[number]

interface TableSeat {
  id: string
  name: string
  note: string
  status: SeatStatus
  statusText: string
}

interface TableGroup {
  id: string
  label: string
  name: string
  seats: TableSeat[]
  sort: number
}

type ActiveScope = {
  merchantId: string
  storeId: string
}

const TABLE_PAGE_SIZE = 200
const SESSION_PAGE_SIZE = 200

const orgScopeStore = useOrgScopeStore()
const tableSeatStore = useTableSeatStore()
const selectedScope = computed(() => orgScopeStore.selected)
const selectedSeatId = ref('')
const tableGroups = ref<TableGroup[]>([])
const tablePickerError = ref('')
const tablePickerLoading = ref(false)

let tablePickerRequestId = 0

const selectedSeat = computed(() => {
  for (const group of tableGroups.value) {
    const seat = group.seats.find((item) => item.id === selectedSeatId.value)

    if (seat?.status === 'available') return seat
  }

  return null
})

const totalTableSeats = computed(() =>
  tableGroups.value.reduce((total, group) => total + group.seats.length, 0),
)

const totalAvailableSeats = computed(() =>
  tableGroups.value.reduce(
    (total, group) => total + group.seats.filter((seat) => seat.status === 'available').length,
    0,
  ),
)

const tablePickerFootText = computed(() => {
  if (tablePickerLoading.value) return '正在同步桌位状态'
  if (selectedSeat.value) return `${selectedSeat.value.name} 桌位`
  if (tablePickerError.value) return tablePickerError.value

  return '请选择一个可开桌位'
})

const normalizeText = (value: unknown) => {
  if (value === undefined || value === null) return ''

  return String(value).trim()
}

const getSortValue = (value: unknown) => {
  const sort = Number(value)

  return Number.isFinite(sort) ? sort : Number.MAX_SAFE_INTEGER
}

const compareText = (first: string, second: string) =>
  first.localeCompare(second, 'zh-Hans-CN', { numeric: true, sensitivity: 'base' })

const formatOpenedAt = (value?: string) => {
  if (!value) return ''

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return ''

  return date.toLocaleTimeString('zh-CN', {
    hour: '2-digit',
    hour12: false,
    minute: '2-digit',
  })
}

const getOpenSessionMap = (sessions: ApiTableSession[]) =>
  sessions.reduce((sessionMap, session) => {
    const status = normalizeText(session.status).toLowerCase()
    const tableId = normalizeText(session.tableId || session.table?.id)

    if (tableId && (!status || status === 'open')) {
      sessionMap.set(tableId, session)
    }

    return sessionMap
  }, new Map<string, ApiTableSession>())

const getTableStatus = (
  table: ApiTable,
  openSession?: ApiTableSession,
): Pick<TableSeat, 'status' | 'statusText'> => {
  const occupancyStatus = normalizeText(table.occupancyStatus).toLowerCase()
  const tableStatus = table.status === undefined ? 1 : Number(table.status)

  if (openSession) {
    return {
      status: 'busy',
      statusText: '已开台',
    }
  }

  if (occupancyStatus === 'occupied') {
    return {
      status: 'busy',
      statusText: '使用中',
    }
  }

  if (table.billingEnabled === false) {
    return {
      status: 'reserved',
      statusText: '不可开',
    }
  }

  if (tableStatus !== 1) {
    return {
      status: 'reserved',
      statusText: '已停用',
    }
  }

  return {
    status: 'available',
    statusText: '可开台',
  }
}

const getTableNote = (table: ApiTable, openSession?: ApiTableSession) => {
  if (openSession) {
    const guestCount = Number(openSession.guestCount ?? 0)
    const openedAt = formatOpenedAt(openSession.openedAt)
    const parts = [
      guestCount > 0 ? `${guestCount}人` : '',
      openedAt ? `${openedAt}开台` : '',
    ].filter(Boolean)

    return parts.join(' · ') || '开台中'
  }

  if (normalizeText(table.occupancyStatus).toLowerCase() === 'occupied') {
    return '桌位已占用'
  }

  if (table.billingEnabled === false) {
    return '不支持后台开单'
  }

  if (table.status !== undefined && Number(table.status) !== 1) {
    return '桌位已停用'
  }

  return (
    normalizeText(table.description) ||
    normalizeText(table.type?.name) ||
    normalizeText(table.group?.name) ||
    '可后台开单'
  )
}

const createTableGroups = (tables: ApiTable[], sessions: ApiTableSession[]) => {
  const openSessionMap = getOpenSessionMap(sessions)
  const groupMap = new Map<string, TableGroup>()

  tables.forEach((table) => {
    const tableId = normalizeText(table.id)
    if (!tableId) return

    const groupName = normalizeText(table.group?.name) || '未分组桌台'
    const groupId = normalizeText(table.group?.id) || `ungrouped:${groupName}`
    const tableTypeName = normalizeText(table.type?.name)
    const currentGroup =
      groupMap.get(groupId) ??
      ({
        id: groupId,
        label: tableTypeName ? tableTypeName.toUpperCase() : 'TABLE GROUP',
        name: groupName,
        seats: [],
        sort: getSortValue(table.group?.sort),
      } satisfies TableGroup)
    const openSession = openSessionMap.get(tableId)
    const status = getTableStatus(table, openSession)

    currentGroup.seats.push({
      id: tableId,
      name: normalizeText(table.name) || `桌位 ${tableId}`,
      note: getTableNote(table, openSession),
      ...status,
    })

    groupMap.set(groupId, currentGroup)
  })

  return [...groupMap.values()]
    .map((group) => ({
      ...group,
      seats: [...group.seats].sort((first, second) => compareText(first.name, second.name)),
    }))
    .sort(
      (first, second) =>
        first.sort - second.sort ||
        compareText(first.name, second.name) ||
        compareText(first.id, second.id),
    )
}

const loadTableList = async (scope: ActiveScope) => {
  const firstPage = await getApiTableV1Tables({
    'pageRequest.page': 1,
    'pageRequest.pageSize': TABLE_PAGE_SIZE,
    merchantId: scope.merchantId,
    storeId: scope.storeId,
  })
  const tables = [...(firstPage.tables ?? [])]
  const total = Number(firstPage.pageReply?.total ?? tables.length)
  const pageCount = Math.ceil(total / TABLE_PAGE_SIZE)

  for (let page = 2; page <= pageCount; page += 1) {
    const result = await getApiTableV1Tables({
      'pageRequest.page': page,
      'pageRequest.pageSize': TABLE_PAGE_SIZE,
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
    'pageRequest.pageSize': SESSION_PAGE_SIZE,
    merchantId: scope.merchantId,
    status: 'open',
    storeId: scope.storeId,
  })
  const sessions = [...(firstPage.sessions ?? [])]
  const total = Number(firstPage.pageReply?.total ?? sessions.length)
  const pageCount = Math.ceil(total / SESSION_PAGE_SIZE)

  for (let page = 2; page <= pageCount; page += 1) {
    const result = await getApiOrderV1TableSessions({
      'pageRequest.page': page,
      'pageRequest.pageSize': SESSION_PAGE_SIZE,
      merchantId: scope.merchantId,
      status: 'open',
      storeId: scope.storeId,
    })
    sessions.push(...(result.sessions ?? []))
  }

  return sessions
}

const clearUnavailableSelection = () => {
  if (!selectedSeatId.value) return

  const hasAvailableSeat = tableGroups.value.some((group) =>
    group.seats.some((seat) => seat.id === selectedSeatId.value && seat.status === 'available'),
  )

  if (!hasAvailableSeat) {
    selectedSeatId.value = ''
  }
}

const loadTablePickerData = async () => {
  const requestId = ++tablePickerRequestId

  tablePickerLoading.value = true
  tablePickerError.value = ''
  tableGroups.value = []
  selectedSeatId.value = ''

  try {
    if (!selectedScope.value && !orgScopeStore.loaded && !orgScopeStore.loading) {
      await orgScopeStore.loadMyScopes()
    }

    const scope = selectedScope.value
    if (!scope) {
      tablePickerError.value = '请先选择组织'
      return
    }

    const [tables, sessions] = await Promise.all([
      loadTableList(scope),
      loadOpenTableSessions(scope),
    ])

    if (requestId !== tablePickerRequestId) return

    tableGroups.value = createTableGroups(tables, sessions)
    if (tableSeatStore.isSelectedSeatForScope(scope)) {
      selectedSeatId.value = tableSeatStore.selected?.id ?? ''
    }
    clearUnavailableSelection()
  } catch {
    if (requestId !== tablePickerRequestId) return

    tableGroups.value = []
    tablePickerError.value = '桌位数据加载失败，请稍后重试'
  } finally {
    if (requestId === tablePickerRequestId) {
      tablePickerLoading.value = false
    }
  }
}

const closeTablePicker = () => {
  emit('update:open', false)
}

const selectSeat = (seat: TableSeat) => {
  if (seat.status !== 'available') return

  selectedSeatId.value = seat.id
}

const confirmTableSeat = () => {
  const scope = selectedScope.value
  const seat = selectedSeat.value

  if (!seat || !scope) return

  tableSeatStore.setSelectedSeat({
    id: seat.id,
    merchantId: scope.merchantId,
    merchantName: scope.merchantName,
    name: seat.name,
    note: seat.note,
    storeId: scope.storeId,
    storeName: scope.storeName,
  })

  if (tableSeatStore.selected) {
    emit('selected', tableSeatStore.selected)
  }

  message.success(`${seat.name} 桌位已选择`)
  closeTablePicker()
}

watch(
  () => props.open,
  (open) => {
    if (open) {
      void loadTablePickerData()
    }
  },
  { immediate: true },
)

watch(
  () => [selectedScope.value?.merchantId, selectedScope.value?.storeId],
  ([merchantId, storeId], [previousMerchantId, previousStoreId]) => {
    selectedSeatId.value = ''
    tableGroups.value = []
    tablePickerError.value = ''

    if (
      props.open &&
      merchantId &&
      storeId &&
      (merchantId !== previousMerchantId || storeId !== previousStoreId)
    ) {
      void loadTablePickerData()
    }
  },
)
</script>

<template>
  <section
    v-if="props.open"
    class="table-picker-overlay"
    role="dialog"
    aria-modal="true"
    aria-label="选择桌位"
    @click.self="closeTablePicker"
  >
    <div class="table-picker-sheet">
      <header class="table-picker-head">
        <div>
          <p>OPEN TABLE</p>
          <h2>选择桌位</h2>
        </div>

        <button class="table-picker-close" type="button" aria-label="关闭" @click="closeTablePicker">
          <CloseOutlined />
        </button>
      </header>

      <div class="table-picker-stats" aria-label="桌台概览">
        <span>
          <strong>{{ tableGroups.length }}</strong>
          <small>桌台</small>
        </span>
        <span>
          <strong>{{ totalAvailableSeats }}</strong>
          <small>可开</small>
        </span>
      </div>

      <div class="table-group-list">
        <p v-if="tablePickerLoading" class="scope-empty-text">正在加载桌位</p>
        <p v-else-if="tablePickerError" class="scope-empty-text">{{ tablePickerError }}</p>
        <p v-else-if="!totalTableSeats" class="scope-empty-text">暂无可开台桌位</p>

        <section v-for="group in tableGroups" v-else :key="group.id" class="table-group">
          <header class="table-group-head">
            <div>
              <span>{{ group.label }}</span>
              <h3>{{ group.name }}</h3>
            </div>
            <small>{{ group.seats.length }} 个桌位</small>
          </header>

          <div class="table-seat-grid">
            <button
              v-for="seat in group.seats"
              :key="seat.id"
              class="table-seat-card"
              :class="[`is-${seat.status}`, { 'is-selected': selectedSeatId === seat.id }]"
              type="button"
              :disabled="seat.status !== 'available' || tablePickerLoading"
              :aria-pressed="selectedSeatId === seat.id"
              @click="selectSeat(seat)"
            >
              <span class="table-seat-status">{{ seat.statusText }}</span>
              <strong>{{ seat.name }}</strong>
              <small>{{ seat.note }}</small>
              <CheckCircleFilled v-if="selectedSeatId === seat.id" class="table-seat-check" />
            </button>
          </div>
        </section>
      </div>

      <footer class="table-picker-foot">
        <span>{{ tablePickerFootText }}</span>
        <button
          class="table-picker-confirm"
          type="button"
          :disabled="!selectedSeat || tablePickerLoading"
          @click="confirmTableSeat"
        >
          确认开台
        </button>
      </footer>
    </div>
  </section>
</template>
