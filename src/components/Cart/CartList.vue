<template>
  <div class="cartList">
    <div class="title">您的購物車</div>
    <ul>
      <li class="cartItem" v-for="item in 3">
        <div class="container">
          <img src="https://fakeimg.pl/110x110/">
          <div class="cartInf">
            <div class="name">焦糖馬卡龍</div>
            <div class="price">NT$ 450</div>
          </div>
          <div class="cartCount">
            <div class="countBar">
              <div class="countBarItem countBtn">-</div>
              <div class="countBarItem countNum">2</div>
              <div class="countBarItem countBtn">+</div>
            </div>
            <div class="total">NT$ 900</div>
          </div>
          <div class="deleteBtn">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-delete"></use>
            </svg>
          </div>
        </div>
        <div class="cartCountS">
          <div class="countBar">
            <div class="countBarItem countBtn">-</div>
            <div class="countBarItem countNum">2</div>
            <div class="countBarItem countBtn">+</div>
          </div>
          <div class="total">NT$ 900</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "cartList",
  data() {
    return {};
  }
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"
.cartList
  width: 100%
.title
  background: $cLite
  color: $cPri
  height: 60px
  font-size: 24px
  font-weight: 600
  +center()
.container
  display: flex
  justify-content: space-between
  margin-top: 20px
  border-bottom: 1px solid $cLite
.cartInf,.cartCount
  font-size: $fontSize
  display: flex
  align-items: center
  justify-content: space-around
  width: 100%
.countBar,.countBarItem,.deleteBtn
  +center()
.countBarItem
  +size(40px)
.countBtn
  cursor: pointer
  border: 1px solid $cLite
.deleteBtn
  min-width: 60px
  +hover()

.name,.price,.total
  margin: 10px 0
  text-align: center
.name
  width: 100%
.price
  min-width: 80px
  font-size: 14px
.total
  font-weight: 600
.cartCountS
  display: none
  padding: 10px
  border-bottom: 1px solid $cLite

@media only screen and (max-width: $rwdL)
  .cartInf,.cartCount
    flex-direction: column
@media only screen and (max-width: $rwdS)
  .container
    padding: 20px
  .deleteBtn
    display: none
  .cartCount
    display: none
  .name
    // text-align: left
  .cartCountS
    display: flex
    justify-content: space-around
</style>
