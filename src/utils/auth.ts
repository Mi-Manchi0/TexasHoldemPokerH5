import type { PostApiAuthV1LoginResponse } from '@/services/basis/basis'
import { getHttpConfig } from '@/utils/http'

export const userInfoStorageKey = 'USER_INFO'
export const lastLoginCredentialsStorageKey = 'LAST_LOGIN_CREDENTIALS'

export interface LastLoginCredentials {
  account: string
  password: string
}

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

export const saveAuthSession = (loginResult: PostApiAuthV1LoginResponse) => {
  const token = loginResult.token?.trim()

  if (!token) return false

  const storage = globalThis.localStorage
  storage.setItem(getHttpConfig().tokenStorageKey, token)

  if (loginResult.userInfo) {
    storage.setItem(userInfoStorageKey, JSON.stringify(loginResult.userInfo))
  } else {
    storage.removeItem(userInfoStorageKey)
  }

  return true
}

export const clearAuthSession = () => {
  try {
    const storage = globalThis.localStorage
    storage.removeItem(getHttpConfig().tokenStorageKey)
    storage.removeItem(userInfoStorageKey)
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
