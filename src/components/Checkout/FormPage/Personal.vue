<template>
  <div class="container">
    <div class="from">
      <div class="accountLink">
        <input type="checkbox" id="accountLink">
        <label for="accountLink">同帳號資料</label>
      </div>
      <div class="row">
        <div class="fromItem">
          <label for="lastName">姓氏</label>
          <input type="text" id="lastName">
        </div>
        <div class="space"></div>
        <div class="fromItem">
          <label for="fristName">名字</label>
          <input type="text" id="fristName">
        </div>
      </div>
      <div class="row">
        <div class="fromItem">
          <label for="phone">電話</label>
          <input type="text" id="phone">
        </div>
      </div>
      <div class="row">
        <div class="fromItem">
          <label for="address">地址</label>
          <input type="text" id="address">
        </div>
      </div>
    </div>
    <input type="submit" value="下一步" class="submitBtn" @click.prevent="submit">
  </div>
</template>

<script>
export default {
  name: "personal",
  props: [],
  data() {
    return {};
  },
  methods: {
    submit() {
      this.$router.push({ path: "transport" });
    }
  }
};
</script>

<style lang="sass" src="@/assets/sass/fromPage.sass">
</style>

