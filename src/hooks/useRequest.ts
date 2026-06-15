import { computed, ref, unref, watch, type ComputedRef, type Ref } from 'vue'
import { message } from 'ant-design-vue'
import type { PaginationProps } from 'ant-design-vue'
import {
  usePagination,
  type Options as VueRequestOptions,
  type Service,
} from 'vue-request'
import { get } from 'lodash-es'

type MaybeRef<T> = T | Ref<T> | ComputedRef<T>
type RequestParams = unknown[]
type RequestFn<TData, TParams extends RequestParams> = (...args: TParams) => Promise<TData>

export interface UseRequestOptions<TData, TParams extends RequestParams> {
  defaultParams?: TParams
  errorMsg?: string
  immediate?: boolean
  initialData?: TData
  onError?: (error: unknown, params: TParams | null) => void
  onFinally?: (params: TParams | null, data: TData | null, error: unknown) => void
  onSuccess?: (data: TData, params: TParams) => void
  successMsg?: string
}

export const useRequest = <TData, TParams extends RequestParams = RequestParams>(
  request: RequestFn<TData, TParams>,
  options: UseRequestOptions<TData, TParams> = {},
) => {
  const data = ref<TData | null>(options.initialData ?? null) as Ref<TData | null>
  const error = ref<unknown>(null)
  const loading = ref(false)
  const params = ref<TParams | null>(options.defaultParams ?? null) as Ref<TParams | null>

  const run = async (...args: TParams): Promise<TData> => {
    loading.value = true
    error.value = null
    params.value = args

    try {
      const result = await request(...args)
      data.value = result

      if (options.successMsg) {
        message.success(options.successMsg)
      }

      options.onSuccess?.(result, args)
      return result
    } catch (err) {
      error.value = err

      if (options.errorMsg) {
        message.error(options.errorMsg)
      }

      options.onError?.(err, params.value)
      throw err
    } finally {
      loading.value = false
      options.onFinally?.(params.value, data.value, error.value)
    }
  }

  const refresh = () => {
    if (!params.value) {
      throw new Error('No request params available')
    }

    return run(...params.value)
  }

  if (options.immediate && options.defaultParams) {
    void run(...options.defaultParams)
  }

  return {
    data,
    error,
    loading,
    params,
    refresh,
    run,
  }
}

type AnyRecord = Record<string, unknown>
type PaginationService<TData, TParams extends AnyRecord> = (
  params: TParams,
) => Promise<TData>

export interface PaginationKeyConfig {
  currentKey?: string
  pageSizeKey?: string
  totalKey?: string
  totalPageKey?: string
}

export interface UsePaginationProOptions<TData, TParams extends AnyRecord>
  extends Omit<
    VueRequestOptions<TData, [TParams]>,
    'defaultParams' | 'manual' | 'ready'
  > {
  defaultParams?: [Partial<TParams>]
  dep?: MaybeRef<Partial<TParams>>
  loadingKeep?: number
  manual?: boolean
  pagination?: PaginationKeyConfig
  ready?: MaybeRef<boolean>
  resetWhenNotReady?: boolean
}

const defaultPaginationKeys: Required<PaginationKeyConfig> = {
  currentKey: 'pageRequest.page',
  pageSizeKey: 'pageRequest.pageSize',
  totalKey: 'pageReply.total',
  totalPageKey: 'total',
}

const setValueByPath = (target: AnyRecord, path: string, value: unknown) => {
  const keys = path.split('.')
  let current = target

  keys.forEach((key, index) => {
    if (index === keys.length - 1) {
      current[key] = value
      return
    }

    if (!current[key] || typeof current[key] !== 'object') {
      current[key] = {}
    }

    current = current[key] as AnyRecord
  })

  return target
}

const getValueByPath = (source: unknown, path: string) => get(source, path)

const mergeParams = <TParams extends AnyRecord>(
  pagination: { current: number; pageSize: number },
  paginationKeys: Required<PaginationKeyConfig>,
  dep?: Partial<TParams>,
  extra?: Partial<TParams>,
) => {
  const params: AnyRecord = {
    ...(dep ?? {}),
    ...(extra ?? {}),
  }

  setValueByPath(params, paginationKeys.currentKey, pagination.current)
  setValueByPath(params, paginationKeys.pageSizeKey, pagination.pageSize)

  return params as TParams
}

export const usePaginationPro = <
  TData extends AnyRecord,
  TParams extends AnyRecord = AnyRecord,
>(
  service: PaginationService<TData, TParams>,
  options: UsePaginationProOptions<TData, TParams> = {},
) => {
  const {
    defaultParams,
    dep,
    loadingKeep,
    manual,
    pagination,
    ready: readyOption,
    resetWhenNotReady,
    ...vueRequestOptions
  } = options
  const paginationKeys = {
    ...defaultPaginationKeys,
    ...pagination,
  }
  const current = ref(
    Number(
      getValueByPath(defaultParams?.[0], paginationKeys.currentKey) ?? 1,
    ),
  )
  const pageSize = ref(
    Number(
      getValueByPath(defaultParams?.[0], paginationKeys.pageSizeKey) ?? 10,
    ),
  )
  const keepLoading = ref(false)
  const localData = ref<TData | undefined>() as Ref<TData | undefined>

  const ready = computed(() => {
    const readyValue = readyOption
    return readyValue === undefined ? true : Boolean(unref(readyValue))
  })

  const requestOptions: VueRequestOptions<TData, [TParams]> = {
    ...vueRequestOptions,
    manual: true,
  }

  const paginationRequest = usePagination<TData, [TParams]>(
    service as Service<TData, [TParams]>,
    requestOptions,
  )

  watch(
    () => paginationRequest.data.value,
    (value) => {
      if (value !== undefined) {
        localData.value = value
      }
    },
    { immediate: true },
  )

  const runProSync = async (extra?: Partial<TParams>) => {
    if (!ready.value) {
      if (resetWhenNotReady) {
        localData.value = undefined
      }
      return undefined
    }

    const params = mergeParams(
      { current: current.value, pageSize: pageSize.value },
      paginationKeys,
      unref(dep),
      extra,
    )

    if (loadingKeep) {
      keepLoading.value = true
      window.setTimeout(() => {
        keepLoading.value = false
      }, loadingKeep)
    }

    const result = await paginationRequest.runAsync(params)
    localData.value = result
    return result
  }

  const runPro = (extra?: Partial<TParams>) => {
    void runProSync(extra)
  }

  const refreshPro = () => {
    if (!ready.value) {
      if (resetWhenNotReady) {
        localData.value = undefined
      }
      return
    }

    runPro()
  }

  const mutate = (value?: TData) => {
    localData.value = value
    if (value !== undefined) {
      paginationRequest.mutate(value)
    }
  }

  const antdPagination = computed<PaginationProps>(() => ({
    current: current.value,
    onChange: (nextCurrent, nextPageSize) => {
      current.value = nextCurrent
      pageSize.value = nextPageSize
      runPro()
    },
    onShowSizeChange: (nextCurrent, nextPageSize) => {
      current.value = nextCurrent
      pageSize.value = nextPageSize
      runPro()
    },
    pageSize: pageSize.value,
    showSizeChanger: true,
    total: Number(getValueByPath(localData.value, paginationKeys.totalKey) ?? 0),
  }))

  watch(
    () => unref(dep),
    () => {
      current.value = 1

      if (manual) return
      refreshPro()
    },
    { deep: true, immediate: !manual },
  )

  watch(ready, (isReady) => {
    if (isReady) {
      if (!manual) refreshPro()
      return
    }

    if (resetWhenNotReady) {
      localData.value = undefined
    }
  })

  return {
    ...paginationRequest,
    antdPagination,
    data: localData,
    loading: computed(() => paginationRequest.loading.value || keepLoading.value),
    mutate,
    refreshPro,
    runPro,
    runProSync,
  }
}
