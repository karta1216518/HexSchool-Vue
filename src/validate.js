import Vue from 'vue'
import VeeValidate from 'vee-validate'

const config = {
  errorBagName: 'errors', // change if property conflicts.
  fieldsBagName: 'fields',
  delay: 0,
  locale: 'zh_CN',
  strict: true,
  enableAutoClasses: false,
  classNames: {
    touched: 'touched', // the control has been blurred
    untouched: 'untouched', // the control hasn't been blurred
    valid: 'valid', // model is valid
    invalid: 'invalid', // model is invalid
    pristine: 'pristine', // control has not been interacted with
    dirty: 'dirty' // control has been interacted with
  },
  events: 'blur',
  inject: true
}

var dict = {
  zh_CN: {
    messages: {
      required: (field) => '請填入' + field,
      confirmed: (field) => '兩次輸入的密碼不一致',
      alpha: (field) => '輸入的格式錯誤',
      min: (field) => field + '的長度有誤'
    },
    attributes: {
      lastName: '姓氏',
      fristName: '名字',
      phone: '電話',
      address: '地址',
      city: '城市',
      area: '地區',
      selectStore: '商店名稱',
      cardId: '信用卡卡號',
      numCVC: '末三碼',
      email: '信箱'
    }
  }
}
VeeValidate.Validator.localize('zh_CN', dict.zh_CN)

Vue.use(VeeValidate, config)
