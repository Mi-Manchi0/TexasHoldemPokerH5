<script setup lang="ts">
const tabs = [
  {
    label: '無鳞',
    name: 'home',
    subLabel: 'The Scale Bar',
    to: { name: 'home' },
  },
  {
    label: '点单',
    name: 'menu',
    subLabel: 'Menu',
    to: { name: 'menu' },
  },
  {
    label: '订单',
    name: 'orders',
    subLabel: 'Orders',
    to: { name: 'orders' },
  },
  {
    label: '我的',
    name: 'mine',
    subLabel: 'Mine',
    to: { name: 'mine' },
  },
] as const
</script>

<template>
  <nav class="app-tabbar" aria-label="一级菜单">
    <RouterLink
      v-for="tab in tabs"
      :key="tab.name"
      v-slot="{ href, navigate, isExactActive }"
      class="app-tabbar-item"
      :to="tab.to"
      custom
    >
      <a
        :href="href"
        class="app-tabbar-link"
        :class="{ 'is-active': isExactActive }"
        :aria-current="isExactActive ? 'page' : undefined"
        @click="navigate"
      >
        <span class="app-tabbar-label">{{ tab.label }}</span>
        <small class="app-tabbar-sub">{{ tab.subLabel }}</small>
      </a>
    </RouterLink>
  </nav>
</template>
