import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import { RouterView } from 'vue-router'
import { setupVueRequest } from './logics/setVueRequest'
import { router } from './router'

const app = createApp(RouterView)

setupVueRequest()
app.use(createPinia())
app.use(router)
app.mount('#app')
