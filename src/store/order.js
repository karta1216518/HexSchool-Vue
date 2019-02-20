import axios from 'axios'

export default {
  state: {
    orderData: {
      // 避免getters計算空值報錯，預先放上空值
      personalData: {
        fristName: '',
        lastName: '',
        phone: '',
        address: '',
        email: ''
      }
    }
  },
  getters: {
    orderApiData (state) {
      let {
        personalData: inf,
        postData: post,
        paymentData: pay
      } = state.orderData
      return {
        data: {
          user: {
            name: inf.lastName + inf.fristName || '測試的名字',
            email: inf.email || 'test@mail.com',
            tel: inf.phone || '0912345678',
            address: inf.address || '測試的地址'
          },
          message: JSON.stringify({ post, pay }) // API未提供欄位，故其他資料放此處
        }
      }
    }
  },
  mutations: {
    SET_ORDERDATA (state, { type, data }) {
      state.orderData[type] = data
    }
  },
  actions: {
    PUSH_ORDERDATA (context) {
      context.commit('CHANGE_LOADING', true, { root: true })

      let getItemApi = this.state.apiUrl + 'order'
      let data = context.getters.orderApiData
      axios.post(getItemApi, data).then(function (response) {
        context.commit('CHANGE_LOADING', false, { root: true })
      })
    }
  }
}
