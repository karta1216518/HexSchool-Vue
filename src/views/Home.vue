<template>
  <div class="home">
    <Banner/>
    <ImageWall/>
    <ImageWall :reverse="true"/>
    <div class="product">
      <ProductItem/>
      <ProductItem/>
      <ProductItem/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner/Banner.vue";
import ImageWall from "@/components/ImageWall/ImageWall.vue";

export default {
  name: "home",
  components: {
    Banner,
    ImageWall
  }
};
</script>

<style scoped lang="sass">
.product
  display: flex
  justify-content: space-around
  margin: 40px auto
  max-width: 1200px
  flex-wrap: wrap
</style>