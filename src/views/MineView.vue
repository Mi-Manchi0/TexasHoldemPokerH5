<script setup lang="ts">
import {
  BellOutlined,
  DownloadOutlined,
  QrcodeOutlined,
  SettingOutlined,
  ShoppingOutlined,
  WalletOutlined,
  UploadOutlined,
} from '@ant-design/icons-vue'
import { computed } from 'vue'
import brandMarkUrl from '@/assets/bgc.jpg'
import { useNotificationStore } from '@/stores/notification'
import { normalizeUrl } from '@/utils'
import { getUserInfo } from '@/utils/auth'

interface ServiceLink {
  badge?: 'unread'
  icon: typeof BellOutlined
  label: string
  meta: string
  to: {
    name: string
    query?: Record<string, string>
  }
}

const notificationStore = useNotificationStore()
const userInfo = computed(() => getUserInfo())
const normalizedBrandMarkUrl = normalizeUrl(brandMarkUrl)
const displayName = computed(() => userInfo.value?.name || userInfo.value?.phone || '玩家')

const serviceLinks: ServiceLink[] = [
  { icon: BellOutlined, label: '消息', meta: '站内信通知', to: { name: 'messages' }, badge: 'unread' },
  { icon: ShoppingOutlined, label: '订单', meta: '消费订单', to: { name: 'orders' } },
  { icon: WalletOutlined, label: '存积分', meta: '会员积分存入', to: { name: 'points-deposit' } },
  {
    icon: WalletOutlined,
    label: '取积分',
    meta: '积分提取工单',
    to: { name: 'orders', query: { mode: 'tickets', type: 'points_withdraw' } },
  },
  { icon: UploadOutlined, label: '存酒', meta: '会员存酒', to: { name: 'wine-storage', query: { mode: 'deposit' } } },
  { icon: DownloadOutlined, label: '取酒', meta: '会员取酒', to: { name: 'wine-storage', query: { mode: 'withdraw' } } },
  { icon: QrcodeOutlined, label: '扫码核验', meta: '预约到店', to: { name: 'home', query: { action: 'arrive-verify' } } },
  { icon: SettingOutlined, label: '设置', meta: '账号设置', to: { name: 'settings' } },
]
</script>

<template>
  <main class="tab-page mine-page" aria-label="我的">
    <section class="mine-hero" aria-label="个人资料">
      <div class="mine-hero-row">
        <span class="mine-avatar" aria-hidden="true">
          <img :src="normalizedBrandMarkUrl" alt="" />
        </span>

        <RouterLink class="mine-home-link" :to="{ name: 'home' }">我的主页</RouterLink>
      </div>

      <div class="mine-name-block">
        <h1>{{ displayName }}</h1>
      </div>
    </section>

    <section class="mine-section mine-service-section" aria-label="我的服务">
      <header class="mine-section-head">
        <span class="mine-section-badge" aria-hidden="true">
          <ShoppingOutlined />
        </span>
        <h2>我的服务</h2>
      </header>

      <div class="mine-service-grid">
        <RouterLink
          v-for="item in serviceLinks"
          :key="item.label"
          class="mine-service-card"
          :to="item.to"
        >
          <span class="mine-service-icon" aria-hidden="true">
            <component :is="item.icon" />
          </span>
          <span
            v-if="item.badge === 'unread' && notificationStore.unreadCount > 0"
            class="mine-service-badge"
          >
            {{ notificationStore.unreadBadge }}
          </span>
          <span class="mine-service-copy">
            <strong>{{ item.label }}</strong>
            <small>{{ item.meta }}</small>
          </span>
        </RouterLink>
      </div>
    </section>
  </main>
</template>
