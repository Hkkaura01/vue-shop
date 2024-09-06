import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/reset.css'
import Antd from 'ant-design-vue' // Import Ant Design Vue

const app = createApp(App)

app.use(router)
app.use(Antd) // Use Ant Design Vue

app.mount('#app')