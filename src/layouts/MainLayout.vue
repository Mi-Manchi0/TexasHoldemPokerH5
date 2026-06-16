<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterView } from 'vue-router'
import AppTabBar from '@/components/AppTabBar.vue'
import { useOrgScopeStore } from '@/stores/orgScope'

const orgScopeStore = useOrgScopeStore()

onMounted(() => {
  if (!orgScopeStore.loaded && !orgScopeStore.loading) {
    void orgScopeStore.loadMyScopes().catch(() => {
      // The home card keeps the empty/error state available for retry.
    })
  }
})
</script>

<template>
  <div class="app-layout">
    <RouterView />
    <AppTabBar />
  </div>
</template>
