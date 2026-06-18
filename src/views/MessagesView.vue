<script setup lang="ts">
import {
  ArrowLeftOutlined,
  BellOutlined,
  ReloadOutlined,
} from '@ant-design/icons-vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import type { NotificationItem } from '@/services/notification'
import { useNotificationStore } from '@/stores/notification'

const LOAD_MORE_DISTANCE = 120

const router = useRouter()
const notificationStore = useNotificationStore()
const listRef = ref<HTMLElement | null>(null)

const messages = computed(() => notificationStore.items)
const unreadText = computed(() =>
  notificationStore.unreadCount > 0 ? `${notificationStore.unreadCount}条未读` : '暂无未读',
)
const connectionText = computed(() => {
  if (notificationStore.isConnected) return '实时连接已开启'
  if (notificationStore.isConnecting) return '正在连接'
  return notificationStore.connectionError || '实时连接未开启'
})
const totalText = computed(() => {
  const total = notificationStore.total || messages.value.length

  return `${total}条消息`
})
const loadMoreText = computed(() => {
  if (notificationStore.isLoadingMore) return '正在加载更多'
  if (notificationStore.hasMore) return '上拉加载更多'
  return '已加载全部消息'
})

const getMessageKey = (item: NotificationItem, index: number) =>
  String(item.id ?? item.deliveryId ?? item.eventId ?? `${item.bizType ?? 'message'}-${item.bizId ?? index}`)

const getMessageTitle = (item: NotificationItem) =>
  item.title || item.sceneCode || item.bizType || item.type || '站内信通知'

const getMessageContent = (item: NotificationItem) => item.content || '暂无消息内容'

const getMessageMeta = (item: NotificationItem) => {
  const metaItems = [
    item.deliveryId ? `Delivery ${item.deliveryId}` : '',
    item.eventId ? `Event ${item.eventId}` : '',
    item.bizId ? `Biz ${item.bizId}` : '',
  ].filter(Boolean)

  return metaItems.join(' / ')
}

const formatMessageTime = (value?: string) => {
  if (!value) return ''

  const date = new Date(value.replace(/-/g, '/'))
  if (!Number.isFinite(date.getTime())) return value

  return date.toLocaleString('zh-CN', {
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    month: '2-digit',
  })
}

const handleBack = async () => {
  if (window.history.length > 1) {
    router.back()
    return
  }

  await router.push({ name: 'mine' })
}

const reloadMessages = () => {
  void notificationStore.loadFirstPage()
  void notificationStore.refreshUnreadCount()
}

const handleListScroll = () => {
  const listElement = listRef.value
  if (!listElement) return

  const distanceToBottom =
    listElement.scrollHeight - listElement.scrollTop - listElement.clientHeight

  if (distanceToBottom <= LOAD_MORE_DISTANCE) {
    void notificationStore.loadNextPage()
  }
}

onMounted(() => {
  notificationStore.setViewed(true)
  notificationStore.connect()
  reloadMessages()
})

onBeforeUnmount(() => {
  notificationStore.setViewed(false)
})
</script>

<template>
  <main class="tab-page messages-page" aria-label="消息">
    <section class="orders-topbar" aria-label="消息导航">
      <button class="orders-icon-button" type="button" aria-label="返回" @click="handleBack">
        <ArrowLeftOutlined />
      </button>

      <strong>消息</strong>

      <button class="orders-icon-button" type="button" aria-label="刷新消息" @click="reloadMessages">
        <ReloadOutlined />
      </button>
    </section>

    <section class="orders-hero messages-hero" aria-label="消息概览">
      <div>
        <p>MESSAGE</p>
        <h1>站内信</h1>
      </div>
    </section>

    <section class="messages-stat-strip" aria-label="消息状态">
      <article>
        <strong>{{ unreadText }}</strong>
        <span>{{ connectionText }}</span>
      </article>
      <article>
        <strong>{{ totalText }}</strong>
        <span>HTTP 列表与 Socket 通知</span>
      </article>
    </section>

    <section class="messages-panel" aria-label="消息列表">
      <header class="orders-section-heading">
        <h2>收到的通知</h2>
        <span>按创建时间排列</span>
      </header>

      <ol
        ref="listRef"
        class="messages-list"
        :class="{ 'is-empty': !messages.length }"
        @scroll.passive="handleListScroll"
      >
        <li v-if="notificationStore.isInitialLoading" class="orders-list-state">
          正在加载消息
        </li>
        <li v-else-if="notificationStore.error && !messages.length" class="orders-list-state is-error">
          <span>{{ notificationStore.error }}</span>
          <button class="orders-state-button" type="button" @click="reloadMessages">重新加载</button>
        </li>
        <li v-else-if="!messages.length" class="orders-list-state">
          暂无消息
        </li>

        <li
          v-for="(item, index) in messages"
          :key="getMessageKey(item, index)"
          class="messages-item"
        >
          <span class="messages-item-icon" aria-hidden="true">
            <BellOutlined />
          </span>

          <article class="messages-card">
            <header>
              <strong>{{ getMessageTitle(item) }}</strong>
              <time v-if="item.createdAt">{{ formatMessageTime(item.createdAt) }}</time>
            </header>

            <p>{{ getMessageContent(item) }}</p>

            <small v-if="getMessageMeta(item)">{{ getMessageMeta(item) }}</small>
          </article>
        </li>

        <li v-if="messages.length" class="orders-list-state is-tail">
          {{ loadMoreText }}
        </li>
      </ol>
    </section>
  </main>
</template>
