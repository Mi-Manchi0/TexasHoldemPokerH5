import { onBeforeUnmount, onMounted } from 'vue'

const KEYBOARD_HEIGHT_THRESHOLD = 90
const ORIENTATION_WIDTH_THRESHOLD = 40

const getActiveControl = () =>
  document.activeElement instanceof HTMLElement &&
  document.activeElement.matches('input, textarea, select, [contenteditable="true"]')

export function useMobileViewport() {
  let frameId = 0
  let resetFrameId = 0
  let stableAppHeight = 0
  let stableAppWidth = 0

  const resetPageScroll = () => {
    window.scrollTo(0, 0)

    if (document.documentElement.scrollTop) {
      document.documentElement.scrollTop = 0
    }

    if (document.body.scrollTop) {
      document.body.scrollTop = 0
    }
  }

  const applyViewportSize = () => {
    frameId = 0

    const viewport = window.visualViewport
    const viewportHeight = viewport?.height ?? window.innerHeight
    const viewportWidth = viewport?.width ?? window.innerWidth
    const viewportOffsetTop = viewport?.offsetTop ?? 0
    const layoutHeight = window.innerHeight
    const layoutWidth = window.innerWidth
    const nextWidth = Math.round(Math.max(layoutWidth, viewportWidth))
    const nextHeight = Math.round(Math.max(layoutHeight, viewportHeight))
    const widthChanged =
      stableAppWidth > 0 && Math.abs(nextWidth - stableAppWidth) > ORIENTATION_WIDTH_THRESHOLD
    const hasFocusedControl = getActiveControl()
    const keyboardHeight = Math.max(0, layoutHeight - viewportHeight)
    const isKeyboardOpen = hasFocusedControl && keyboardHeight > KEYBOARD_HEIGHT_THRESHOLD
    const rootStyle = document.documentElement.style

    if (!stableAppHeight || widthChanged || !hasFocusedControl) {
      stableAppHeight = nextHeight
      stableAppWidth = nextWidth
    } else {
      stableAppHeight = Math.max(stableAppHeight, nextHeight)
      stableAppWidth = nextWidth
    }

    rootStyle.setProperty('--app-height', `${stableAppHeight}px`)
    rootStyle.setProperty('--visual-height', `${Math.round(viewportHeight)}px`)
    rootStyle.setProperty('--visual-offset-top', `${Math.round(viewportOffsetTop)}px`)
    document.body.classList.toggle('is-keyboard-open', isKeyboardOpen)

    if (resetFrameId) {
      window.cancelAnimationFrame(resetFrameId)
    }

    resetFrameId = window.requestAnimationFrame(() => {
      resetFrameId = 0
      resetPageScroll()
    })
  }

  const syncViewportSize = () => {
    if (frameId) {
      window.cancelAnimationFrame(frameId)
    }

    frameId = window.requestAnimationFrame(applyViewportSize)
  }

  onMounted(() => {
    syncViewportSize()
    window.addEventListener('resize', syncViewportSize)
    window.addEventListener('orientationchange', syncViewportSize)
    window.addEventListener('focusin', syncViewportSize)
    window.addEventListener('focusout', syncViewportSize)
    window.visualViewport?.addEventListener('resize', syncViewportSize)
    window.visualViewport?.addEventListener('scroll', syncViewportSize)
  })

  onBeforeUnmount(() => {
    if (frameId) {
      window.cancelAnimationFrame(frameId)
    }

    if (resetFrameId) {
      window.cancelAnimationFrame(resetFrameId)
    }

    document.body.classList.remove('is-keyboard-open')
    document.documentElement.style.removeProperty('--app-height')
    document.documentElement.style.removeProperty('--visual-height')
    document.documentElement.style.removeProperty('--visual-offset-top')
    window.removeEventListener('resize', syncViewportSize)
    window.removeEventListener('orientationchange', syncViewportSize)
    window.removeEventListener('focusin', syncViewportSize)
    window.removeEventListener('focusout', syncViewportSize)
    window.visualViewport?.removeEventListener('resize', syncViewportSize)
    window.visualViewport?.removeEventListener('scroll', syncViewportSize)
  })
}
