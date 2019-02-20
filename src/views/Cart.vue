<template>
  <div class="cart">
    <CartList />
    <CartSummary />
  </div>
</template>

<script>
// @ is an alias to /src
import CartList from '@/components/Cart/CartList.vue'
import CartSummary from '@/components/Cart/CartSummary.vue'

export default {
  name: 'cart',
  components: {
    CartList,
    CartSummary
  },

  created () {
    this.$store.dispatch('GET_CARTLIST')
  }
}
</script>

<style scoped lang="sass">
.cart
  display: flex
  justify-content: space-around
  margin: 40px auto
  max-width: 1200px
@media only screen and (max-width: 992px)
  .cart
    margin: 20px
@media only screen and (max-width: 768px)
  .cart
    flex-direction: column

@media only screen and (max-width: 480px)
  .cart
    margin: 0
</style>
