<template>
  <div class="checkoutSummary">
    <input
      type="checkbox"
      class="toggleSummary"
      id="summaryTitle"
      checked
    />
    <div class="checkedHandler">
      <label
        for="summaryTitle"
        class="title"
      >
        購物清單
        <span class="open toggleBtn">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-up"></use>
          </svg>
        </span>
        <span class="close toggleBtn">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-down"></use>
          </svg>
        </span>
      </label>
      <div class="toggleSummaryArea">
        <template v-for="item in statisticsList">
          <CheckoutItem
            :count="item.qty"
            :name="item.product.title"
            :price="item.total"
            :imgUrl="item.product.image"
            :key="item.product_id"
          />
        </template>
      </div>
    </div>
    <input
      type="checkbox"
      class="toggleSummary"
      id="orderSummary"
      checked
    />
    <div class="checkedHandler">
      <label
        class="title"
        for="orderSummary"
      >
        訂單摘要
        <span class="open toggleBtn">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-up"></use>
          </svg>
        </span>
        <span class="close toggleBtn">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-down"></use>
          </svg>
        </span>
      </label>
      <div class="toggleSummaryArea">
        <div class="container">
          <div class="summaryItem">
            小計
            <span class="summaryItemNum">{{`NT$${totalPrice}`}}</span>
          </div>
          <div class="summaryItem">
            活動折扣
            <span class="summaryItemNum discount">{{`NT$${totalPrice-finalTotalPrice}`}}</span>
          </div>
          <div class="summaryItem">
            運費
            <span class="summaryItemNum">NT$ 0</span>
          </div>
          <div class="summaryItem summaryTotal">
            總計
            <span class="summaryItemNum">{{`NT$${finalTotalPrice}`}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutItem from '@/components/Checkout/CheckoutItem.vue'

export default {
  name: 'checkoutSummary',
  components: {
    CheckoutItem
  },
  data () {
    return {}
  },
  computed: {
    cartList () {
      return this.$store.state.cart.cartList
    },
    statisticsList () {
      return this.$store.getters.statisticsList
    },
    totalPrice () {
      return this.cartList.reduce((total, item) => {
        return (total += item.total)
      }, 0)
    },
    finalTotalPrice () {
      return this.cartList.reduce((total, item) => {
        return (total += item.final_total)
      }, 0)
    }
  },
  created () {}
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"
.toggleSummary
  display: none
  &:checked + .checkedHandler>.title > .open
    opacity: 1
  &:checked + .checkedHandler>.title > .close
    opacity: 0
  &:checked + .checkedHandler>.toggleSummaryArea
    opacity: 1
    height: auto
.toggleSummaryArea
  opacity: 0
  height: 0px
  margin: 0 10px 20px 10px
  border: 2px solid $cLite
  overflow: hidden
  transition: .5s
.checkoutSummary
  min-width: 300px
  width: 100%
  .title
    height: 60px
    background-color: $cLite
    margin: 0 10px
    font-size: 1.2*$fontSize
    font-weight: 600
    color: $cPri
    position: relative
    cursor: pointer
    +center()
.toggleBtn
  position: absolute
  right: 10px
  top: 50%
  transform: translateY(-50%)
  +size(20px)
  +center()
.open
  opacity: 0
.close
  opacity: 1
.container
  max-width: 360px
  margin: 0 auto
.summaryItem
  font-size: $fontSize
  display: flex
  margin: 8px
.summaryItemNum
  margin-left: auto
.discount
  color: red
  text-decoration: line-through
.summaryItem.summaryTotal
  margin-top: 16px
  font-size: 1.2*$fontSize
  font-weight: 600
@media only screen and (max-width: 768px)
  .checkoutSummary
    margin: 0 auto
    max-width: none
</style>
