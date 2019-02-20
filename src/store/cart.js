import axios from 'axios'

export default {
  state: {
    cartList: []
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
        return a.product.origin_price - b.product.origin_price
      })
    }
  },
  mutations: { // 購物車
    SET_CARTDATA (state, data) {
      state.cartList = data.data.carts
    }
  },
  actions: {
    // 購物車
    GET_CARTLIST (context) {
      context.commit('CHANGE_LOADING', true, { root: true })

      let getListApi = this.state.apiUrl + 'cart'
      axios.get(getListApi).then(function (response) {
        context.commit('SET_CARTDATA', response.data)
        console.log('取得購物車資料', response.data)
        context.commit('CHANGE_LOADING', false, { root: true })
      })
    },
    SET_CART (context, { item, qty }) {
      return new Promise(resolve => {
        context.commit('CHANGE_LOADING', true, { root: true })

        let setCartApi = this.state.apiUrl + 'cart'
        let cartItem = { product_id: item.id, qty }
        axios.post(setCartApi, { data: cartItem }).then(function (response) {
          context.dispatch('GET_CARTLIST', response.data)
          console.log('加入購物車', response.data)
          context.commit('CHANGE_LOADING', false, { root: true })
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
    } }
}
