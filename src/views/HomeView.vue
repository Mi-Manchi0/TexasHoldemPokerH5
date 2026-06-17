<script setup lang="ts">
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  CloseOutlined,
  CrownOutlined,
  FireOutlined,
  GiftOutlined,
  ShopOutlined,
  TableOutlined,
  WalletOutlined,
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import brandMarkUrl from '@/assets/bgc.jpg'
import TableSeatPicker from '@/components/TableSeatPicker.vue'
import { useOrgScopeStore } from '@/stores/orgScope'
import { useTableSeatStore } from '@/stores/tableSeat'
import { clearAuthSession, getUserInfo } from '@/utils/auth'

const router = useRouter()
const orgScopeStore = useOrgScopeStore()
const tableSeatStore = useTableSeatStore()
const userInfo = computed(() => getUserInfo())
const displayName = computed(() => userInfo.value?.name || userInfo.value?.phone || '玩家')
const selectedScope = computed(() => orgScopeStore.selected)
const scopeCardTitle = computed(() => {
  if (orgScopeStore.loading && !selectedScope.value) return '组织加载中'

  return selectedScope.value?.merchantName || '暂无可用组织'
})
const scopeCardSubtitle = computed(() => {
  if (orgScopeStore.loading && !selectedScope.value) return '正在获取商户与门店'
  if (!selectedScope.value) return '请联系管理员分配组织范围'

  return selectedScope.value.storeName
})

const isTablePickerOpen = ref(false)
const isScopePickerOpen = ref(false)

const openTablePicker = () => {
  isTablePickerOpen.value = true
}

const openScopePicker = () => {
  isScopePickerOpen.value = true

  if (!orgScopeStore.loaded && !orgScopeStore.loading) {
    void orgScopeStore.loadMyScopes().catch(() => {
      message.error('组织范围加载失败，请稍后重试')
    })
  }
}

const closeScopePicker = () => {
  isScopePickerOpen.value = false
}

const selectScope = (merchantId?: string, storeId?: string) => {
  if (!merchantId || !storeId) return

  const previousScope = selectedScope.value
  const selection = orgScopeStore.selectScope(merchantId, storeId)

  if (!selection) {
    message.warning('该组织暂不可用')
    return
  }

  if (
    previousScope?.merchantId !== selection.merchantId ||
    previousScope?.storeId !== selection.storeId
  ) {
    tableSeatStore.clearSelectedSeat()
  }

  message.success(`已切换至 ${selection.merchantName} / ${selection.storeName}`)
  closeScopePicker()
}

const handleLogout = async () => {
  tableSeatStore.clearSelectedSeat()
  orgScopeStore.resetSession()
  clearAuthSession()
  await router.replace({
    name: 'login',
  })
}
</script>

<template>
  <main class="tab-page home-page" aria-label="首页">
    <section class="home-topbar">
      <div class="home-wordmark">
        <span>WULIN SCALE</span>
        <strong>無鳞</strong>
      </div>

      <button class="home-logout" type="button" @click="handleLogout">退出</button>
    </section>

    <section class="home-hero" aria-label="無鳞首页">
      <div class="home-hero-mark" aria-hidden="true">
        <img :src="brandMarkUrl" alt="" />
      </div>

      <div class="home-hero-copy">
        <p>THE SCALE BAR</p>
        <h1>欢迎回来，{{ displayName }}</h1>
        <span>今晚的牌桌已经亮起</span>
      </div>
    </section>

    <section class="home-action-grid" aria-label="快捷入口">
      <button
        class="home-action-tile home-action-button"
        type="button"
        aria-haspopup="dialog"
        :aria-expanded="isTablePickerOpen"
        @click="openTablePicker"
      >
        <TableOutlined class="home-action-icon" />
        <span>TABLE</span>
        <strong>开台</strong>
        <small>牌桌管理</small>
      </button>

      <RouterLink class="home-action-tile" :to="{ name: 'menu' }">
        <FireOutlined class="home-action-icon" />
        <span>ORDER</span>
        <strong>点单</strong>
        <small>酒水小食</small>
      </RouterLink>
    </section>

    <button
      class="home-account-card home-scope-card"
      type="button"
      aria-haspopup="dialog"
      :aria-expanded="isScopePickerOpen"
      @click="openScopePicker"
    >
      <span class="home-account-avatar home-scope-avatar" aria-hidden="true">
        <ShopOutlined />
      </span>
      <span class="home-account-copy">
        <strong>{{ scopeCardTitle }}</strong>
        <small>{{ scopeCardSubtitle }}</small>
      </span>
      <ArrowRightOutlined class="home-card-arrow" />
    </button>

    <section class="home-mini-grid" aria-label="服务入口">
      <RouterLink class="home-mini-card" :to="{ name: 'orders' }">
        <span>
          <strong>订单</strong>
          <small>ORDERS</small>
        </span>
        <CrownOutlined class="home-mini-icon" />
      </RouterLink>

      <RouterLink class="home-mini-card" :to="{ name: 'mine' }">
        <span>
          <strong>筹码</strong>
          <small>WALLET</small>
        </span>
        <WalletOutlined class="home-mini-icon" />
      </RouterLink>
    </section>

    <RouterLink class="home-gift-card" :to="{ name: 'menu' }" aria-label="查看会员礼遇">
      <div>
        <p>GIFT 礼遇</p>
        <strong>本周会员局</strong>
        <span>精选酒水与专属牌桌权益</span>
      </div>
      <GiftOutlined class="home-gift-icon" />
      <ArrowRightOutlined class="home-card-arrow" />
    </RouterLink>

    <TableSeatPicker v-model:open="isTablePickerOpen" />

    <section
      v-if="isScopePickerOpen"
      class="table-picker-overlay"
      role="dialog"
      aria-modal="true"
      aria-label="切换组织"
      @click.self="closeScopePicker"
    >
      <div class="table-picker-sheet scope-picker-sheet">
        <header class="table-picker-head">
          <div>
            <p>ORGANIZATION</p>
            <h2>切换组织</h2>
          </div>

          <button class="table-picker-close" type="button" aria-label="关闭" @click="closeScopePicker">
            <CloseOutlined />
          </button>
        </header>

        <div class="table-picker-stats" aria-label="组织概览">
          <span>
            <strong>{{ orgScopeStore.scopes.length }}</strong>
            <small>商户</small>
          </span>
          <span>
            <strong>{{ orgScopeStore.storeCount }}</strong>
            <small>门店</small>
          </span>
        </div>

        <div class="table-group-list scope-group-list">
          <p v-if="orgScopeStore.loading" class="scope-empty-text">正在加载组织</p>
          <p v-else-if="!orgScopeStore.storeCount" class="scope-empty-text">暂无可用组织</p>

          <template v-else>
            <section
              v-for="scope in orgScopeStore.scopes"
              :key="scope.merchant?.id || scope.merchant?.name"
              class="table-group scope-group"
            >
              <header class="table-group-head">
                <div>
                  <span>MERCHANT</span>
                  <h3>{{ scope.merchant?.name || '未命名商户' }}</h3>
                </div>
                <small>{{ scope.stores?.length ?? 0 }} 个门店</small>
              </header>

              <div class="scope-store-list">
                <button
                  v-for="store in scope.stores"
                  :key="`${scope.merchant?.id}-${store.id}`"
                  class="scope-store-card"
                  :class="{
                    'is-selected':
                      selectedScope?.merchantId === scope.merchant?.id &&
                      selectedScope?.storeId === store.id,
                  }"
                  type="button"
                  :aria-pressed="
                    selectedScope?.merchantId === scope.merchant?.id &&
                    selectedScope?.storeId === store.id
                  "
                  @click="selectScope(scope.merchant?.id, store.id)"
                >
                  <span class="scope-store-copy">
                    <strong>{{ store.name || '未命名门店' }}</strong>
                    <small>{{ scope.merchant?.name || '未命名商户' }}</small>
                  </span>
                  <CheckCircleFilled
                    v-if="
                      selectedScope?.merchantId === scope.merchant?.id &&
                      selectedScope?.storeId === store.id
                    "
                    class="scope-store-check"
                  />
                </button>
              </div>
            </section>
          </template>
        </div>
      </div>
    </section>
  </main>
</template>
