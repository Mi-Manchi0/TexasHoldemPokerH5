<script setup lang="ts">
import {
  FullscreenExitOutlined,
  FullscreenOutlined,
  SettingOutlined,
} from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type {
  PostApiAuthV1LoginRequest,
  PostApiAuthV1LoginResponse,
} from '@/services/basis/basis'
import {
  getLastLoginCredentials,
  saveAuthSession,
  saveLastLoginCredentials,
} from '@/utils/auth'
import { basisHttp } from '@/utils/http'

type FullscreenDocument = Document & {
  msExitFullscreen?: () => Promise<void> | void
  msFullscreenElement?: Element | null
  mozCancelFullScreen?: () => Promise<void> | void
  mozFullScreenElement?: Element | null
  webkitExitFullscreen?: () => Promise<void> | void
  webkitFullscreenElement?: Element | null
}

type FullscreenElement = HTMLElement & {
  msRequestFullscreen?: () => Promise<void> | void
  mozRequestFullScreen?: () => Promise<void> | void
  webkitRequestFullscreen?: () => Promise<void> | void
}

const router = useRouter()
const route = useRoute()
const lastLoginCredentials = getLastLoginCredentials()

const loginAccount = ref(lastLoginCredentials.account)
const loginPassword = ref(lastLoginCredentials.password)
const isLoginSubmitting = ref(false)
const isFullscreen = ref(false)
const isFullscreenSupported = ref(false)
const isImmersiveMode = ref(false)
const isSettingsOpen = ref(false)

const isDisplayExpanded = computed(() => isFullscreen.value || isImmersiveMode.value)
const fullscreenLabel = computed(() => (isDisplayExpanded.value ? '退出全屏' : '全屏展示'))
const getSafeRedirect = (redirect: unknown) => {
  if (typeof redirect !== 'string') return '/'
  if (!redirect.startsWith('/') || redirect.startsWith('//')) return '/'
  return redirect
}
const loginRedirect = computed(() =>
  getSafeRedirect(route.query.redirect),
)

const loginWithPassword = (requestData: PostApiAuthV1LoginRequest) =>
  basisHttp.post<PostApiAuthV1LoginResponse>(
    {
      data: requestData,
      url: '/api/auth/v1/login',
    },
    {
      withToken: false,
    },
  )

const handleLogin = async () => {
  const phone = loginAccount.value.trim()
  const password = loginPassword.value

  if (!phone) {
    message.warning('请输入账号')
    return
  }

  if (!password) {
    message.warning('请输入密码')
    return
  }

  if (isLoginSubmitting.value) return

  isLoginSubmitting.value = true

  try {
    const loginResult = await loginWithPassword({ password, phone })

    try {
      saveLastLoginCredentials({
        account: phone,
        password,
      })

      if (saveAuthSession(loginResult)) {
        message.success('登录成功')
        await router.replace(loginRedirect.value)
      } else {
        message.error('登录失败：接口未返回登录凭证')
      }
    } catch {
      message.error('登录状态保存失败，请检查浏览器存储权限')
    }
  } catch {
    // 请求层会展示后端返回的错误提示，这里只负责恢复提交状态。
  } finally {
    isLoginSubmitting.value = false
  }
}

const syncViewportSize = () => {
  const viewport = window.visualViewport
  const viewportHeight = viewport?.height ?? window.innerHeight
  const keyboardOffset = Math.max(0, window.innerHeight - viewportHeight - (viewport?.offsetTop ?? 0))
  const keyboardLift = keyboardOffset > 0 ? Math.min(24, Math.round(keyboardOffset * 0.08)) : 0
  const rootStyle = document.documentElement.style

  rootStyle.setProperty('--app-height', `${viewportHeight}px`)
  rootStyle.setProperty('--keyboard-offset', `${keyboardLift}px`)
  window.scrollTo(0, 0)
}

const getFullscreenElement = () => {
  const fullscreenDocument = document as FullscreenDocument

  return (
    document.fullscreenElement ||
    fullscreenDocument.webkitFullscreenElement ||
    fullscreenDocument.mozFullScreenElement ||
    fullscreenDocument.msFullscreenElement ||
    null
  )
}

const requestPageFullscreen = () => {
  const pageElement = document.documentElement as FullscreenElement

  return (
    pageElement.requestFullscreen?.() ||
    pageElement.webkitRequestFullscreen?.() ||
    pageElement.mozRequestFullScreen?.() ||
    pageElement.msRequestFullscreen?.()
  )
}

const exitPageFullscreen = () => {
  const fullscreenDocument = document as FullscreenDocument

  return (
    document.exitFullscreen?.() ||
    fullscreenDocument.webkitExitFullscreen?.() ||
    fullscreenDocument.mozCancelFullScreen?.() ||
    fullscreenDocument.msExitFullscreen?.()
  )
}

const syncFullscreenSupport = () => {
  const pageElement = document.documentElement as FullscreenElement

  isFullscreenSupported.value = Boolean(
    pageElement.requestFullscreen ||
      pageElement.webkitRequestFullscreen ||
      pageElement.mozRequestFullScreen ||
      pageElement.msRequestFullscreen,
  )
}

const syncFullscreenState = () => {
  isFullscreen.value = Boolean(getFullscreenElement())

  if (isFullscreen.value) {
    isImmersiveMode.value = false
  }
}

const toggleFullscreen = async () => {
  isSettingsOpen.value = false

  if (isImmersiveMode.value) {
    isImmersiveMode.value = false
    return
  }

  if (!isFullscreenSupported.value) {
    isImmersiveMode.value = true
    return
  }

  try {
    await (getFullscreenElement() ? exitPageFullscreen() : requestPageFullscreen())
    isImmersiveMode.value = false
  } catch {
    if (!getFullscreenElement()) {
      isImmersiveMode.value = true
    }
  } finally {
    syncFullscreenState()
  }
}

const toggleSettings = () => {
  isSettingsOpen.value = !isSettingsOpen.value
}

onMounted(() => {
  syncFullscreenSupport()
  syncFullscreenState()
  syncViewportSize()
  document.addEventListener('fullscreenchange', syncFullscreenState)
  document.addEventListener('webkitfullscreenchange', syncFullscreenState)
  document.addEventListener('mozfullscreenchange', syncFullscreenState)
  document.addEventListener('MSFullscreenChange', syncFullscreenState)
  window.addEventListener('resize', syncViewportSize)
  window.addEventListener('orientationchange', syncViewportSize)
  window.addEventListener('focusin', syncViewportSize)
  window.addEventListener('focusout', syncViewportSize)
  window.visualViewport?.addEventListener('resize', syncViewportSize)
  window.visualViewport?.addEventListener('scroll', syncViewportSize)
})

watch(isImmersiveMode, (enabled) => {
  document.body.classList.toggle('is-immersive-locked', enabled)
})

onBeforeUnmount(() => {
  isImmersiveMode.value = false
  document.body.classList.remove('is-immersive-locked')
  document.documentElement.style.removeProperty('--app-height')
  document.documentElement.style.removeProperty('--keyboard-offset')
  document.removeEventListener('fullscreenchange', syncFullscreenState)
  document.removeEventListener('webkitfullscreenchange', syncFullscreenState)
  document.removeEventListener('mozfullscreenchange', syncFullscreenState)
  document.removeEventListener('MSFullscreenChange', syncFullscreenState)
  window.removeEventListener('resize', syncViewportSize)
  window.removeEventListener('orientationchange', syncViewportSize)
  window.removeEventListener('focusin', syncViewportSize)
  window.removeEventListener('focusout', syncViewportSize)
  window.visualViewport?.removeEventListener('resize', syncViewportSize)
  window.visualViewport?.removeEventListener('scroll', syncViewportSize)
})
</script>

<template>
  <main class="login-page" :class="{ 'is-immersive': isImmersiveMode }" aria-label="登录">
    <section class="login-shell" aria-label="SELF SHERO 登录">
      <div class="soft-shape soft-shape-pink" aria-hidden="true"></div>
      <div class="soft-shape soft-shape-blue" aria-hidden="true"></div>
      <div class="line-texture" aria-hidden="true"></div>

      <nav class="top-nav" aria-label="登录导航">
        <div class="settings-area">
          <button
            class="settings-button"
            type="button"
            aria-label="设置"
            :aria-expanded="isSettingsOpen"
            @click="toggleSettings"
          >
            <SettingOutlined />
          </button>

          <div v-if="isSettingsOpen" class="settings-menu" role="menu">
            <button
              class="settings-menu-item"
              type="button"
              role="menuitem"
              :aria-pressed="isDisplayExpanded"
              @click="toggleFullscreen"
            >
              <FullscreenExitOutlined v-if="isDisplayExpanded" class="settings-menu-icon" />
              <FullscreenOutlined v-else class="settings-menu-icon" />
              <span>{{ fullscreenLabel }}</span>
            </button>
          </div>
        </div>
      </nav>

      <div class="brand-lockup">
        <h1>SCALE<br />WULIN</h1>
        <p><span>無鳞</span><span>德州 | 鸡尾酒</span></p>
      </div>

      <div class="login-actions" aria-label="账号密码登录">
        <input
          v-model="loginAccount"
          class="login-option login-input"
          type="text"
          placeholder="请输入账号"
          autocomplete="username"
          :disabled="isLoginSubmitting"
          @keyup.enter="handleLogin"
        />

        <input
          v-model="loginPassword"
          class="login-option login-input"
          type="password"
          placeholder="请输入密码"
          autocomplete="current-password"
          :disabled="isLoginSubmitting"
          @keyup.enter="handleLogin"
        />
      </div>

      <button
        class="account-login"
        type="button"
        :disabled="isLoginSubmitting"
        @click="handleLogin"
      >
        {{ isLoginSubmitting ? '登录中...' : '登录' }}
      </button>

      <div class="home-indicator" aria-hidden="true"></div>
    </section>
  </main>
</template>
