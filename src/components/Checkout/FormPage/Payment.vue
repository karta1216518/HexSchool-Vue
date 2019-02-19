<template>
  <div class="container">
    <div class="from">
      <input
        type="radio"
        value="online"
        id="online"
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
          for="online"
        >線上付款</label>
        <label
          class="paymentSelect deliveryPayment"
          for="delivery"
        >貨到付款</label>
      </div>
      <form
        class="onlineArea"
        data-vv-scope="online"
      >
        <div class="row">
          <div class="fromItem">
            <label for="cardId">信用卡卡號</label>
            <input
              type="text"
              id="cardId"
              v-validate="'required'"
              v-model="paymentData.cardId"
              :class="{'is-danger': errors.has('online.cardId') }"
              placeholder="信用卡卡號 . . . "
              name="cardId"
            /> <span
              v-show="errors.has('online.cardId')"
              class="dangerText"
              v-cloak
            > {{ errors.first('online.cardId') }} </span>
          </div>
        </div>
        <div class="row">
          <div class="fromItem">
            <label for="lastName">持卡人姓氏</label>
            <input
              type="text"
              id="lastName"
              v-validate="'required'"
              v-model="paymentData.lastName"
              :class="{'is-danger': errors.has('online.lastName') }"
              placeholder="姓氏 . . . "
              name="lastName"
            /> <span
              v-show="errors.has('online.lastName')"
              class="dangerText"
              v-cloak
            > {{ errors.first('online.lastName') }} </span>
          </div>
          <div class="space"></div>
          <div class="fromItem">
            <label for="fristName">名字</label>
            <input
              type="text"
              id="fristName"
              v-validate="'required'"
              v-model="paymentData.fristName"
              :class="{'is-danger': errors.has('online.fristName') }"
              placeholder="名字 . . . "
              name="fristName"
            /> <span
              v-show="errors.has('online.fristName')"
              class="dangerText"
              v-cloak
            > {{ errors.first('online.fristName') }} </span>
          </div>
        </div>
        <div class="row">
          <div class="fromItem">
            <label for="numCVC">背面末三碼</label>
            <input
              type="text"
              id="numCVC"
              v-validate="'required'"
              v-model="paymentData.numCVC"
              :class="{'is-danger': errors.has('online.numCVC') }"
              placeholder="末三碼 . . ."
              name="numCVC"
            /> <span
              v-show="errors.has('online.numCVC')"
              class="dangerText"
              v-cloak
            > {{ errors.first('online.numCVC') }} </span>
          </div>
        </div>
      </form>
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
      paymentType: "online",
      paymentData: {
        cardId: "",
        fristName: "",
        lastName: "",
        numCVC: ""
      }
    };
  },
  methods: {
    submit() {
      // 依照頁簽來驗證對應的form
      let scope = this.paymentType;
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          //成功操作
          this.$router.push({ path: "orderCheck" });
        } else {
          // 失败操作
          return;
        }
      });
    }
  }
};
</script>

<style lang="sass" src="@/assets/sass/fromPage.sass"></style>
