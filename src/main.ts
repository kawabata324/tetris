import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from '../src/config/router/index'

createApp(App).use(router).mount('#app')
