import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'
import { setupVueRequest } from './logics/setVueRequest'

const app = createApp(App)

setupVueRequest()
app.use(createPinia())
app.mount('#app')
