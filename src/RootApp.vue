<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useMobileViewport } from '@/hooks/useMobileViewport'

useMobileViewport()
</script>

<template>
  <RouterView />
</template>
