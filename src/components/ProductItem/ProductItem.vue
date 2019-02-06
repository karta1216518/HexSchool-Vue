<template>
  <div class="productItem">
    <div class="label">本日精選</div>
    <div class="colletIcon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-heart"></use>
      </svg>
    </div>
    <div class="productImg">
      <img src="https://fakeimg.pl/300x315/">
    </div>
    <div class="productInf">
      <div class="productName">焦糖馬卡龍</div>
      <div class="productPrice">NT$ 450</div>
    </div>
    <div class="addTotCart">加入購物車</div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  data() {
    return {};
  }
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"

.productItem
  min-width: 300px
  position: relative
  border: 1px solid $cLite
  margin: 20px 10px
  margin-top: 0
  .label,.colletIcon
    position: absolute
    top: 0
  .label
    +size(36px,100px)
    left: 20px
    background: $cPri
    color: $cBText
    writing-mode: vertical-lr 
    letter-spacing: 5px
    +center()  
  .colletIcon
    +size(60px)
    +center()
    +hover()
    right: 0
    cursor: pointer
    &:hover
      color: $cSelect
  .productImg
    +size(100%,315px)
  .productInf
    display: flex
    justify-content: space-around
  .productName,.productPrice
    font-size: 20px
    height: 56px
    font-weight: 600
    +center()
  .productName
    width: 100%
    border: 1px solid $cLite
  .productPrice
    min-width: 120px
    border: 1px solid $cLite
  .addTotCart
    font-size: 24px
    font-weight: 600
    height: 65px
    background: $cPri
    color: $cBText
    transition: .3s
    +center()
    &:hover
      background: $cSelect
      color: $cText

</style>
