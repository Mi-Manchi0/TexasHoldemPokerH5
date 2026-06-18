import {
  getApiAuthV1Userinfo,
  type GetApiAuthV1UserinfoResponse,
  type PostApiAuthV1LoginResponse,
} from '@/services/basis/basis'
import { getHttpConfig } from '@/utils/http'

export const userInfoStorageKey = 'USER_INFO'
export const lastLoginCredentialsStorageKey = 'LAST_LOGIN_CREDENTIALS'

export interface LastLoginCredentials {
  account: string
  password: string
}

export type AuthUserInfo =
  | GetApiAuthV1UserinfoResponse
  | NonNullable<PostApiAuthV1LoginResponse['userInfo']>

export const getToken = () => {
  try {
    return globalThis.localStorage?.getItem(getHttpConfig().tokenStorageKey) || ''
  } catch {
    return ''
  }
}

export const getUserInfo = () => {
  try {
    const userInfoText = globalThis.localStorage?.getItem(userInfoStorageKey)
    return userInfoText ? JSON.parse(userInfoText) : null
  } catch {
    return null
  }
}

export const saveUserInfo = (userInfo?: AuthUserInfo | null) => {
  const storage = globalThis.localStorage

  if (userInfo) {
    storage.setItem(userInfoStorageKey, JSON.stringify(userInfo))
  } else {
    storage.removeItem(userInfoStorageKey)
  }
}

export const refreshUserInfo = async () => {
  const userInfo = await getApiAuthV1Userinfo(undefined, {
    errorMessageMode: 'none',
    withTenant: false,
  })

  saveUserInfo(userInfo)
  return userInfo
}

export const saveAuthSession = (loginResult: PostApiAuthV1LoginResponse) => {
  const token = loginResult.token?.trim()

  if (!token) return false

  const storage = globalThis.localStorage
  storage.setItem(getHttpConfig().tokenStorageKey, token)
  saveUserInfo(loginResult.userInfo)

  return true
}

export const clearAuthSession = () => {
  try {
    const storage = globalThis.localStorage
    const config = getHttpConfig()

    storage.removeItem(getHttpConfig().tokenStorageKey)
    storage.removeItem(userInfoStorageKey)
    storage.removeItem(config.merchantStorageKey)
    storage.removeItem(config.storeStorageKey)
  } catch {
    // Ignore storage cleanup failures.
  }
}

export const getLastLoginCredentials = (): LastLoginCredentials => {
  try {
    const credentialsText = globalThis.localStorage?.getItem(lastLoginCredentialsStorageKey)
    const credentials = credentialsText ? JSON.parse(credentialsText) : null

    return {
      account: typeof credentials?.account === 'string' ? credentials.account : '',
      password: typeof credentials?.password === 'string' ? credentials.password : '',
    }
  } catch {
    return {
      account: '',
      password: '',
    }
  }
}

export const saveLastLoginCredentials = (credentials: LastLoginCredentials) => {
  const normalizedCredentials: LastLoginCredentials = {
    account: credentials.account.trim(),
    password: credentials.password,
  }

  globalThis.localStorage.setItem(
    lastLoginCredentialsStorageKey,
    JSON.stringify(normalizedCredentials),
  )
}
