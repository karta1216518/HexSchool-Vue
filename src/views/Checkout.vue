<template>
  <div class="checkout">
    <CheckoutSummary/>
    <CheckoutForm/>
  </div>
</template>

<script>
// @ is an alias to /src
import CheckoutForm from "@/components/Checkout/CheckoutForm.vue";
import CheckoutSummary from "@/components/Checkout/CheckoutSummary.vue";

export default {
  name: "checkout",
  components: {
    CheckoutForm,
    CheckoutSummary
  }
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"
.checkout
  max-width: 1200px
  margin: 0 auto
  display: flex
  justify-content: center
  
@media only screen and (max-width: 768px)
  .checkout
    flex-direction: column
</style>
