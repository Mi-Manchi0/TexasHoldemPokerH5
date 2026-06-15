<script setup lang="ts">
import { RouterView } from 'vue-router'
import AppTabBar from '@/components/AppTabBar.vue'
</script>

<template>
  <div class="app-layout">
    <RouterView />
    <AppTabBar />
  </div>
</template>
