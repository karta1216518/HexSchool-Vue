<template>
  <div class="productDetail">
    <div class="title">
      <div
        class="back"
        @click="$router.go(-1)"
      >
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-left"></use>
        </svg></div>
      {{item.title}}
    </div>
    <div class="container">
      <div
        class="img"
        :style="{backgroundImage:'url('+item.image+')'}"
      ></div>
      <div class="info">
        <div class="originPrice">{{'原價NT$'+item.origin_price}} / {{item.unit}}</div>
        <div class="price">{{'特價NT$'+item.price}} / {{item.unit}}</div>
        <div class="cartArea">
          <div class="countBar">
            <div
              class="countBarItem countBarBtn"
              @click="qty==1?qty=1:qty--"
            >-</div>
            <div class="countBarItem countBarNum">{{qty}}</div>
            <div
              class="countBarItem countBarBtn"
              @click="qty++"
            >+</div>
          </div>
          <div class="price">{{'小計NT$'+item.price*qty}}</div>
          <div
            class="addToCart"
            @click="addToCart"
          >加入購物車</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productDetail",
  props: ["item"],
  data() {
    return {
      qty: 1
    };
  },
  methods: {
    addToCart(item) {
      this.$store
        .dispatch("SET_CART", { item: this.item, qty: this.qty })
        .then(() => {
          this.$message.success("成功加入購物車");
          this.qty = 1;
        });
    }
  },
  activated() {
    this.qty = 1;
  }
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"
.productDetail
  max-width: 720px
  margin: 0 auto
.title
  +size(100%,60px)
  +center()
  position: relative
  .back
    +size(60px)
    +center()
    cursor: pointer
    border-radius: 10px
    position: absolute
    left: 10px
  background-color: $cLite
  font-size: 1.2*$fontSize
  margin: 10px
  margin-top: 40px
.container
  +center()
  margin: 10px
  margin-bottom: 40px
  .img
    +size(100%,300px)
    max-width: 400px
    background-position: center
    background-size: cover
  .info
    +size(100%)
    padding: 20px
    .originPrice
      text-decoration: line-through
      color: $cWarm
      font-size: $fontSize
    .price
      font-size: 1.2*$fontSize
      font-weight: 600
    .price,.originPrice
      text-align: center
      margin: 20px auto
  .countBar
    +center()
    margin: 20px auto
    .countBarItem
      +size(40px)
      +center()
    .countBarBtn
      +hover()
      border: 1px solid $cPri
      cursor: pointer
    .countBarNum
      border: 1px solid $cLite
      font-size: $fontSize
  .addToCart
    +size(200px,60px)
    +center()
    +hover()
    margin: 20px auto
    border: 1px solid $cPri
    font-size: $fontSize

</style>
