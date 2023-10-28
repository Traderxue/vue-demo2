
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import i18n from "@/lang/index.js"

import App from './App.vue'
import router from './router'
import 'vant/lib/index.css';
import vant from 'vant'

const app = createApp(App)

app.use(i18n)

app.use(vant)

app.use(createPinia())
app.use(router)

app.mount('#app')
