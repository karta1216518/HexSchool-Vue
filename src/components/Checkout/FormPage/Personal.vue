<template>
  <div class="container">
    <div class="from">
      <div class="accountLink">
        <input
          type="checkbox"
          id="accountLink"
        >
        <label for="accountLink">同帳號資料</label>
      </div>
      <div class="row">
        <div class="fromItem">
          <label for="lastName">姓氏</label>
          <input
            v-model="personalData.lastName"
            v-validate="'required'"
            :class="{'is-danger': errors.has('lastName') }"
            placeholder="姓氏．．．"
            type="text"
            name="lastName"
            id="lastName"
          >
          <span
            v-show="errors.has('lastName')"
            class="dangerText"
            v-cloak
          > {{ errors.first('lastName') }} </span>
        </div>
        <div class="space"></div>
        <div class="fromItem">
          <label for="fristName">名字</label>
          <input
            type="text"
            id="fristName"
            v-model="personalData.fristName"
            v-validate="'required'"
            :class="{'is-danger': errors.has('fristName') }"
            placeholder="名字．．．"
            name="fristName"
          >
          <span
            v-show="errors.has('fristName')"
            class="dangerText"
            v-cloak
          > {{ errors.first('fristName') }} </span>
        </div>
      </div>
      <div class="row">
        <div class="fromItem">
          <label for="phone">電話</label>
          <input
            type="text"
            id="phone"
            v-model="personalData.phone"
            v-validate="'required'"
            :class="{'is-danger': errors.has('phone') }"
            placeholder="電話．．．"
            name="phone"
          >
          <span
            v-show="errors.has('phone')"
            class="dangerText"
            v-cloak
          > {{ errors.first('phone') }} </span>
        </div>
      </div>
      <div class="row">
        <div class="fromItem">
          <label for="address">地址</label>
          <input
            type="text"
            id="address"
            v-model="personalData.address"
            v-validate="'required'"
            :class="{'is-danger': errors.has('address') }"
            placeholder="地址 . . . "
            name="address"
          >
          <span
            v-show="errors.has('address')"
            class="dangerText"
            v-cloak
          > {{ errors.first('address') }} </span>
        </div>
      </div>
      <div class="row">
        <div class="fromItem">
          <label for="email">電子信箱</label>
          <input
            type="email"
            id="email"
            v-model="personalData.email"
            v-validate="'required'"
            :class="{'is-danger': errors.has('email') }"
            placeholder="電子信箱 . . . "
            name="email"
          >
          <span
            v-show="errors.has('email')"
            class="dangerText"
            v-cloak
          > {{ errors.first('email') }} </span>
        </div>
      </div>
    </div>
    <div
      class="submitBtn"
      @click.prevent="submit"
    >下一步
    </div>
  </div>
</template>

<script>
export default {
  name: "personal",
  props: [],
  data() {
    return {
      personalData: {
        fristName: "",
        lastName: "",
        phone: "",
        address: "",
        email: ""
      }
    };
  },
  methods: {
    submit() {
      this.$validator.validateAll().then(result => {
        if (result) {
          // 成功操作
          this.$router.push({ name: "transport" });
          this.$store.commit("SET_ORDERDATA", {
            type: "personalData",
            data: this.personalData
          });
        } else {
          // 失败操作
        }
      });
    }
  }
};
</script>

<style lang="sass" src="@/assets/sass/fromPage.sass">
</style>
