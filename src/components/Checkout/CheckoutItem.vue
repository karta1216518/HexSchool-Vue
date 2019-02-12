<template>
  <div class="checkoutItem">
    <img src="https://fakeimg.pl/110x110/" />
    <div class="checkoutItemInf">
      <div class="container">
        <div class="name">焦糖馬卡龍</div>
        <div class="count">數量:{{ count }}</div>
      </div>
      <div class="price">NT$ 900</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'checkoutItem',
  props: ['count'],
  data() {
    return {}
  }
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"

.checkoutItem
  padding: 10px 0
  box-sizing: border-box
  display: flex
  border-top: 2px solid $cLite
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
