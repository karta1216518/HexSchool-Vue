<template>
  <div class="productDetailPage">
    <ProductDetail :item="product" />
  </div>
</template>

<script>
import ProductDetail from "@/components/ProductDetail/ProductDetail.vue";
import { mapState } from "vuex";
import { mapActions } from "vuex";
import { mapMutations } from "vuex";

export default {
  name: "productDetailPage",
  components: {
    ProductDetail
  },
  data() {
    return {};
  },
  computed: {
    product() {
      return (
        this.$store.state.productDetail || {
          category: "",
          id: "",
          image: "",
          is_enabled: "",
          origin_price: "",
          price: "",
          title: "",
          unit: ""
        }
      );
    }
  },
  // activated在組件第一次渲染時會被調用，之後在每次緩存組件被激活時調用
  activated() {
    this.$store.commit("SET_DATA", {});
    this.$store.dispatch("GET_PRODUCT", this.$route.params.id);
    console.log("component activated");
  },
  // deactivated：組件被停用（離開路由）時調用
  deactivated() {
    console.log("component deactivated");
  }
};
</script>

<style scoped lang="sass">
// @media only screen and (max-width: 992px)

// @media only screen and (max-width: 768px)

// @media only screen and (max-width: 480px)

</style>