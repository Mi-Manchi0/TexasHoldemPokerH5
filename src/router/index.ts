import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'
import MenuView from '@/views/MenuView.vue'
import MineView from '@/views/MineView.vue'
import OrdersView from '@/views/OrdersView.vue'
import PointsDepositView from '@/views/PointsDepositView.vue'
import WineStorageView from '@/views/WineStorageView.vue'
import { clearAuthSession, getToken } from '@/utils/auth'
import { setHttpConfig } from '@/utils/http'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: App,
    meta: {
      guestOnly: true,
    },
  },
  {
    path: '/',
    component: MainLayout,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: '',
        name: 'home',
        component: HomeView,
      },
      {
        path: 'menu',
        name: 'menu',
        component: MenuView,
      },
      {
        path: 'orders',
        name: 'orders',
        component: OrdersView,
      },
      {
        path: 'points-deposit',
        name: 'points-deposit',
        component: PointsDepositView,
      },
      {
        path: 'wine-storage',
        name: 'wine-storage',
        component: WineStorageView,
      },
      {
        path: 'mine',
        name: 'mine',
        component: MineView,
      },
    ],
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

const getSafeRedirect = (redirect: unknown) => {
  if (typeof redirect !== 'string') return '/'
  if (!redirect.startsWith('/') || redirect.startsWith('//')) return '/'
  return redirect
}

router.beforeEach((to) => {
  const hasToken = Boolean(getToken())
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
  const guestOnly = to.matched.some((record) => record.meta.guestOnly)

  if (requiresAuth && !hasToken) {
    return {
      name: 'login',
      query: {
        redirect: to.fullPath,
      },
    }
  }

  if (guestOnly && hasToken) {
    return getSafeRedirect(to.query.redirect)
  }

  return true
})

setHttpConfig({
  onTokenExpired: () => {
    clearAuthSession()

    if (router.currentRoute.value.name !== 'login') {
      void router.replace({
        name: 'login',
        query: {
          redirect: router.currentRoute.value.fullPath,
        },
      })
    }
  },
})
