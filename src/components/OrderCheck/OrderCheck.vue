<template>
  <div class="orderCheck">
    <div class="orderArea">
      <div class="title">
        您的訂單
      </div>
      <ul class="orderList">

        <li class="orderItem">
          <div class="imgSpace">產品圖片</div>
          <div class="container">
            <div class="name">品名</div>
            <div class="count">數量</div>
          </div>
          <div class="price">價錢</div>
        </li>
        <li
          class="orderItem"
          v-for="item in 3"
          :key="item"
        >
          <img src="https://fakeimg.pl/110x110/" />
          <div class="container">
            <div class="name">焦糖馬卡龍</div>
            <div class="count">{{ item }}</div>
          </div>
          <div class="price">NT$ 900</div>
        </li>
      </ul>
    </div>
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
      <router-link :to="{name:'completeOrder'}">
        <button class="checkBtn">確認資料無誤，送出訂單</button>
      </router-link>

    </div>
  </div>
</template>

<script>
export default {
  name: "orderCheck",
  data() {
    return {
      invoice: "inbox"
    };
  }
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"
.orderCheck
  max-width: 800px
  margin: 40px auto
.title
  background-color: $cLite
  font-size: 1.2*$fontSize
  font-weight: 600
  +size(100%,60px)
  +center()
.orderList
  .orderItem
    display: flex
    padding: 10px 0
    border-bottom: 1px solid $cLite
    .imgSpace
      min-width: 110px
      text-align: center
    >.container
      display: flex
      width: 100%
      justify-content: space-around
      align-items: center
    .price
      min-width: 200px 
      font-size: $fontSize
      font-weight: 600
      +center()
.informationArea
  table
    max-width: 540px
    margin: 20px auto
    .tableHead
      width: 160px
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
