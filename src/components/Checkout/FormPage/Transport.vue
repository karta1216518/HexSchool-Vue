
<template>
  <div class="container">
    <div class="from">
      <input
        type="radio"
        name="postType"
        checked
        class="toggleHandler postHandler"
        id="post"
      >
      <input
        type="radio"
        name="postType"
        class="toggleHandler convenienceStoreHandler"
        id="convenienceStore"
      >
      <div class="row toggleRow">
        <label
          class="typeToggleBtn postBtn"
          for="post"
        >宅配</label>
        <label
          class="typeToggleBtn convenienceStoreBtn"
          for="convenienceStore"
        >便利商店</label>
      </div>
      <div class="toggleArea postArea">
        <div class="accountLink">
          <input
            type="checkbox"
            id="accountLink"
          >
          <label for="accountLink">同帳號資料</label>
        </div>
        <div class="fromItem">
          <label for="address">地址</label>
          <div class="row">
            <select name="city">
              <option
                class="optionItem"
                value="TEST"
              >TEST</option>
            </select>
            <select name="city">
              <option
                class="optionItem"
                value="TEST"
              >TEST</option>
            </select>
          </div>
          <input
            type="text"
            id="address"
          >
        </div>
        <div class="note">選擇宅配收貨時間</div>
        <div class="row">
          <input
            type="radio"
            value="notSpecify"
            id="notSpecify"
            v-model="postTime"
            name="postTime"
            class="postTime"
            checked
          >
          <label
            class="postSelect"
            for="notSpecify"
          >不指定</label>
          <input
            type="radio"
            value="morning"
            id="morning"
            v-model="postTime"
            name="postTime"
            class="postTime"
          >
          <label
            class="postSelect"
            for="morning"
          >早上</label>
          <input
            type="radio"
            value="afternoon"
            id="afternoon"
            v-model="postTime"
            name="postTime"
            class="postTime"
          >
          <label
            class="postSelect"
            for="afternoon"
          >下午</label>
        </div>
      </div>

      <div class="toggleArea convenienceStoreArea">
        <div class="note">請選擇送達商店</div>
        <div class="row">
          <input
            type="radio"
            value="seven"
            id="seven"
            v-model="convenienceStoreType"
            name="convenienceStoreType"
            class="convenienceStoreType"
            checked
          >
          <label
            class="csSelect"
            for="seven"
          >7-11</label>
          <input
            type="radio"
            value="family"
            id="family"
            v-model="convenienceStoreType"
            name="convenienceStoreType"
            class="convenienceStoreType"
          >
          <label
            class="csSelect"
            for="family"
          >全家</label>
          <input
            type="radio"
            value="hiLife"
            id="hiLife"
            v-model="convenienceStoreType"
            name="convenienceStoreType"
            class="convenienceStoreType"
          >
          <label
            class="csSelect"
            for="hiLife"
          >萊爾富</label>
        </div>
        <ul class="storeList">
          <li
            class="storeListItem"
            v-for="item in 3"
            :key="item"
          >
            <label class="storeListSelect">
              <input
                type="radio"
                name="selectStore"
                class="selectStore"
                :id="item"
              >
              <div class="storeName">台北門市</div>
            </label>
            <div class="deleteBtn">
              <svg
                class="icon"
                aria-hidden="true"
              >
                <use xlink:href="#icon-delete"></use>
              </svg>
            </div>
          </li>
        </ul>
        <button class="addStore">＋新增門市</button>
      </div>
    </div>
    <input
      type="submit"
      value="下一步"
      class="submitBtn"
      @click.prevent="submit"
    >
  </div>
</template>

<script>
export default {
  name: "transport",
  data() {
    return {
      convenienceStoreType: "seven",
      postTime: "notSpecify",
      transportData: {
        paymentType: "",
        address: {
          city: "",
          area: "",
          address: ""
        },
        receiptTime: "",
        shopName: "",
        shopList: ""
      }
    };
  },
  methods: {
    submit() {
      this.$router.push({ path: "payment" });
    }
  }
};
</script>

<style lang="sass" src="@/assets/sass/fromPage.sass">
</style>
