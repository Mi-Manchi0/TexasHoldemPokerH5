import axios, {
  AxiosHeaders,
  type AxiosHeaderValue,
  type AxiosInstance,
  type AxiosRequestConfig,
  type AxiosResponse,
  type InternalAxiosRequestConfig,
} from 'axios'
import { message, Modal } from 'ant-design-vue'
import qs from 'qs'

export type ErrorMessageMode = 'none' | 'modal' | 'message' | undefined

export interface RetryRequest {
  isOpenRetry: boolean
  count: number
  waitTime: number
}

export interface UploadFileParams {
  file: Blob | string
  name?: string
  filename?: string
  data?: Record<string, unknown>
}

export interface HttpRequestOptions {
  joinParamsToUrl?: boolean
  formatDate?: boolean
  isTransformResponse?: boolean
  isReturnNativeResponse?: boolean
  joinPrefix?: boolean
  apiUrl?: string | (() => string)
  urlPrefix?: string
  errorMessageMode?: ErrorMessageMode
  joinTime?: boolean
  ignoreCancelToken?: boolean
  withToken?: boolean
  retryRequest?: RetryRequest
  messageKey?: string
  responseDataKey?: string | string[]
  headers?: AxiosRequestConfig['headers']
  onServerTimeChange?: (time: number) => void
  withTenant?: boolean
}

export interface AxiosTransform {
  beforeRequestHook?: (
    config: AxiosRequestConfig,
    options: HttpRequestOptions,
  ) => AxiosRequestConfig
  transformResponseHook?: (
    res: AxiosResponse<unknown>,
    options: HttpRequestOptions,
  ) => unknown
  requestCatchHook?: (error: Error, options: HttpRequestOptions) => Promise<never>
  requestInterceptors?: (
    config: InternalAxiosRequestConfig,
    options: CreateAxiosOptions,
  ) => InternalAxiosRequestConfig
  responseInterceptors?: (res: AxiosResponse<unknown>) => AxiosResponse<unknown>
  requestInterceptorsCatch?: (error: Error) => Promise<never>
  responseInterceptorsCatch?: (error: Error) => Promise<never>
}

export interface CreateAxiosOptions extends AxiosRequestConfig {
  authenticationScheme?: string
  transform?: AxiosTransform
  requestOptions?: HttpRequestOptions
}

interface RuntimeHttpConfig {
  apiUrl?: string | (() => string)
  merchantStorageKey: string
  storeStorageKey: string
  tokenStorageKey: string
  tokenExpiredCodes: Array<number | string>
  userInfoStorageKey: string
  showMessageError: (content: string) => void
  showModalError: (arg: { title: string; content: string }) => void
  onTokenExpired: (code?: number | string, detail?: unknown) => void
  onServerTimeChange?: (serverTime: number) => void
}

type AxiosConfigWithOptions = InternalAxiosRequestConfig & {
  requestOptions?: HttpRequestOptions
}

type ResponseRecord = Record<string, unknown>

const defaultRequestOptions: HttpRequestOptions = {
  errorMessageMode: 'message',
  isReturnNativeResponse: false,
  isTransformResponse: true,
  joinPrefix: true,
  messageKey: 'message',
  responseDataKey: 'data',
  withToken: true,
  withTenant: true,
}

const runtimeConfig: RuntimeHttpConfig = {
  apiUrl: () => globalThis.location?.origin ?? '',
  merchantStorageKey: 'MERCHANT_ID',
  storeStorageKey: 'STORE_ID',
  tokenStorageKey: 'TOKEN_KEY',
  tokenExpiredCodes: [401, '401', '10001000'],
  userInfoStorageKey: 'USER_INFO',
  showMessageError: (content) => {
    message.error(content)
  },
  showModalError: ({ title, content }) => {
    Modal.error({ title, content })
  },
  onTokenExpired: () => undefined,
}

export const setHttpConfig = (config: Partial<RuntimeHttpConfig>) => {
  Object.assign(runtimeConfig, config)
}

export const getHttpConfig = () => runtimeConfig

const isRecord = (value: unknown): value is ResponseRecord =>
  value !== null && typeof value === 'object' && !Array.isArray(value)

const isAbsoluteUrl = (url: string) => /^https?:\/\//i.test(url)

const trimSlashes = (value: string, side: 'left' | 'right' | 'both') => {
  if (side === 'left') return value.replace(/^\/+/, '')
  if (side === 'right') return value.replace(/\/+$/, '')
  return value.replace(/^\/+|\/+$/g, '')
}

const joinUrl = (...parts: Array<string | undefined>) => {
  const cleanParts = parts.filter(Boolean) as string[]
  if (cleanParts.length === 0) return ''

  const [first, ...rest] = cleanParts
  return [
    trimSlashes(first, 'right'),
    ...rest.map((part) => trimSlashes(part, 'both')),
  ]
    .filter(Boolean)
    .join('/')
}

const readConfigValue = <T>(value: T | (() => T) | undefined) =>
  typeof value === 'function' ? (value as () => T)() : value

const readByPath = (source: unknown, path: string) => {
  if (!isRecord(source)) return undefined

  return path.split('.').reduce<unknown>((current, key) => {
    if (!isRecord(current)) return undefined
    return current[key]
  }, source)
}

const readFirstByPath = (source: unknown, paths: string | string[] | undefined) => {
  const pathList = Array.isArray(paths) ? paths : paths ? [paths] : []

  for (const path of pathList) {
    const value = readByPath(source, path)
    if (value !== undefined) return value
  }

  return undefined
}

const mergeHeaders = (
  ...headersList: Array<AxiosRequestConfig['headers'] | undefined>
) => {
  const headers = new AxiosHeaders()

  headersList.forEach((headersItem) => {
    if (!headersItem) return

    Object.entries(headersItem as Record<string, AxiosHeaderValue>).forEach(([key, value]) => {
      if (value !== undefined) headers.set(key, value)
    })
  })

  return headers
}

const mergeRequestOptions = (
  baseOptions?: HttpRequestOptions,
  requestOptions?: HttpRequestOptions,
): HttpRequestOptions => ({
  ...defaultRequestOptions,
  ...baseOptions,
  ...requestOptions,
  headers: mergeHeaders(baseOptions?.headers, requestOptions?.headers),
})

const getToken = () => {
  try {
    return globalThis.localStorage?.getItem(runtimeConfig.tokenStorageKey)
  } catch {
    return null
  }
}

const isBlobValue = (value: unknown): value is Blob =>
  typeof Blob !== 'undefined' && value instanceof Blob

const appendFormDataValue = (
  formData: FormData,
  key: string,
  value: unknown,
) => {
  if (value === undefined || value === null) return

  if (Array.isArray(value)) {
    value.forEach((item) => appendFormDataValue(formData, key, item))
    return
  }

  if (isBlobValue(value)) {
    formData.append(key, value)
    return
  }

  formData.append(key, String(value))
}

const createUploadFormData = ({ data, file, filename, name = 'file' }: UploadFileParams) => {
  if (typeof FormData === 'undefined') {
    throw new Error('当前环境不支持 FormData')
  }

  const formData = new FormData()

  Object.entries(data ?? {}).forEach(([key, value]) => {
    appendFormDataValue(formData, key, value)
  })

  if (isBlobValue(file) && filename) {
    formData.append(name, file, filename)
  } else {
    formData.append(name, file)
  }

  return formData
}

const getStorageItem = (key: string) => {
  try {
    return globalThis.localStorage?.getItem(key)
  } catch {
    return null
  }
}

const getStorageJson = (key: string) => {
  const value = getStorageItem(key)
  if (!value) return null

  try {
    return JSON.parse(value)
  } catch {
    return null
  }
}

const normalizeContextValue = (value: unknown) => {
  if (value === undefined || value === null) return undefined

  const normalized = String(value).trim()
  return normalized ? normalized : undefined
}

const readFirstValue = (source: unknown, keys: string[]) => {
  if (!isRecord(source)) return undefined

  for (const key of keys) {
    const value = normalizeContextValue(source[key])
    if (value !== undefined) return value
  }

  return undefined
}

const readRequestContextValue = (
  config: InternalAxiosRequestConfig,
  keys: string[],
) => {
  const sources = [config.params, config.data]

  for (const source of sources) {
    const value = readFirstValue(source, keys)
    if (value !== undefined) return value
  }

  return undefined
}

const readUrlQueryValue = (url: string | undefined, keys: string[]) => {
  if (!url) return undefined

  const query = url.split('?')[1]?.split('#')[0]
  if (!query) return undefined

  const searchParams = new URLSearchParams(query)

  for (const key of keys) {
    const value = normalizeContextValue(searchParams.get(key))
    if (value !== undefined) return value
  }

  return undefined
}

const readUserContextValue = (
  keys: string[],
  nestedKey?: 'merchant' | 'store',
) => {
  const userInfo = getStorageJson(runtimeConfig.userInfoStorageKey)

  return (
    readFirstValue(userInfo, keys) ??
    (nestedKey ? readFirstValue(readByPath(userInfo, nestedKey), ['id']) : undefined)
  )
}

const readLocalContextValue = (primaryKey: string, fallbackKeys: string[]) => {
  const stored = normalizeContextValue(getStorageItem(primaryKey))
  if (stored !== undefined) return stored

  for (const key of fallbackKeys) {
    const value = normalizeContextValue(getStorageItem(key))
    if (value !== undefined) return value
  }

  return undefined
}

const getRequestTenantContext = (config: InternalAxiosRequestConfig) => {
  const merchantKeys = ['merchantId', 'merchant_id']
  const storeKeys = ['storeId', 'store_id']

  const merchantId =
    readRequestContextValue(config, merchantKeys) ??
    readUrlQueryValue(config.url, merchantKeys) ??
    readUserContextValue(merchantKeys, 'merchant') ??
    readLocalContextValue(runtimeConfig.merchantStorageKey, [
      'merchantId',
      'merchant_id',
      'CURRENT_MERCHANT_ID',
    ])

  const storeId =
    readRequestContextValue(config, storeKeys) ??
    readUrlQueryValue(config.url, storeKeys) ??
    readUserContextValue(storeKeys, 'store') ??
    readLocalContextValue(runtimeConfig.storeStorageKey, [
      'storeId',
      'store_id',
      'CURRENT_STORE_ID',
    ])

  return { merchantId, storeId }
}

const getBusinessMessage = (data: unknown, options: HttpRequestOptions) => {
  if (!isRecord(data)) return '请求失败'

  const messageKey = options.messageKey || 'message'
  const messageValue =
    readByPath(data, messageKey) ?? data.message ?? data.msg ?? data.error ?? data.reason

  return typeof messageValue === 'string' && messageValue.trim()
    ? messageValue
    : '请求失败'
}

const getBusinessCode = (data: unknown) => {
  if (!isRecord(data)) return undefined
  return data.code ?? data.status ?? data.errCode
}

const isTokenExpiredCode = (code: unknown) =>
  runtimeConfig.tokenExpiredCodes.some((item) => String(item) === String(code))

const notifyError = (content: string, mode: ErrorMessageMode) => {
  if (mode === 'none') return
  if (mode === 'modal') {
    runtimeConfig.showModalError({ title: '请求错误', content })
    return
  }
  runtimeConfig.showMessageError(content)
}

const isBusinessSuccess = (data: unknown) => {
  if (!isRecord(data)) return true

  const status = data.status
  const code = data.code
  const success = data.success
  const messageText = String(data.message ?? data.msg ?? '')
  const statusText = String(status ?? '').toLowerCase()
  const codeText = String(code ?? '')

  if (success === true) return true
  if (['success', 'ok', '200', '0'].includes(statusText)) return true
  if (code !== undefined && (codeText === '0' || codeText === '200' || codeText.startsWith('0'))) {
    return true
  }
  if (messageText.includes('成功') && ('data' in data || 'result' in data)) return true

  const hasBusinessStatus = status !== undefined || code !== undefined || success !== undefined
  return !hasBusinessStatus
}

const transformResponseData = (data: unknown, options: HttpRequestOptions) => {
  if (!isRecord(data)) return data
  if (!isBusinessSuccess(data)) {
    const code = getBusinessCode(data)
    const content = getBusinessMessage(data, options)

    if (isTokenExpiredCode(code)) {
      runtimeConfig.onTokenExpired(code as number | string | undefined, data)
    }

    notifyError(content, options.errorMessageMode)
    throw Object.assign(new Error(content), { code, detail: data })
  }

  const payload = readFirstByPath(data, options.responseDataKey)
  return payload === undefined ? data : payload
}

const defaultTransform: AxiosTransform = {
  beforeRequestHook(config, options) {
    const nextConfig: AxiosRequestConfig = {
      ...config,
      headers: mergeHeaders(options.headers, config.headers),
    }

    const requestUrl = nextConfig.url ?? ''
    const urlPrefix = options.joinPrefix === false ? '' : options.urlPrefix

    if (requestUrl && !isAbsoluteUrl(requestUrl) && urlPrefix) {
      nextConfig.url = joinUrl(urlPrefix, requestUrl)
    }

    const apiUrl = readConfigValue(options.apiUrl ?? runtimeConfig.apiUrl)
    if (apiUrl && !isAbsoluteUrl(requestUrl)) {
      nextConfig.baseURL = apiUrl
    }

    return nextConfig
  },
  transformResponseHook(response, options) {
    if (options.isReturnNativeResponse) return response

    const data = response.data
    if (options.isTransformResponse === false) return data

    return transformResponseData(data, options)
  },
  async requestCatchHook(error, options) {
    if (axios.isAxiosError(error)) {
      const status = error.response?.status
      const responseData = error.response?.data
      const content =
        getBusinessMessage(responseData, options) ||
        error.message ||
        `请求失败${status ? `(${status})` : ''}`

      if (isTokenExpiredCode(status)) {
        runtimeConfig.onTokenExpired(status, responseData)
      }

      notifyError(content, options.errorMessageMode)
    } else {
      notifyError(error.message || '请求失败', options.errorMessageMode)
    }

    return Promise.reject(error)
  },
  requestInterceptors(config) {
    const requestOptions = (config as AxiosConfigWithOptions).requestOptions
    const skipStoreScope = String(config.headers.get('x-skip-store-scope') ?? '') === '1'
    config.headers.delete('x-skip-store-scope')

    if (requestOptions?.withToken !== false) {
      const token = getToken()
      if (token) {
        config.headers.set('Authorization', `Bearer ${token}`)
      }
    }

    if (requestOptions?.withTenant !== false) {
      const { merchantId, storeId } = getRequestTenantContext(config)

      if (!config.headers.has('x-merchant-id') && merchantId) {
        config.headers.set('x-merchant-id', merchantId)
      }

      if (!skipStoreScope && !config.headers.has('x-store-id')) {
        config.headers.set('x-store-id', storeId ?? '0')
      }
    }

    config.headers.set('x-device-name', 'TexasHoldemPokerH5')
    return config
  },
  responseInterceptors(response) {
    const serverTime = Number(response.headers['x-server-time'])
    if (Number.isFinite(serverTime)) {
      runtimeConfig.onServerTimeChange?.(serverTime)
    }
    return response
  },
  requestInterceptorsCatch(error) {
    return Promise.reject(error)
  },
  responseInterceptorsCatch(error) {
    return Promise.reject(error)
  },
}

export class HttpClient {
  private axiosInstance: AxiosInstance

  private readonly options: CreateAxiosOptions

  constructor(options: CreateAxiosOptions) {
    this.options = options
    this.axiosInstance = axios.create({
      paramsSerializer: {
        serialize: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
      },
      ...options,
    })
    this.setupInterceptors()
  }

  getAxios() {
    return this.axiosInstance
  }

  request<T = unknown>(
    config: AxiosRequestConfig,
    options?: HttpRequestOptions,
  ): Promise<T> {
    const requestOptions = mergeRequestOptions(this.options.requestOptions, options)
    const transform = this.options.transform ?? defaultTransform
    const requestConfig = transform.beforeRequestHook
      ? transform.beforeRequestHook(config, requestOptions)
      : config
    const configWithOptions = {
      ...requestConfig,
      requestOptions,
    } as AxiosConfigWithOptions

    return this.axiosInstance
      .request(configWithOptions)
      .then((response) =>
        transform.transformResponseHook
          ? transform.transformResponseHook(response, requestOptions)
          : response.data,
      )
      .catch((error: Error) =>
        transform.requestCatchHook
          ? transform.requestCatchHook(error, requestOptions)
          : Promise.reject(error),
      ) as Promise<T>
  }

  get<T = unknown>(config: AxiosRequestConfig, options?: HttpRequestOptions) {
    return this.request<T>({ ...config, method: 'GET' }, options)
  }

  post<T = unknown>(config: AxiosRequestConfig, options?: HttpRequestOptions) {
    return this.request<T>({ ...config, method: 'POST' }, options)
  }

  put<T = unknown>(config: AxiosRequestConfig, options?: HttpRequestOptions) {
    return this.request<T>({ ...config, method: 'PUT' }, options)
  }

  delete<T = unknown>(config: AxiosRequestConfig, options?: HttpRequestOptions) {
    return this.request<T>({ ...config, method: 'DELETE' }, options)
  }

  uploadFile<T = unknown>(
    config: AxiosRequestConfig,
    params: UploadFileParams,
    options?: HttpRequestOptions,
  ) {
    return this.request<T>(
      {
        ...config,
        data: createUploadFormData(params),
        method: config.method ?? 'POST',
      },
      options,
    )
  }

  private setupInterceptors() {
    const transform = this.options.transform ?? defaultTransform

    this.axiosInstance.interceptors.request.use((config) => {
      if (!transform.requestInterceptors) return config
      return transform.requestInterceptors(config, this.options)
    }, transform.requestInterceptorsCatch)

    this.axiosInstance.interceptors.response.use(
      (response) => {
        if (!transform.responseInterceptors) return response
        return transform.responseInterceptors(response)
      },
      transform.responseInterceptorsCatch,
    )
  }
}

export const createAxios = (options: Partial<CreateAxiosOptions> = {}) =>
  new HttpClient({
    timeout: 1000 * 60 * 2,
    transform: defaultTransform,
    ...options,
  })

export const basisHttp = createAxios({
  requestOptions: {
    urlPrefix: '/basic_api',
  },
})
