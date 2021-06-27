import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import emitter from './assets/javascript/emitter'
import router from './router'
import VueAxios from 'vue-axios'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

// import Swiper core and required modules
import SwiperCore, {
  Pagination, Navigation
} from 'swiper/core'

// vee validation
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import VeeValidateRules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
import 'bootstrap'

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true
})
setLocale('zh_TW')

Object.keys(VeeValidateRules).forEach((rule) => {
  defineRule(rule, VeeValidateRules[rule])
})
// 以上 npm 內容 以下自訂

const app = createApp(App)
app.config.globalProperties.$emitter = emitter

// install Swiper modules
SwiperCore.use([Pagination, Navigation])
app.use(router)
app.use(VueAxios, axios)
app.use(VueSweetalert2)

// 全域帶入變數
// 不確定原因
// Uncaught (in promise) Error: Timed out getting app record for app null
// app.use(Loading, {
//   color: '#00BFFF',
//   loader: 'dots'
// })
app.component('Loading', Loading)
app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
app.mount('#app')
