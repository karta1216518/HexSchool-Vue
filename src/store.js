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
    productDetail: [],
    cartList: [],
    totalPages: {},
    apiType: '1',
    loading: false
  },
  getters: {
    statisticsList (state) {
      let statisticsItem = {}
      // 初始化
      let idList = []
      let totalQty = []
      state.cartList.forEach(x => {
        // 判斷是否已在statisticsItem物件中，用以計算idList與totalQty
        statisticsItem[x.product_id]
          ? (idList = [...statisticsItem[x.product_id].id, x.id]) &&
            (totalQty = statisticsItem[x.product_id].qty + x.qty)
          : (idList = [x.id]) && (totalQty = x.qty)

        // 填入物件中
        statisticsItem[x.product_id] = {
          product: x.product,
          product_id: x.product_id,
          final_total: x.final_total,
          total: x.total,
          id: idList,
          qty: totalQty
        }
        idList = []
      })
      // 轉成陣列回傳並讓其有固定順序，否則操作購物車時會亂跳
      return (Object.values(statisticsItem)).sort((a, b) => {
        return a.product.price * 1 - b.product.price * 1
      })
    }
  },
  mutations: {
    // 商品
    SET_DATALIST (state, data) {
      state.productList = data.products
      if (data.pagination) state.totalPages = data.pagination.total_pages
      console.log(data)
    },
    SET_DATA (state, data) {
      state.productDetail = data.product
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
        context.commit('SET_DATALIST', response.data)
        context.commit('CHANGE_LOADING', false)
      })
    },
    GET_PRODUCT (context, id) {
      context.commit('CHANGE_LOADING', true)

      let getItemApi = this.state.apiUrl + 'product/' + id
      axios.get(getItemApi).then(function (response) {
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
    SET_CART (context, { item, qty }) {
      return new Promise(resolve => {
        context.commit('CHANGE_LOADING', true)

        let setCartApi = this.state.apiUrl + 'cart'
        let cartItem = { product_id: item.id, qty }
        axios.post(setCartApi, { data: cartItem }).then(function (response) {
          context.dispatch('GET_CARTLIST', response.data)
          console.log('加入購物車', response.data)
          context.commit('CHANGE_LOADING', false)
          resolve('已加入物品')
        })
      })
    },
    DELETE_CARTITEM (context, item) {
      return new Promise(resolve => {
        let deleteApi = `${this.state.apiUrl}cart/${item.id}`
        axios.delete(deleteApi).then(function (response) {
          context.dispatch('GET_CARTLIST', response.data)
          console.log('刪除購物車資料', response.data)
        })
        resolve('已刪除物品')
      })
    }
  }
})
