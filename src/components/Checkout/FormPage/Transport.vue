<template>
  <div class="container">
    <div class="from">
      <input
        type="radio"
        name="postType"
        checked
        class="toggleHandler postHandler"
        id="post"
        value="post"
        v-model="postType"
      />
      <input
        type="radio"
        name="postType"
        class="toggleHandler convenienceStoreHandler"
        id="convenienceStore"
        value="convenienceStore"
        v-model="postType"
      />
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
      <form
        class="toggleArea postArea"
        data-vv-scope="post"
      >
        <div class="accountLink">
          <input
            type="checkbox"
            id="accountLink"
          />
          <label for="accountLink">同帳號資料</label>
        </div>
        <div class="fromItem">
          <label for="address">地址</label>
          <div class="row">
            <select
              name="city"
              v-model="postData.address.city"
              v-validate="'required'"
              :class="{ 'is-danger': errors.has('city') }"
            >
              <option
                class="optionItem"
                value="TEST"
                selected
              >TEST1</option>
              <option
                class="optionItem"
                value="TEST"
                selected
              >TEST2</option>
            </select>
            <select
              name="area"
              v-model="postData.address.area"
              v-validate="'required'"
              :class="{ 'is-danger': errors.has('area') }"
            >
              <option
                class="optionItem"
                value="TEST"
                selected
              >TEST1</option>
              <option
                class="optionItem"
                value="TEST"
                selected
              >TEST2</option>
            </select>
          </div>
          <input
            type="text"
            id="address"
            v-model="postData.address.address"
            v-validate="'required'"
            :class="{ 'is-danger': errors.has('address') }"
            placeholder="地址 . . . "
            name="address"
          />
          <span
            v-show="
              errors.has('post.address') || errors.has('post.area') || errors.has('post.city')
            "
            class="dangerText"
            v-cloak
          >
            {{ errors.first('post.address')||errors.first('post.area')||errors.first('post.city')}}
          </span>
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
          />
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
          />
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
          />
          <label
            class="postSelect"
            for="afternoon"
          >下午</label>
        </div>
      </form>

      <form
        class="toggleArea convenienceStoreArea"
        data-vv-scope="convenienceStore"
      >
        <div class="note">請選擇送達商店</div>
        <div class="row">
          <input
            type="radio"
            value="seven"
            id="seven"
            v-validate="'required'"
            v-model="convenienceStoreData.convenienceStoreType"
            name="convenienceStoreType"
            class="convenienceStoreType"
            checked
          />
          <label
            class="csSelect"
            for="seven"
          >7-11</label>
          <input
            type="radio"
            value="family"
            id="family"
            v-validate="'required'"
            v-model="convenienceStoreData.convenienceStoreType"
            name="convenienceStoreType"
            class="convenienceStoreType"
          />
          <label
            class="csSelect"
            for="family"
          >全家</label>
          <input
            type="radio"
            value="hiLife"
            id="hiLife"
            v-validate="'required'"
            v-model="convenienceStoreData.convenienceStoreType"
            name="convenienceStoreType"
            class="convenienceStoreType"
          />
          <label
            class="csSelect"
            for="hiLife"
          >萊爾富</label>
        </div>
        <ul class="storeList">
          <li
            class="storeListItem"
            v-for="(item,index) in convenienceStoreData.shopList"
            :key="index"
          >
            <label class="storeListSelect">
              <input
                type="radio"
                name="selectStore"
                class="selectStore"
                :id="item"
                :value="item"
                v-validate="'required'"
                v-model="convenienceStoreData.shopName"
              />
              <div class="storeName">{{item}}</div>
            </label>
            <div
              class="deleteBtn"
              @click="convenienceStoreData.shopList.splice(index,1)"
            >
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
        <span
          v-show="
              errors.has('convenienceStore.selectStore') 
            "
          class="dangerText"
          v-cloak
        >
          {{ errors.first('convenienceStore.selectStore')}}
        </span>
      </form>
    </div>
    <div
      class="submitBtn"
      @click.prevent="submit"
    >下一步</div>
  </div>
</template>

<script>
export default {
  name: "transport",
  data() {
    return {
      postType: "post",
      postTime: "notSpecify",
      postData: {
        paymentType: "",
        address: {
          city: "",
          area: "",
          address: "",
          receiptTime: ""
        }
      },
      convenienceStoreData: {
        convenienceStoreType: "seven",
        shopName: "",
        shopList: ["新埔門市", "板橋門市", "江翠門市", "文化門市"]
      }
    };
  },
  methods: {
    submit() {
      // 依照頁簽來驗證對應的form
      let scope = this.postType;
      this.$validator.validateAll(scope).then(result => {
        if (result) {
          //成功操作
          this.$router.push({ path: "payment" });
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
