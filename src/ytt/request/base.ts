import { RequestBodyType, type RequestFunctionParams } from '@bfr/ytt'
import type { AxiosRequestConfig } from 'axios'
import type { HttpClient, HttpRequestOptions } from '@/utils/http'

export interface RequestOptions extends HttpRequestOptions {
  server?: 'prod' | 'dev' | 'mock'
}

type RequestClient = Pick<HttpClient, 'request'>

const jsonContentType = 'application/json; charset=UTF-8'
const formContentType = 'application/x-www-form-urlencoded; charset=UTF-8'

const hasHeader = (headers: AxiosRequestConfig['headers'], headerName: string) => {
  if (!headers) return false

  return Object.keys(headers).some(
    (key) => key.toLowerCase() === headerName.toLowerCase(),
  )
}

const withContentType = (
  headers: AxiosRequestConfig['headers'],
  contentType: string,
) => {
  if (hasHeader(headers, 'Content-Type')) return headers

  return {
    ...headers,
    'Content-Type': contentType,
  }
}

const getRequestData = (payload: RequestFunctionParams) => {
  if (payload.hasFileData || payload.requestBodyType === RequestBodyType.file) {
    return payload.getFormData()
  }

  if (
    payload.requestBodyType === RequestBodyType.form ||
    payload.requestBodyType === RequestBodyType.json ||
    payload.requestBodyType === RequestBodyType.raw ||
    payload.requestBodyType === RequestBodyType.text
  ) {
    return payload.data
  }

  return undefined
}

const getRequestHeaders = (payload: RequestFunctionParams) => {
  const headers: AxiosRequestConfig['headers'] = {
    ...payload.requestHeaders,
  }

  if (payload.hasFileData || payload.requestBodyType === RequestBodyType.file) {
    return headers
  }

  if (payload.requestBodyType === RequestBodyType.form) {
    return withContentType(headers, formContentType)
  }

  if (
    payload.requestBodyType === RequestBodyType.json ||
    payload.requestBodyType === RequestBodyType.raw ||
    payload.requestBodyType === RequestBodyType.text
  ) {
    return withContentType(headers, jsonContentType)
  }

  return headers
}

export const createRequestClient =
  (client: RequestClient) =>
  <TResponseData>(
    payload: RequestFunctionParams,
    options: RequestOptions = { server: 'prod' },
  ): Promise<TResponseData> => {
    const fetchOptions: AxiosRequestConfig = {
      data: getRequestData(payload),
      headers: getRequestHeaders(payload),
      method: payload.method,
      url: payload.path,
    }

    return client.request<TResponseData>(fetchOptions, options)
  }
