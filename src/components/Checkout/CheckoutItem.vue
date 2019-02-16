<template>
  <div class="checkoutItem">
    <div
      class="img"
      :style="{backgroundImage:'url('+imgUrl+')'}"
    ></div>
    <div class="checkoutItemInf">
      <div class="container">
        <div class="name">{{name}}</div>
        <div class="count">數量:{{ count }}</div>
      </div>
      <div class="price">{{`NT$${price}`}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "checkoutItem",
  props: ["count", "name", "price", "imgUrl"],
  data() {
    return {};
  }
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"

.checkoutItem
  padding: 10px 0
  box-sizing: border-box
  display: flex
  border-top: 2px solid $cLite
  .img
    +size(110px)
    min-width: 110px
    background-size: cover
    background-position: center
  .checkoutItemInf,.container
    display: flex
    width: 100%
  .price,.count
    min-width: 100px
  .name
    width: 100%
  .name,.count,.price
    +center()
.checkoutItem:first-child
  border: none
@media only screen and (max-width: $rwdL)
  .container
    flex-direction: column
    justify-content: center
    .name
      margin-bottom: 10px
</style>
