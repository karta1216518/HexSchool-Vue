<template>
  <div class="orderCheck">
    <CheckoutSummary />
    <div class="informationArea">
      <div class="title">訂購人資訊</div>
      <table>
        <tr>
          <td class="tableHead">訂購人</td>
          <td>王小明</td>
        </tr>
        <tr>
          <td class="tableHead">電話</td>
          <td>0912345678</td>
        </tr>
        <tr>
          <td class="tableHead">取貨方式</td>
          <td>宅配</td>
        </tr>
        <tr>
          <td class="tableHead">取貨時間</td>
          <td>不指定</td>
        </tr>
        <tr>
          <td class="tableHead">付款方式</td>
          <td>線上付款</td>
        </tr>
        <tr>
          <td class="tableHead">發票</td>
          <td>

            <input
              type="radio"
              name="invoice"
              value="inbox"
              id="inbox"
              v-model="invoice"
            >
            <label for="inbox">隨件附上</label>
            <input
              type="radio"
              name="invoice"
              value="eInvoice"
              id="eInvoice"
              v-model="invoice"
            >
            <label for="eInvoice">電子發票</label>
            <input
              type="radio"
              name="invoice"
              value="donation"
              id="donation"
              v-model="invoice"
            >
            <label for="donation">捐贈</label>
          </td>
        </tr>
        <tr v-show="invoice=='eInvoice'">
          <td class="tableHead"></td>
          <td>
            <label for="eInvoiceEmail">
              請填寫電子發票信箱
            </label>
            <input
              type="text"
              id="eInvoiceEmail"
            >
          </td>
        </tr>
        <tr v-show="invoice=='donation'">
          <td class="tableHead"></td>
          <td>
            <label for="donationUnit">請選擇捐贈單位</label>
            <select
              name="donationUnit"
              id="donationUnit"
            >
              <option value="XXXfoundation">XXX基金會</option>
              <option value="OOOfoundation">OOO基金會</option>
            </select>
          </td>
        </tr>
      </table>
      <button
        class="checkBtn"
        @click="pushOrder"
      >確認資料無誤，送出訂單</button>

    </div>
  </div>
</template>

<script>
import CheckoutSummary from "@/components/Checkout/CheckoutSummary.vue";

export default {
  name: "orderCheck",
  components: {
    CheckoutSummary
  },
  data() {
    return {
      invoice: "inbox"
    };
  },
  computed: {
    cartList() {
      return this.$store.getters.statisticsList;
    },
    orderData(){
      return this.$store.getters.orderApiData
    }
  },
  methods: {
    pushOrder() {
      this.$store.dispatch("PUSH_ORDERDATA").then(() => {
        this.$router.push({
          name: "completeOrder"
        });
      });
    }
  },
  created() {
    this.$store.dispatch("GET_CARTLIST");
  }
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"
.orderCheck
  max-width: 800px
  margin: 40px auto
  padding: 0 20px
.title
  background-color: $cLite
  font-size: 1.2*$fontSize
  font-weight: 600
  +size(100%,60px)
  +center()

.informationArea
  padding: 0 10px
  table
    max-width: 540px
    margin: 20px auto
    .tableHead
      min-width: 120px
    td
      padding: 8px
      > label
        margin-right: 20px
.checkBtn
  background-color: $cSelect
  font-size: 1.2*$fontSize
  font-weight: 600
  border: none
  transition: .5s
  outline: none
  cursor: pointer
  +font()
  +size(100%,60px)
  &:hover
    box-shadow: 5px 5px 15px rgba(0,0,0,.2)
</style>
