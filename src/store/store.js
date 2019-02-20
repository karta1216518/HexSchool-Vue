import Vue from 'vue'
import Vuex from 'vuex'
import product from './product'
import cart from './cart'
import order from './order'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  modules: {
    product,
    cart,
    order
  },
  state: {
    apiUrl: 'https://vue-course-api.hexschool.io/api/karta12165188/',
    loading: false
  },
  mutations: {
    // Loadong圖示
    CHANGE_LOADING (state, type) {
      state.loading = type
    }
  },
  actions: {}
})
