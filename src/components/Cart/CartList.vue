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
// import { mapState } from "vuex";
// import { mapActions } from "vuex";
import { MessageBox } from "element-ui";

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
      return this.$store.getters.statisticsList;
    }
  },
  methods: {
    deleteCartItem(item) {
      MessageBox.confirm("是否要刪除購物車商品", "提示", {
        cancelButtonText: "取消",
        confirmButtonText: "確定",
        type: "warning"
      })
        .then(() => {
          this.$store.commit("CHANGE_LOADING", true);

          item.id.forEach(x => {
            this.$store.dispatch("DELETE_CARTITEM", { id: x });
          });

          this.$store.commit("CHANGE_LOADING", false);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    // 因無調整購物車數量對應的API，此部分採取前端自幹
    changeCart(item, type) {
      // 判斷動作是否為增加數量，若是則直接增加數量一，再透過computed顯示成同一欄位
      // 若動作為減少數量，則選取cartList中同商品的任意一筆，判斷其數量做刪減動作
      if (type === "remove") {
        let changeItem = this.cartList.find(x => {
          return x.product_id === item.product_id;
        });
        console.log(changeItem);
        if (changeItem.qty > 1) {
          this.$store.dispatch("DELETE_CARTITEM", changeItem);
          // 因為傳入的item來源是computed後的項目，其id為Array不符合action的傳入參數故要調整
          this.$store.dispatch("SET_CART", {
            item: { id: changeItem.product_id },
            qty: changeItem.qty - 1
          });
        } else {
          this.$store.dispatch("DELETE_CARTITEM", changeItem);
        }
      } else {
        // 同上調整id
        this.$store.dispatch("SET_CART", {
          item: { id: item.product_id },
          qty: 1
        });
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
