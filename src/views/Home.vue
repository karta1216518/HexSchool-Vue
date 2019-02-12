<template>
  <div class="home">
    <Banner />
    <ImageWall />
    <ImageWall :reverse="true" />
    <div class="product">
      <template v-for="item in productList.slice(0, 3)">
        <ProductItem
          :item="item"
          :key="item.id"
        />
      </template>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/Banner/Banner.vue";
import ImageWall from "@/components/ImageWall/ImageWall.vue";
import { mapState } from "vuex";

export default {
  name: "home",
  components: {
    Banner,
    ImageWall
  },
  computed: {
    productList() {
      return this.$store.state.productList;
    }
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
