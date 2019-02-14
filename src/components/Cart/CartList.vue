<template>
  <div class="cartList">
    <div class="title">您的購物車</div>
    <ul>
      <li
        class="cartNoItem"
        v-if="cartList.length==0"
      >您的購物車沒有物品!</li>
      <li
        class="cartItem"
        v-for="item in statisticsList"
        :key="item.product_id"
      >
        <div class="container">
          <div
            class="img"
            :style="{backgroundImage:'url('+item.product.image+')'}"
          ></div>
          <div class="cartInf">
            <div class="name">{{item.product.title}}</div>
            <div class="price">{{'NT$'+item.product.origin_price*item.qty}}</div>
          </div>
          <div class="cartCount">
            <div class="countBar">
              <div
                class="countBarItem countBtn"
                @click="changeCart(item,'remove')"
              >-</div>
              <div class="countBarItem countNum">{{item.qty}}</div>
              <div
                class="countBarItem countBtn"
                @click="changeCart(item,'add')"
              >+</div>
            </div>
            <div class="total">{{'NT$'+item.final_total*item.qty}}</div>
          </div>
          <div
            class="deleteBtn"
            @click="deleteCartItem(item)"
          >
            <svg
              class="icon"
              aria-hidden="true"
            >
              <use xlink:href="#icon-delete"></use>
            </svg>
          </div>
        </div>
        <div class="cartCountS">
          <div class="countBar">
            <div
              class="countBarItem countBtn"
              @click="changeCart(item,'remove')"
            >-</div>
            <div class="countBarItem countNum">{{item.qty}}</div>
            <div
              class="countBarItem countBtn"
              @click="changeCart(item,'add')"
            >+</div>
          </div>
          <div class="total">{{'NT$'+item.final_total}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "cartList",
  data() {
    return {};
  },
  computed: {
    cartList() {
      return this.$store.state.cartList;
    },
    statisticsList() {
      let statisticsItem = {};
      // 初始化
      let idList = [];
      let totalQty = [];
      this.cartList.forEach(x => {
        // 判斷是否已在statisticsItem物件中，用以計算idList與totalQty
        statisticsItem[x.product_id]
          ? (idList = [...statisticsItem[x.product_id].id, x.id]) &&
            (totalQty = statisticsItem[x.product_id].qty + x.qty)
          : (idList = [x.id]) && (totalQty = x.qty);

        // 填入物件中
        statisticsItem[x.product_id] = {
          product: x.product,
          product_id: x.product_id,
          final_total: x.final_total,
          total: x.total,
          id: idList,
          qty: totalQty
        };
        idList = [];
      });
      // 回傳完整物件用以v-for
      return statisticsItem;
    }
  },
  methods: {
    deleteCartItem(item) {
      this.$store.commit("CHANGE_LOADING", true);

      item.id.forEach(x => {
        this.$store.dispatch("DELETE_CARTITEM", { id: x });
      });

      this.$store.commit("CHANGE_LOADING", false);
    },

    changeCart(item, type) {
      console.log("hit");
      if (type === "add") {
        this.$store.dispatch("SET_CART", { id: item.product_id });
        console.log("add");
      } else {
        this.$store.dispatch("DELETE_CARTITEM", { id: item.id[0] });
        console.log("remove");
      }
    }
  }
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"
.cartList
  width: 100%
.title
  background: $cLite
  color: $cPri
  height: 60px
  font-size: 24px
  font-weight: 600
  +center()
.container
  display: flex
  justify-content: space-between
  margin-top: 20px
  border-bottom: 1px solid $cLite
.cartInf,.cartCount
  font-size: $fontSize
  display: flex
  align-items: center
  justify-content: space-around
  width: 100%
.countBar,.countBarItem,.deleteBtn
  +center()
.countBarItem
  +size(40px)
.countBtn
  cursor: pointer
  border: 1px solid $cLite
.deleteBtn
  min-width: 60px
  cursor: pointer
  &:hover
    transform: scale(1.1)
.name,.price,.total
  margin: 10px 0
  text-align: center
.name
  width: 100%
.price
  min-width: 80px
  font-size: 14px
.total
  font-weight: 600
.cartCountS
  display: none
  padding: 10px
  border-bottom: 1px solid $cLite
.img
  +size(110px)
  min-width: 110px
  background-size: cover
  background-position: center
.cartNoItem
  +size(100%,300px)
  +center()
  font-size: $fontSize
  color: $cPri
@media only screen and (max-width: $rwdL)
  .cartInf,.cartCount
    flex-direction: column
@media only screen and (max-width: $rwdS)
  .container
    padding: 20px
  .deleteBtn
    display: none
  .cartCount
    display: none
  .name
    // text-align: left
  .cartCountS
    display: flex
    justify-content: space-around
</style>
