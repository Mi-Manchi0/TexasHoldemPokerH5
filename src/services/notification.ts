import { basisHttp } from '@/utils/http'

export interface AdminNotificationPayload {
  type?: string
  eventId?: string | number
  deliveryId?: string | number
  merchantId?: string | number
  sceneCode?: string
  bizType?: string
  bizId?: string | number
  channel?: string
  content?: string
  createdAt?: string
}

export interface NotificationItem extends AdminNotificationPayload {
  id?: string | number
  title?: string
  status?: string
  readAt?: string
}

export interface NotificationListResponse {
  notifications?: NotificationItem[]
  items?: NotificationItem[]
  list?: NotificationItem[]
  pageReply?: {
    total?: number
    page?: number
    pageSize?: number
  }
}

export interface NotificationUnreadCountResponse {
  count?: number | string
  unreadCount?: number | string
}

export interface GetNotificationsParams {
  'pageRequest.page'?: number
  'pageRequest.pageSize'?: number
}

export const getNotificationUnreadCount = () =>
  basisHttp.get<NotificationUnreadCountResponse>(
    {
      url: '/api/notification/v1/notifications/unread/count',
    },
    {
      errorMessageMode: 'none',
    },
  )

export const getNotifications = (params: GetNotificationsParams = {}) =>
  basisHttp.get<NotificationListResponse>(
    {
      params,
      url: '/api/notification/v1/notifications',
    },
    {
      errorMessageMode: 'none',
    },
  )
