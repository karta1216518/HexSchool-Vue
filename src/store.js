import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  strict: true,
  state: {
    apiUrl: 'https://vue-course-api.hexschool.io/api/karta12165188/',
    productList: [],
    cartList: [],
    totalPages: {},
    apiType: '1',
    loading: false
  },
  mutations: {
    // 商品
    SET_DATA (state, data) {
      state.productList = data.products
      if (data.pagination) state.totalPages = data.pagination.total_pages
      console.log(data)
    },
    SET_APITYPE (state, type) {
      state.apiType = type
    },

    // 購物車
    SET_CARTDATA (state, data) {
      state.cartList = data.data.carts
    },

    // Loadong圖示
    CHANGE_LOADING (state, type) {
      state.loading = type
    }
  },
  actions: {
    // 商品
    GET_PRODUCTLIST (context) {
      context.commit('CHANGE_LOADING', true)

      let products =
        this.state.apiType === 'all'
          ? this.state.apiUrl + 'products/all'
          : this.state.apiUrl + 'products/?page=' + this.state.apiType

      axios.get(products).then(function (response) {
        context.commit('SET_DATA', response.data)
        context.commit('CHANGE_LOADING', false)
      })
    },

    // 購物車
    GET_CARTLIST (context) {
      context.commit('CHANGE_LOADING', true)

      let getListApi = this.state.apiUrl + 'cart'
      axios.get(getListApi).then(function (response) {
        context.commit('SET_CARTDATA', response.data)
        console.log('取得購物車資料', response.data)
        context.commit('CHANGE_LOADING', false)
      })
    },
    SET_CART (context, item) {
      context.commit('CHANGE_LOADING', true)

      let setCartApi = this.state.apiUrl + 'cart'
      let cartItem = { product_id: item.id, qty: 1 }
      axios.post(setCartApi, { data: cartItem }).then(function (response) {
        context.dispatch('GET_CARTLIST', response.data)
        console.log('加入購物車', response.data)
        context.commit('CHANGE_LOADING', false)
      })
    },
    DELETE_CARTITEM (context, item) {
      let deleteApi = `${this.state.apiUrl}cart/${item.id}`
      axios.delete(deleteApi).then(function (response) {
        context.dispatch('GET_CARTLIST', response.data)
        console.log('刪除購物車', response.data)
      })
    }
  }
})
