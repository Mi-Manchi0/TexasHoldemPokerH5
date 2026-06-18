import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import RootApp from './RootApp.vue'
import { setupVueRequest } from './logics/setVueRequest'
import { router } from './router'

const app = createApp(RootApp)

setupVueRequest()
app.use(createPinia())
app.use(router)
app.mount('#app')
