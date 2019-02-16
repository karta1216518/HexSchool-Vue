import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 全域組件
import ProductItem from '@/components/ProductItem/ProductItem.vue'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.component('ProductItem', ProductItem)

Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
