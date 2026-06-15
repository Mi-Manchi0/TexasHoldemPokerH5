<script setup lang="ts">
import {
  ArrowRightOutlined,
  CreditCardOutlined,
  CrownOutlined,
  EnvironmentFilled,
  FileAddOutlined,
  GiftOutlined,
  HomeOutlined,
  LogoutOutlined,
  ShopOutlined,
  ShoppingOutlined,
  TableOutlined,
  TeamOutlined,
  WalletOutlined,
} from '@ant-design/icons-vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import brandMarkUrl from '@/assets/bgc.jpg'
import { clearAuthSession, getUserInfo } from '@/utils/auth'

const router = useRouter()
const userInfo = computed(() => getUserInfo())
const displayName = computed(() => userInfo.value?.name || userInfo.value?.phone || '玩家')
const growthValue = 120

const orderStatuses = [
  { badge: '', icon: CreditCardOutlined, label: '待付款', to: { name: 'orders' } },
  { badge: '2', icon: TableOutlined, label: '待收货', to: { name: 'orders' } },
  { badge: '', icon: ShoppingOutlined, label: '已发货', to: { name: 'orders' } },
  { badge: '', icon: WalletOutlined, label: '退款/售后', to: { name: 'orders' } },
] as const

const featureLinks = [
  { icon: GiftOutlined, label: '优惠券', to: { name: 'menu' } },
  { icon: TeamOutlined, label: '我的拼团', to: { name: 'orders' } },
  { icon: EnvironmentFilled, label: '收货地址', to: { name: 'menu' } },
  { icon: HomeOutlined, label: '推荐好友', to: { name: 'home' } },
] as const

const handleLogout = async () => {
  clearAuthSession()
  await router.replace({
    name: 'login',
  })
}
</script>

<template>
  <main class="tab-page mine-page" aria-label="我的">
    <section class="mine-hero" aria-label="个人资料">
      <div class="mine-hero-row">
        <span class="mine-avatar" aria-hidden="true">
          <img :src="brandMarkUrl" alt="" />
        </span>

        <RouterLink class="mine-home-link" :to="{ name: 'home' }">我的主页</RouterLink>
      </div>

      <div class="mine-name-block">
        <h1>{{ displayName }}</h1>
        <p>
          <CrownOutlined />
          <span>成长值：{{ growthValue }}</span>
        </p>
      </div>
    </section>

    <section class="mine-business-strip" aria-label="快捷入口">
      <RouterLink class="mine-business-link" :to="{ name: 'orders' }">
        <span class="mine-business-icon" aria-hidden="true">
          <FileAddOutlined />
        </span>
        <span class="mine-business-copy">
          <strong>发布1条笔记</strong>
          <small>成为平台分享官 <ArrowRightOutlined /></small>
        </span>
      </RouterLink>

      <RouterLink class="mine-business-link" :to="{ name: 'menu' }">
        <span class="mine-business-icon" aria-hidden="true">
          <ShopOutlined />
        </span>
        <span class="mine-business-copy">
          <strong>人人开店做生意</strong>
          <small>立即0元免费开店 <ArrowRightOutlined /></small>
        </span>
      </RouterLink>
    </section>

    <section class="mine-section" aria-label="我的订单">
      <header class="mine-section-head">
        <span class="mine-section-badge" aria-hidden="true">
          <ShoppingOutlined />
        </span>
        <h2>我的订单</h2>
        <RouterLink class="mine-section-more" :to="{ name: 'orders' }">
          查看全部 <ArrowRightOutlined />
        </RouterLink>
      </header>

      <div class="mine-status-grid">
        <RouterLink
          v-for="item in orderStatuses"
          :key="item.label"
          class="mine-grid-entry"
          :to="item.to"
        >
          <span class="mine-grid-icon" aria-hidden="true">
            <component :is="item.icon" />
            <em v-if="item.badge">{{ item.badge }}</em>
          </span>
          <strong>{{ item.label }}</strong>
        </RouterLink>
      </div>
    </section>

    <section class="mine-section" aria-label="其他功能">
      <header class="mine-section-head">
        <span class="mine-section-badge" aria-hidden="true">
          <CrownOutlined />
        </span>
        <h2>其他功能</h2>
      </header>

      <div class="mine-status-grid">
        <RouterLink
          v-for="item in featureLinks"
          :key="item.label"
          class="mine-grid-entry"
          :to="item.to"
        >
          <span class="mine-grid-icon" aria-hidden="true">
            <component :is="item.icon" />
          </span>
          <strong>{{ item.label }}</strong>
        </RouterLink>
      </div>
    </section>

    <button class="mine-logout" type="button" @click="handleLogout">
      <LogoutOutlined />
      <span>退出登录</span>
    </button>
  </main>
</template>
