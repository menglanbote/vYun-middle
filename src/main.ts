import { createApp } from 'vue'
import { createPinia } from 'pinia'
import 'virtual:windi.css'
import App from './App.vue'
import router from './router'
import '@/styles/index.less'

import { useElIcon } from '@/utils/setGlobal';


const app = createApp(App)

app.use(createPinia())
app.use(router)
useElIcon(app) // 注册Ant图标
app.mount('#app')
