import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "@/router"

import "@/assets/reset.css"

//引入mockserver.js---mock数据
import '@/mock/mockServe.js'

const app = createApp(App)

app.use(router)
app.mount('#app')
