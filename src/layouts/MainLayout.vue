<script setup lang="ts">
import { message } from 'ant-design-vue'
import { onBeforeUnmount, onMounted, watch } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import AppTabBar from '@/components/AppTabBar.vue'
import { useNotificationStore } from '@/stores/notification'
import { useOrgScopeStore } from '@/stores/orgScope'

const route = useRoute()
const orgScopeStore = useOrgScopeStore()
const notificationStore = useNotificationStore()

onMounted(() => {
  notificationStore.connect()
  void notificationStore.refreshUnreadCount()

  if (!orgScopeStore.loaded && !orgScopeStore.loading) {
    void orgScopeStore.loadMyScopes().catch(() => {
      // The home card keeps the empty/error state available for retry.
    })
  }
})

onBeforeUnmount(() => {
  notificationStore.disconnect()
})

watch(
  () => notificationStore.lastReceivedAt,
  (lastReceivedAt) => {
    if (!lastReceivedAt || route.name === 'messages') return

    const content = notificationStore.latestItem?.content || '收到新的站内信通知'
    message.info(content)
  },
)
</script>

<template>
  <div class="app-layout">
    <RouterView />
    <AppTabBar />
  </div>
</template>
