<template>
  <div class="cartSummary">
    <div class="summaryTitle">訂單摘要</div>
    <div class="container">
      <div class="summaryInf">
        <div class="summaryItem">
          小計
          <span class="summaryNum">NT${{totalPrice}}</span>
        </div>
        <div class="summaryItem">
          折扣
          <span class="summaryNum">NT${{finalTotalPrice-totalPrice}}</span>
        </div>
        <div class="summaryTotal">
          總計
          <span class="summaryNum">NT${{finalTotalPrice}}</span>
        </div>
      </div>
    </div>
    <router-link
      to="/checkout"
      class="checkout"
    >結帳</router-link>
  </div>
</template>

<script>
export default {
  name: "cartSummary",
  data() {
    return {};
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
    totalPrice() {
      return this.cartList.reduce((total, item) => {
        return (total += item.total);
      }, 0);
    },
    finalTotalPrice() {
      return this.cartList.reduce((total, item) => {
        return (total += item.final_total);
      }, 0);
    }
  }
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"

.cartSummary
  min-width: 240px
  margin: 0 20px
  background-color: $cPri
  color: #fff
  height: 100%
  position: sticky !important
  top: 20px
  .container
    max-width: 440px
    margin: 0 auto
  .summaryTitle,.checkout
    height: 60px
    font-size: 1.2*$fontSize
    font-weight: 600
    +center()
  .summaryTitle
    border-bottom: 2px solid $cBText
    margin: 0 20px
  .summaryItem,.summaryTotal
    margin: 8px 20px
    display: flex
    .summaryNum
      display: block
      margin-left: auto
  .summaryTotal
    margin: 16px 20px
    font-size: $fontSize
    font-weight: 600
  .checkout
    background-color: $cSelect
    +hover()
@media only screen and (max-width: $rwdM)
  .cartSummary
    margin-top: 20px 
    background-color: #fff
    color: #000
    .summaryTitle
      background-color: $cLite
      border-bottom: none

</style>
