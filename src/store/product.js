import axios from 'axios'

export default {
  state: {
    productList: [],
    productDetail: [],
    totalPages: {},
    apiType: '1'
  },
  getters: {
  },
  mutations: {// 商品
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
    }

  },
  actions: {// 商品
    GET_PRODUCTLIST (context) {
      context.commit('CHANGE_LOADING', true, { root: true })

      let products =
        this.state.apiType === 'all'
          ? this.state.apiUrl + 'products/all'
          : this.state.apiUrl + 'products/?page=' + this.state.apiType

      axios.get(products).then(function (response) {
        context.commit('SET_DATALIST', response.data)
        context.commit('CHANGE_LOADING', false, { root: true })
      })
    },
    GET_PRODUCT (context, id) {
      context.commit('CHANGE_LOADING', true, { root: true })

      let getItemApi = this.state.apiUrl + 'product/' + id
      axios.get(getItemApi).then(function (response) {
        context.commit('SET_DATA', response.data)
        context.commit('CHANGE_LOADING', false, { root: true })
      })
    }

  }
}
