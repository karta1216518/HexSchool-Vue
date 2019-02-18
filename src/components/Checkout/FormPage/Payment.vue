<template>
  <div class="container">
    <div class="from">
      <input
        type="radio"
        value="Online"
        id="Online"
        v-model="paymentType"
        name="paymentType"
        class="paymentType onlineHandler"
        checked
      />
      <input
        type="radio"
        value="delivery"
        id="delivery"
        v-model="paymentType"
        name="paymentType"
        class="paymentType deliveryHandler"
      />
      <div class="row">
        <label
          class="paymentSelect onlinePayment"
          for="Online"
        >線上付款</label>
        <label
          class="paymentSelect deliveryPayment"
          for="delivery"
        >貨到付款</label>
      </div>
      <div class="onlineArea">
        <div class="row">
          <div class="fromItem">
            <label for="cardNumber">信用卡卡號</label>
            <input
              type="text"
              id="cardNumber"
            />
          </div>
        </div>
        <div class="row">
          <div class="fromItem">
            <label for="lastName">持卡人姓氏</label>
            <input
              type="text"
              id="lastName"
            />
          </div>
          <div class="space"></div>
          <div class="fromItem">
            <label for="fristName">名字</label>
            <input
              type="text"
              id="fristName"
            />
          </div>
        </div>
        <div class="row">
          <div class="fromItem">
            <label for="numCVC">背面末三碼</label>
            <input
              type="text"
              id="numCVC"
            />
          </div>
        </div>
      </div>
      <div class="deliveryArea">
        <div class="note">
          便利商店取件付款免運費 <br />若選擇宅配貨到付款，運費為$100
        </div>
      </div>
    </div>
    <input
      type="submit"
      value="下一步"
      class="submitBtn"
      @click.prevent="submit"
    />
  </div>
</template>

<script>
export default {
  name: "payment",
  data() {
    return {
      paymentType: "Online",
      paymentData: {
        paymentType: "",
        cardId: "",
        cardHolder: {
          fristName: "",
          lastName: ""
        },
        CVC: ""
      }
    };
  },
  methods: {
    submit() {
      this.$router.push({ path: "orderCheck" });
    }
  }
};
</script>

<style lang="sass" src="@/assets/sass/fromPage.sass"></style>
