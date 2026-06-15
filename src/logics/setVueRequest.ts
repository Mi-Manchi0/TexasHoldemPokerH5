import { setGlobalOptions } from 'vue-request'

const vueRequestOptions = {
  loadingDelay: 100,
  pagination: {
    currentKey: 'pageRequest.page',
    pageSizeKey: 'pageRequest.pageSize',
    totalKey: 'pageReply.total',
    totalPageKey: 'total',
  },
}

export const setupVueRequest = () => {
  setGlobalOptions(vueRequestOptions)
}
