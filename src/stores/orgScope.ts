import { defineStore } from 'pinia'
import {
  getApiStaffV1MyScopes,
  type GetApiStaffV1MyScopesResponse,
} from '@/services/basis/basis'
import { getLastLoginCredentials, getUserInfo } from '@/utils/auth'
import { getHttpConfig } from '@/utils/http'

type StaffScopeMerchant = NonNullable<GetApiStaffV1MyScopesResponse['scopes']>[number]
type StaffScopeStore = NonNullable<StaffScopeMerchant['stores']>[number]

export interface OrgScopeSelection {
  merchantId: string
  merchantLogo: string
  merchantName: string
  storeId: string
  storeName: string
}

interface OrgScopeState {
  accountKey: string
  errorMessage: string
  loaded: boolean
  loading: boolean
  scopes: StaffScopeMerchant[]
  selected: OrgScopeSelection | null
}

const selectionStoragePrefix = 'ORG_SCOPE_SELECTION:'

const normalizeText = (value: unknown) => {
  if (value === undefined || value === null) return ''

  return String(value).trim()
}

const getAccountKey = (accountHint?: string) => {
  const userInfo = getUserInfo()
  const userId = normalizeText(userInfo?.id)
  const userPhone = normalizeText(userInfo?.phone)
  const hint = normalizeText(accountHint)
  const lastLoginAccount = normalizeText(getLastLoginCredentials().account)

  if (userId) return `user:${userId}`
  if (userPhone) return `phone:${userPhone}`
  if (hint) return `account:${hint}`
  if (lastLoginAccount) return `account:${lastLoginAccount}`

  return ''
}

const getSelectionStorageKey = (accountKey: string) =>
  `${selectionStoragePrefix}${accountKey}`

const readCachedSelection = (accountKey: string) => {
  if (!accountKey) return null

  try {
    const value = globalThis.localStorage?.getItem(getSelectionStorageKey(accountKey))
    if (!value) return null

    const selection = JSON.parse(value) as Partial<OrgScopeSelection> | null
    const merchantId = normalizeText(selection?.merchantId)
    const storeId = normalizeText(selection?.storeId)

    if (!merchantId || !storeId) return null

    return {
      merchantId,
      storeId,
    }
  } catch {
    return null
  }
}

const createSelection = (
  scope: StaffScopeMerchant,
  store: StaffScopeStore,
): OrgScopeSelection | null => {
  const merchantId = normalizeText(scope.merchant?.id)
  const storeId = normalizeText(store.id)

  if (!merchantId || !storeId) return null

  return {
    merchantId,
    merchantLogo: normalizeText(scope.merchant?.logo),
    merchantName: normalizeText(scope.merchant?.name) || '未命名商户',
    storeId,
    storeName: normalizeText(store.name) || '未命名门店',
  }
}

const getSelectionsFromScopes = (scopes: StaffScopeMerchant[]) =>
  scopes.flatMap((scope) =>
    (scope.stores ?? [])
      .map((store) => createSelection(scope, store))
      .filter((selection): selection is OrgScopeSelection => Boolean(selection)),
  )

const writeActiveSelection = (selection: OrgScopeSelection) => {
  const config = getHttpConfig()
  const storage = globalThis.localStorage

  storage.setItem(config.merchantStorageKey, selection.merchantId)
  storage.setItem(config.storeStorageKey, selection.storeId)
}

const clearActiveSelectionStorage = () => {
  try {
    const config = getHttpConfig()
    const storage = globalThis.localStorage

    storage.removeItem(config.merchantStorageKey)
    storage.removeItem(config.storeStorageKey)
  } catch {
    // Ignore storage cleanup failures.
  }
}

const cacheAccountSelection = (accountKey: string, selection: OrgScopeSelection) => {
  if (!accountKey) return

  globalThis.localStorage.setItem(
    getSelectionStorageKey(accountKey),
    JSON.stringify(selection),
  )
}

export const useOrgScopeStore = defineStore('orgScope', {
  state: (): OrgScopeState => ({
    accountKey: '',
    errorMessage: '',
    loaded: false,
    loading: false,
    scopes: [],
    selected: null,
  }),
  getters: {
    availableSelections: (state) => getSelectionsFromScopes(state.scopes),
    storeCount: (state) =>
      state.scopes.reduce((total, scope) => total + (scope.stores?.length ?? 0), 0),
  },
  actions: {
    applySelection(selection: OrgScopeSelection) {
      this.selected = selection
      writeActiveSelection(selection)
      cacheAccountSelection(this.accountKey, selection)
    },
    clearActiveSelection() {
      this.selected = null
      clearActiveSelectionStorage()
    },
    findSelection(merchantId: string, storeId: string) {
      return this.availableSelections.find(
        (selection) =>
          selection.merchantId === merchantId && selection.storeId === storeId,
      )
    },
    async loadMyScopes(accountHint?: string) {
      const accountKey = getAccountKey(accountHint)

      this.accountKey = accountKey
      this.loading = true
      this.errorMessage = ''

      try {
        const result = await getApiStaffV1MyScopes(undefined, {
          headers: {
            'x-skip-store-scope': '1',
          },
          withTenant: false,
        })
        const scopes = result.scopes ?? []
        const cachedSelection = readCachedSelection(accountKey)

        this.scopes = scopes

        const nextSelection =
          (cachedSelection
            ? this.findSelection(cachedSelection.merchantId, cachedSelection.storeId)
            : null) ?? this.availableSelections[0] ?? null

        if (nextSelection) {
          this.applySelection(nextSelection)
        } else {
          this.clearActiveSelection()
        }

        this.loaded = true
        return nextSelection
      } catch (error) {
        this.errorMessage = '组织范围加载失败'
        throw error
      } finally {
        this.loading = false
      }
    },
    resetSession() {
      this.accountKey = ''
      this.errorMessage = ''
      this.loaded = false
      this.loading = false
      this.scopes = []
      this.clearActiveSelection()
    },
    selectScope(merchantId: string, storeId: string) {
      const selection = this.findSelection(merchantId, storeId)

      if (!selection) return null

      this.applySelection(selection)
      return selection
    },
  },
})
