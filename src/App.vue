<script setup lang="ts">
import { message } from "ant-design-vue"
import { Maximize2, Minimize2, Settings } from "lucide-vue-next"
import {
	computed,
	onBeforeUnmount,
	onMounted,
	ref,
	watch,
} from "vue"
import { useRoute, useRouter } from "vue-router"
import type {
	PostApiAuthV1LoginRequest,
} from "@/services/basis/basis"
import { postApiAuthV1Login } from "@/services/basis/basis"
import {
	getLastLoginCredentials,
	saveAuthSession,
	saveLastLoginCredentials,
} from "@/utils/auth"
import { normalizeUrl } from "@/utils"
import { useOrgScopeStore } from "@/stores/orgScope"
import brandMarkUrl from "@/assets/bgc.jpg"

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
const orgScopeStore = useOrgScopeStore()
const lastLoginCredentials = getLastLoginCredentials()

const loginAccount = ref(lastLoginCredentials.account)
const loginPassword = ref(lastLoginCredentials.password)
const isLoginSubmitting = ref(false)
const isFullscreen = ref(false)
const isFullscreenSupported = ref(false)
const isImmersiveMode = ref(false)
const isSettingsOpen = ref(false)
const normalizedBrandMarkUrl = normalizeUrl(brandMarkUrl)

const isDisplayExpanded = computed(
	() => isFullscreen.value || isImmersiveMode.value,
)
const fullscreenLabel = computed(() =>
	isDisplayExpanded.value ? "退出全屏" : "全屏展示",
)
const getSafeRedirect = (redirect: unknown) => {
	if (typeof redirect !== "string") return "/"
	if (!redirect.startsWith("/") || redirect.startsWith("//"))
		return "/"
	return redirect
}
const loginRedirect = computed(() =>
	getSafeRedirect(route.query.redirect),
)

const loginWithPassword = (requestData: PostApiAuthV1LoginRequest) =>
	postApiAuthV1Login(requestData, { withToken: false })

const handleLogin = async () => {
	const phone = loginAccount.value.trim()
	const password = loginPassword.value

	if (!phone) {
		message.warning("请输入账号")
		return
	}

	if (!password) {
		message.warning("请输入密码")
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
				try {
					await orgScopeStore.loadMyScopes(phone)
				} catch {
					message.error("组织范围加载失败，请稍后重试")
					return
				}

				message.success("登录成功")
				await router.replace(loginRedirect.value)
			} else {
				message.error("登录失败：接口未返回登录凭证")
			}
		} catch {
			message.error("登录状态保存失败，请检查浏览器存储权限")
		}
	} catch {
		// 请求层会展示后端返回的错误提示，这里只负责恢复提交状态。
	} finally {
		isLoginSubmitting.value = false
	}
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
		await (getFullscreenElement()
			? exitPageFullscreen()
			: requestPageFullscreen())
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
	document.addEventListener("fullscreenchange", syncFullscreenState)
	document.addEventListener(
		"webkitfullscreenchange",
		syncFullscreenState,
	)
	document.addEventListener(
		"mozfullscreenchange",
		syncFullscreenState,
	)
	document.addEventListener("MSFullscreenChange", syncFullscreenState)
})

watch(isImmersiveMode, enabled => {
	document.body.classList.toggle("is-immersive-locked", enabled)
})

onBeforeUnmount(() => {
	isImmersiveMode.value = false
	document.body.classList.remove("is-immersive-locked")
	document.removeEventListener(
		"fullscreenchange",
		syncFullscreenState,
	)
	document.removeEventListener(
		"webkitfullscreenchange",
		syncFullscreenState,
	)
	document.removeEventListener(
		"mozfullscreenchange",
		syncFullscreenState,
	)
	document.removeEventListener(
		"MSFullscreenChange",
		syncFullscreenState,
	)
})
</script>

<template>
	<main
		class="login-page"
		:class="{ 'is-immersive': isImmersiveMode }"
		aria-label="登录"
	>
		<section class="login-shell" aria-label="無鳞登录">
			<img
				class="login-mark"
				:src="normalizedBrandMarkUrl"
				alt=""
				aria-hidden="true"
			/>

			<nav class="top-nav" aria-label="登录导航">
				<div class="settings-area">
					<button
						class="settings-button"
						type="button"
						aria-label="设置"
						:aria-expanded="isSettingsOpen"
						@click="toggleSettings"
					>
						<Settings />
					</button>

					<div
						v-if="isSettingsOpen"
						class="settings-menu"
						role="menu"
					>
						<button
							class="settings-menu-item"
							type="button"
							role="menuitem"
							:aria-pressed="isDisplayExpanded"
							@click="toggleFullscreen"
						>
							<Minimize2
								v-if="isDisplayExpanded"
								class="settings-menu-icon"
							/>
							<Maximize2 v-else class="settings-menu-icon" />
							<span>{{ fullscreenLabel }}</span>
						</button>
					</div>
				</div>
			</nav>

			<div class="login-content">
				<div class="brand-lockup">
					<h1>無鳞</h1>
					<p>
						<span>The Scale Bar</span>
						<span>德州 | 鸡尾酒</span>
					</p>
				</div>

				<form
					class="login-form"
					aria-label="账号密码登录"
					@submit.prevent="handleLogin"
				>
					<div class="login-actions">
						<label class="login-field">
							<span>账号</span>
							<input
								v-model="loginAccount"
								class="login-input"
								type="text"
								placeholder="请输入账号"
								autocomplete="username"
								:disabled="isLoginSubmitting"
							/>
						</label>

						<label class="login-field">
							<span>密码</span>
							<input
								v-model="loginPassword"
								class="login-input"
								type="password"
								placeholder="请输入密码"
								autocomplete="current-password"
								:disabled="isLoginSubmitting"
							/>
						</label>
					</div>

					<button
						class="account-login"
						type="submit"
						:disabled="isLoginSubmitting"
					>
						{{ isLoginSubmitting ? "登录中..." : "登录" }}
					</button>
				</form>
			</div>

			<div class="home-indicator" aria-hidden="true"></div>
		</section>
	</main>
</template>
