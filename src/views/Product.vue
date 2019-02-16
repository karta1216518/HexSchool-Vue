<template>
  <div class="container">
    <div class="menu">
      <ClassMenu @changeClass="changeClass" />
    </div>
    <div class="productArea">
      <transition-group
        name="list-complete"
        class="product"
        tag="ul"
      >
        <ProductItem
          v-for="item in filterList"
          :item="item"
          :key="item.id"
        />
      </transition-group>
      <transition
        name="fade"
        mode="out-in"
      >
        <Pagination v-if="filterList.length > 0 && nowClass == '所有產品'" />
      </transition>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ClassMenu from "@/components/ClassMenu/ClassMenu.vue";
import Pagination from "@/components/Pagination/Pagination.vue";
import { mapState } from "vuex";

export default {
  name: "product",
  components: {
    ClassMenu,
    Pagination
  },
  data() {
    return {
      nowClass: "所有產品"
    };
  },
  methods: {
    changeClass(item) {
      this.nowClass = item;
    }
  },
  computed: {
    apiType() {
      return this.$store.state.apiType;
    },
    productList() {
      return this.$store.state.productList;
    },
    filterList() {
      if (this.nowClass === "所有產品") return this.productList;
      return this.productList.filter(x => {
        return x.category === this.nowClass;
      });
    }
  }
};
</script>

<style scoped lang="sass">
.container
  display: flex
  padding: 40px 10px
  margin: 0 auto
  max-width: 1200px
.menu
  min-width: 200px
.productArea
  width: 100%
  padding-left: 10px
.product
  display: flex
  flex-wrap: wrap
  justify-content: space-around
@media only screen and (max-width: 768px)
  .container
    flex-direction: column
</style>