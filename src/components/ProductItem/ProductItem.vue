<template>
  <div class="productItem">
    <router-link :to="{name:'productDetailPage' ,params: {id:item.id}}">
      <div class="label">{{item.category}}</div>
      <div class="colletIcon">
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-heart"></use>
        </svg>
      </div>
      <div class="productImg">
        <img :src="item.image">
      </div>
      <div class="productInf">
        <div class="productName">{{item.title}}</div>
        <div class="productPrice">{{'NT$'+item.price}}</div>
      </div>
    </router-link>

    <div
      class="addTotCart"
      @click="addToCart(item)"
    >加入購物車</div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  data() {
    return {};
  },
  props: ["item"],
  methods: {
    addToCart(item) {
      this.$store.dispatch("SET_CART", { item, qty: 1 }).then(() => {
        this.$message.success("成功加入購物車");
      });
    }
  }
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"

.productItem
  min-width: 300px
  position: relative
  border: 1px solid $cLite
  margin: 20px 10px
  margin-top: 0
  transition: .5s
  .label,.colletIcon
    position: absolute
    top: 0
  .label
    +size(36px,100px)
    left: 20px
    background: $cPri
    color: $cBText
    writing-mode: vertical-lr 
    letter-spacing: 5px
    +center()  
  .colletIcon
    +size(60px)
    +center()
    right: 0
    cursor: pointer
    &:hover
      color: $cWarm
  .productImg
    +size(100%,300px)
    +center()
    max-width: 300px
    overflow: hidden
    &:hover
      img
        width: 110%
    img
      width: 100%
      transition: .3s
  .productInf
    display: flex
    justify-content: space-around
  .productName,.productPrice
    font-size: 20px
    height: 56px
    font-weight: 600
    +center()
  .productName
    width: 100%
    border: 1px solid $cLite
  .productPrice
    min-width: 120px
    border: 1px solid $cLite
  .addTotCart
    font-size: 24px
    font-weight: 600
    height: 65px
    background: $cPri
    color: $cBText
    transition: .3s
    +center()
    &:hover
      background: $cSelect
      color: $cText

</style>
