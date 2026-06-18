import { defineStore } from 'pinia'
import { io, type Socket } from 'socket.io-client'
import {
  getNotifications,
  getNotificationUnreadCount,
  type AdminNotificationPayload,
  type NotificationItem,
} from '@/services/notification'
import { getToken } from '@/utils/auth'

const PAGE_SIZE = 20

type NotificationSocket = Socket<{
  'notification.created': (payload: AdminNotificationPayload) => void
}>

const normalizeId = (value: unknown) => {
  if (value === undefined || value === null) return ''

  return String(value)
}

const toFiniteNumber = (value: unknown) => {
  const numberValue = Number(value)

  return Number.isFinite(numberValue) ? numberValue : 0
}

const getNotificationKey = (item: NotificationItem) =>
  normalizeId(item.id) ||
  normalizeId(item.deliveryId) ||
  normalizeId(item.eventId) ||
  `${normalizeId(item.bizType)}:${normalizeId(item.bizId)}:${normalizeId(item.createdAt)}`

const getNotificationTimeValue = (item: NotificationItem) => {
  const timeValue = Date.parse(item.createdAt || '')

  return Number.isFinite(timeValue) ? timeValue : 0
}

const sortNotifications = (items: NotificationItem[]) =>
  [...items].sort((a, b) => getNotificationTimeValue(b) - getNotificationTimeValue(a))

const mergeNotifications = (
  currentItems: NotificationItem[],
  incomingItems: NotificationItem[],
  prepend = false,
) => {
  const merged = prepend ? [...incomingItems, ...currentItems] : [...currentItems, ...incomingItems]
  const seenKeys = new Set<string>()
  const uniqueItems: NotificationItem[] = []

  merged.forEach((item) => {
    const key = getNotificationKey(item)
    if (key && seenKeys.has(key)) return
    if (key) seenKeys.add(key)
    uniqueItems.push(item)
  })

  return sortNotifications(uniqueItems)
}

const readNotificationItems = (response: Awaited<ReturnType<typeof getNotifications>>) =>
  response.notifications ?? response.items ?? response.list ?? []

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    connectionError: '',
    currentPage: 0,
    error: '',
    hasMore: true,
    isConnected: false,
    isConnecting: false,
    isInitialLoading: false,
    isLoadingMore: false,
    items: [] as NotificationItem[],
    latestItem: null as NotificationItem | null,
    lastReceivedAt: '',
    total: 0,
    unreadCount: 0,
    viewed: false,
  }),
  getters: {
    unreadBadge: (state) => (state.unreadCount > 99 ? '99+' : String(state.unreadCount)),
  },
  actions: {
    connect() {
      const token = getToken()

      if (!token) {
        this.disconnect()
        return
      }

      const existingSocket = notificationSocket
      if (existingSocket && socketToken === token) {
        if (!existingSocket.connected) {
          existingSocket.connect()
        }
        return
      }

      this.disconnect()
      socketToken = token
      this.isConnecting = true
      this.connectionError = ''

      notificationSocket = io('/adminNotify', {
        path: '/socket.io/',
        query: { token },
        transports: ['websocket'],
      }) as NotificationSocket

      notificationSocket.on('connect', () => {
        this.isConnected = true
        this.isConnecting = false
        this.connectionError = ''
      })

      notificationSocket.on('disconnect', () => {
        this.isConnected = false
        this.isConnecting = false
      })

      notificationSocket.on('connect_error', (error) => {
        this.isConnected = false
        this.isConnecting = false
        this.connectionError = error.message || '消息连接失败'
      })

      notificationSocket.on('notification.created', (payload) => {
        console.log('收到 Socket.IO 推送消息:', payload)
        this.handleSocketNotification(payload)
      })
    },
    disconnect() {
      if (notificationSocket) {
        notificationSocket.off()
        notificationSocket.disconnect()
        notificationSocket = null
      }

      socketToken = ''
      this.isConnected = false
      this.isConnecting = false
    },
    handleSocketNotification(payload: AdminNotificationPayload) {
      this.lastReceivedAt = new Date().toISOString()
      this.latestItem = payload
      this.items = mergeNotifications(this.items, [payload], true)

      void this.refreshUnreadCount()

      if (this.viewed) {
        void this.loadFirstPage()
      }
    },
    async refreshUnreadCount() {
      try {
        const response = await getNotificationUnreadCount()
        const unreadCount = response.count ?? response.unreadCount

        this.unreadCount = toFiniteNumber(unreadCount)
      } catch {
        // Unread count refresh should not interrupt navigation or realtime updates.
      }
    },
    async loadFirstPage() {
      if (this.isInitialLoading) return

      this.isInitialLoading = true
      this.isLoadingMore = false
      this.error = ''
      this.currentPage = 0
      this.total = 0
      this.hasMore = true

      try {
        const response = await getNotifications({
          'pageRequest.page': 1,
          'pageRequest.pageSize': PAGE_SIZE,
        })
        const nextItems = readNotificationItems(response)
        const total = Number(response.pageReply?.total)
        const page = Number(response.pageReply?.page ?? 1)

        this.items = mergeNotifications([], nextItems)
        this.currentPage = Number.isFinite(page) ? page : 1
        this.total = Number.isFinite(total) ? total : this.items.length
        this.hasMore = Number.isFinite(total)
          ? this.items.length < total
          : nextItems.length >= PAGE_SIZE
      } catch {
        this.error = '消息加载失败，请稍后重试'
        this.hasMore = false
      } finally {
        this.isInitialLoading = false
      }
    },
    async loadNextPage() {
      if (this.isInitialLoading || this.isLoadingMore || !this.hasMore) return

      this.isLoadingMore = true

      try {
        const nextPage = this.currentPage + 1
        const response = await getNotifications({
          'pageRequest.page': nextPage,
          'pageRequest.pageSize': PAGE_SIZE,
        })
        const nextItems = readNotificationItems(response)
        const total = Number(response.pageReply?.total)
        const page = Number(response.pageReply?.page ?? nextPage)

        this.items = mergeNotifications(this.items, nextItems)
        this.currentPage = Number.isFinite(page) ? page : nextPage
        this.total = Number.isFinite(total) ? total : this.items.length
        this.hasMore = Number.isFinite(total)
          ? this.items.length < total
          : nextItems.length >= PAGE_SIZE
      } catch {
        this.hasMore = false
      } finally {
        this.isLoadingMore = false
      }
    },
    setViewed(viewed: boolean) {
      this.viewed = viewed
    },
  },
})

let notificationSocket: NotificationSocket | null = null
let socketToken = ''
