import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// 以上 npm 內容 以下自訂

const app = createApp(App)
app.use(router)
app.use(VueAxios, axios)
// 全域帶入變數
// 不確定原因
// Uncaught (in promise) Error: Timed out getting app record for app null
// app.use(Loading, {
//   color: '#00BFFF',
//   loader: 'dots'
// })
app.component('Loading', Loading)

app.mount('#app')
