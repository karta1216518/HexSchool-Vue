<template>
  <div class="navbar">
    <div class="container">
      <div class="hamburger">
        <label
          class="hamburgerBtn"
          for="hamburgerHandler"
        >
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-hamburger"></use>
          </svg>
        </label>
        <input
          type="checkbox"
          id="hamburgerHandler"
          class="hamburgerHandler"
          v-model="hamburgerOpen"
        />
        <div
          class="hamburgerList"
          @click="hamburgerOpen=false"
        >
          <router-link :to="{ name: 'home' }">首頁</router-link>
          <router-link :to="{ name: 'product' }">商品</router-link>
          <router-link :to="{ name: 'login' }">登入</router-link>
        </div>
      </div>
      <router-link :to="{ name: 'home' }">
        <div class="navlogo">
          <Logo />
        </div>
      </router-link>
      <div class="navBtnBar">
        <router-link :to="{ name: 'home' }">首頁</router-link>
        <router-link :to="{ name: 'product' }">商品</router-link>
        <router-link :to="{ name: 'login' }">登入</router-link>
      </div>
      <router-link :to="{ name: 'cart' }">
        <div class="cart">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-cart4"></use>
          </svg>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import Logo from "@/components/Logo/Logo.vue";

export default {
  name: "NavBar",
  data() {
    return { hamburgerOpen: false };
  },
  components: { Logo }
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"

.navbar
  +center()
  width: 100%
  font-size: $fontSize
  box-shadow: -2px 2px 2px rgba(#000,.3)
  z-index: 999
  background: $cNavBar
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
  .cart
    width: 80px
  .navBtnBar
    display: none
  .hamburger
    height: 80px
    margin-left: 20px
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
@media only screen and (max-width: $rwdS)
  .hamburger
    margin-left: 0
</style>
