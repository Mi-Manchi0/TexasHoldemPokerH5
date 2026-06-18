<script setup lang="ts">
import {
  ArrowLeftOutlined,
  LogoutOutlined,
  ShopOutlined,
  UserOutlined,
} from '@ant-design/icons-vue'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useOrgScopeStore } from '@/stores/orgScope'
import { useTableSeatStore } from '@/stores/tableSeat'
import { clearAuthSession, getUserInfo } from '@/utils/auth'

const router = useRouter()
const orgScopeStore = useOrgScopeStore()
const tableSeatStore = useTableSeatStore()
const userInfo = computed(() => getUserInfo())
const selectedScope = computed(() => orgScopeStore.selected)
const accountName = computed(() => userInfo.value?.name || userInfo.value?.phone || '当前账号')
const accountMeta = computed(() => userInfo.value?.phone || userInfo.value?.id || '--')
const scopeTitle = computed(() => selectedScope.value?.storeName || '暂无可用门店')
const scopeMeta = computed(() => {
  const scope = selectedScope.value
  if (!scope) return '请联系管理员分配组织范围'

  return `${scope.merchantName} / ${scope.storeName}`
})

const handleBack = async () => {
  if (window.history.length > 1) {
    router.back()
    return
  }

  await router.push({ name: 'mine' })
}

const handleLogout = async () => {
  tableSeatStore.clearSelectedSeat()
  orgScopeStore.resetSession()
  clearAuthSession()
  await router.replace({ name: 'login' })
}
</script>

<template>
  <main class="tab-page settings-page" aria-label="设置">
    <section class="orders-topbar" aria-label="设置导航">
      <button class="orders-icon-button" type="button" aria-label="返回" @click="handleBack">
        <ArrowLeftOutlined />
      </button>

      <strong>设置</strong>

      <span aria-hidden="true"></span>
    </section>

    <section class="orders-hero settings-hero" aria-label="账号设置">
      <div>
        <p>ACCOUNT</p>
        <h1>设置</h1>
      </div>
    </section>

    <section class="settings-list" aria-label="账号信息">
      <article class="settings-row">
        <span class="settings-row-icon" aria-hidden="true">
          <UserOutlined />
        </span>
        <span class="settings-row-copy">
          <strong>{{ accountName }}</strong>
          <small>{{ accountMeta }}</small>
        </span>
      </article>

      <article class="settings-row">
        <span class="settings-row-icon" aria-hidden="true">
          <ShopOutlined />
        </span>
        <span class="settings-row-copy">
          <strong>{{ scopeTitle }}</strong>
          <small>{{ scopeMeta }}</small>
        </span>
      </article>
    </section>

    <button class="settings-logout" type="button" @click="handleLogout">
      <LogoutOutlined />
      <span>退出登录</span>
    </button>
  </main>
</template>
