<template>
  <div class="container">
    <div class="menu">
      <ClassMenu/>
    </div>
    <div class="productArea">
      <div class="product">
        <template v-for="item in 10">
          <ProductItem/>
        </template>
      </div>
      <Pagination/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ClassMenu from "@/components/ClassMenu/ClassMenu.vue";
import Pagination from "@/components/Pagination/Pagination.vue";

export default {
  name: "product",
  components: {
    ClassMenu,
    Pagination
  }
};
</script>

<style scoped lang="sass">
.container
  display: flex
  padding: 40px 20px
  margin: 0 auto
  max-width: 1200px
.menu
  min-width: 200px
.product
  display: flex
  justify-content: center
  flex-wrap: wrap
@media only screen and (max-width: 768px)
  .container
    flex-direction: column
</style>