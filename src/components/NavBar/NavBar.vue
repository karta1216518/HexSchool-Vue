<template>
  <div class="navbar">
    <div class="container">
      <div class="hamburger">
        <label class="hamburgerBtn" for="hamburgerHandler">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-hamburger"></use>
          </svg>
        </label>
        <input type="checkbox" id="hamburgerHandler" class="hamburgerHandler">
        <div class="hamburgerList">
          <router-link to="/">首頁</router-link>
          <router-link to="/product">商品</router-link>
          <router-link to="/login">登入</router-link>
        </div>
      </div>
      <router-link to="/">
        <div class="navlogo">
          <img src="https://fakeimg.pl/200x80/">
        </div>
      </router-link>
      <div class="navBtnBar">
        <router-link to="/">首頁</router-link>
        <router-link to="/product">商品</router-link>
        <router-link to="/login">登入</router-link>
      </div>
      <router-link to="/cart">
        <div class="cart">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-cart4"></use>
          </svg>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {};
  }
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"

.navbar
  width: 100%
  font-size: $fontSize
  +center()
.container
  max-width: 1200px
  +center(space-between)
  +size(100%)
.navlogo
  +size(200px,80px)
  +center()
  overflow: hidden
.navBtnBar
  margin-left: auto
  +center()
  >a
    +size(100px,80px)
    &:hover
      background: $cSelect
a
  text-decoration: none
  font-weight: 600
  +center()
  +hover()


.cart
  +size(120px,80px)
  +center()
  cursor: pointer
.hamburger,.hamburgerHandler
  display: none
.hamburgerList
  position: absolute
  top: 80px
  left: -300px
  transition: .5s
.hamburgerBtn
  margin: 20px
  cursor: pointer

@media only screen and (max-width: $rwdM)
  .navlogo
    width: 120px
  .cart
    width: 80px
  .navBtnBar
    display: none
  .hamburger
    height: 80px
    position: relative
    +center()
  .hamburgerHandler:checked +.hamburgerList
    display: block
    left: 0
    z-index: 3
    background: rgba(255,255,255,.9)
    >a
      +size(300px,60px)
      text-align: center
      &:hover
        background: $cSelect
</style>
