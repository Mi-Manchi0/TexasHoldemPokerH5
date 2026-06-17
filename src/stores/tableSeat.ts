import { defineStore } from 'pinia'

export interface TableSeatSelection {
  id: string
  merchantId: string
  merchantName: string
  name: string
  note: string
  selectedAt: string
  storeId: string
  storeName: string
}

interface TableSeatState {
  selected: TableSeatSelection | null
}

interface ScopeLike {
  merchantId?: string
  storeId?: string
}

const selectionStorageKey = 'TABLE_SEAT_SELECTION'

const normalizeText = (value: unknown) => {
  if (value === undefined || value === null) return ''

  return String(value).trim()
}

const normalizeSelection = (
  selection: Partial<TableSeatSelection> | null | undefined,
): TableSeatSelection | null => {
  const id = normalizeText(selection?.id)
  const merchantId = normalizeText(selection?.merchantId)
  const name = normalizeText(selection?.name)
  const storeId = normalizeText(selection?.storeId)

  if (!id || !merchantId || !name || !storeId) return null

  return {
    id,
    merchantId,
    merchantName: normalizeText(selection?.merchantName),
    name,
    note: normalizeText(selection?.note),
    selectedAt: normalizeText(selection?.selectedAt) || new Date().toISOString(),
    storeId,
    storeName: normalizeText(selection?.storeName),
  }
}

const readCachedSelection = () => {
  try {
    const value = globalThis.localStorage?.getItem(selectionStorageKey)
    if (!value) return null

    return normalizeSelection(JSON.parse(value) as Partial<TableSeatSelection> | null)
  } catch {
    return null
  }
}

const writeCachedSelection = (selection: TableSeatSelection) => {
  globalThis.localStorage?.setItem(selectionStorageKey, JSON.stringify(selection))
}

const clearCachedSelection = () => {
  try {
    globalThis.localStorage?.removeItem(selectionStorageKey)
  } catch {
    // Ignore storage cleanup failures.
  }
}

export const useTableSeatStore = defineStore('tableSeat', {
  state: (): TableSeatState => ({
    selected: readCachedSelection(),
  }),
  actions: {
    clearSelectedSeat() {
      this.selected = null
      clearCachedSelection()
    },
    isSelectedSeatForScope(scope?: ScopeLike | null) {
      const merchantId = normalizeText(scope?.merchantId)
      const storeId = normalizeText(scope?.storeId)

      return Boolean(
        this.selected &&
          merchantId &&
          storeId &&
          this.selected.merchantId === merchantId &&
          this.selected.storeId === storeId,
      )
    },
    setSelectedSeat(selection: Partial<TableSeatSelection>) {
      const normalizedSelection = normalizeSelection({
        ...selection,
        selectedAt: selection.selectedAt || new Date().toISOString(),
      })

      if (!normalizedSelection) {
        this.clearSelectedSeat()
        return
      }

      this.selected = normalizedSelection
      writeCachedSelection(normalizedSelection)
    },
  },
})
