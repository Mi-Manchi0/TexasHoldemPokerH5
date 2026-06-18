import { fileURLToPath, URL } from 'node:url'
import { defineConfig, loadEnv, type ProxyOptions } from 'vite'
import vue from '@vitejs/plugin-vue'

const httpsRE = /^https:\/\//

const createProxy = (proxyText?: string): Record<string, string | ProxyOptions> => {
  if (!proxyText) return {}

  try {
    const proxyList = JSON.parse(proxyText) as Array<[string, string]>

    return proxyList.reduce<Record<string, ProxyOptions>>((proxy, [prefix, target]) => {
      const isSocketIoProxy = prefix === '/socket.io' || prefix === '/socket.io/'

      proxy[prefix] = {
        changeOrigin: true,
        target,
        ws: true,
        ...(isSocketIoProxy
          ? {}
          : { rewrite: (path) => path.replace(new RegExp(`^${prefix}`), '') }),
        ...(httpsRE.test(target) ? { secure: false } : {}),
      }
      return proxy
    }, {})
  } catch (error) {
    console.warn('VITE_PROXY parse failed:', error)
    return {}
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return {
    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
        '@bfr/ytt': '@f_anaan/ytt',
      },
    },
    server: {
      proxy: createProxy(env.VITE_PROXY),
    },
  }
})
