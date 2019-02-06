<template>
  <div class="checkoutFrom">
    <div class="title">填寫資料</div>
    <ProgressBar/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <div class="backgroundBtn"></div>
  </div>
</template>

<script>
import ProgressBar from "@/components/Checkout/FormPage/ProgressBar.vue";
export default {
  name: "CheckoutFrom",
  data() {
    return {};
  },
  components: {
    ProgressBar
  },
  created() {}
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"

.checkoutFrom
  margin: 10px auto
  background-color: $cPri
  box-sizing: border-box
  color: #fff
  position: relative
  +size(100%)
.title
  font-size: 1.2*$fontSize
  height: 60px
  font-weight: 600
  +center()
.backgroundBtn
  +size(100%,60px)
  position: absolute
  bottom: 0
  background-color: $cSelect
@media only screen and (max-width: 768px)
  .checkoutFrom
    max-width: none
</style>
