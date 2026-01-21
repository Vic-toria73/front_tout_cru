import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './assets/main.css'
import Toast, { type PluginOptions } from "vue-toastification";
import 'vue-toastification/dist/index.css'

const app = createApp(App)

const options: PluginOptions = {
  position: 'bottom-right',
  timeout: 3000,
  closeOnClick: true,
  pauseOnHover: true,
}

app.use(createPinia())
app.use(router)
app.use(Toast, options)
app.mount('#app')
