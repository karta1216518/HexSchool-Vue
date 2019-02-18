import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全域組件
import ProductItem from '@/components/ProductItem/ProductItem.vue'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.component('ProductItem', ProductItem)

// import localeService from 'services/localeService'
// import VeeValidate from 'vee-validate'
// import tw from 'vee-validate/dist/locale/zh_TW'
// import en from 'vee-validate/dist/locale/en'
// global config
// const config = {
//   // 初始語系 (tw / en)
//   locale: localeService.getCurrentLang(),
//   // 觸發檢核的時機(輸入or離開輸入框)
//   events: 'input|blur',
//   // 預設各語系檢核失敗提示的文字 (需要對應 locale 設定)
//   dictionary: { tw, en }
// }

// Vue.use(VeeValidate, config)

// 掛載ElementUI中的message
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
