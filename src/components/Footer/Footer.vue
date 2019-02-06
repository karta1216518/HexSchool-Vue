<template>
  <div class="footer">
    <div class="mailBar">
      <div class="mailSlogan">訂閱你我的甜蜜郵件</div>
      <div class="mailInputBar">
        <label for="inputBox" class="mailIcon">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-mail"></use>
          </svg>
        </label>
        <input type="text" class="inputBox" id="inputBox">
        <button class="sendBtn">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-right"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="footerInfArea">
      <div class="container">
        <div class="footerLinkbar">
          <img src="https://fakeimg.pl/250x100/">
          <HoverIcon/>
        </div>
        <div class="footerInf">
          <div class="content">07-1234-5678
            <br>sweetaste@email.com 800
            <br>高雄市新興區幸福路 520 號
            <br>
          </div>
          <div class="copyright">© 2018 Sweetaste* All Rights Reserved</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HoverIcon from "@/components/Footer/HoverIcon.vue";
export default {
  name: "Footer",
  components: { HoverIcon },
  data() {
    return {};
  }
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"

.mailBar
  color: $cBText
  font-size: 30px
  background: $cPri
  min-height: 100px
  +size(100%)
  +center()
  flex-wrap: wrap
  .mailSlogan,.mailInputBar
    width: 45%
    text-align: center
    min-width: 300px
    min-height: 60px
    +center()
  .mailInputBar
    margin: 20px
    display: flex
    box-sizing: border-box
    .mailIcon
      background: $cLite
      +center()
    .mailIcon,.sendBtn
      +size(70px,60px)
      .icon 
        width: .8em
    .inputBox
      width: 100%
      background: $cLite
      border: none
      outline: none
      font-size: $fontSize
      padding: 0 20px
      max-width: 300px  
      box-sizing: border-box
      background: $cLite
      height: 60px
    .sendBtn
      background: $cSelect
      border: none
      outline: none
      cursor: pointer
      +hover()
.footerInfArea
  background: $cLite
  .container
    max-width: 800px
    margin: 0 auto
    padding: 20px
.footerLinkbar
  +center()
  flex-wrap: wrap
.footerInf
  color: $cPri
  line-height: 1.5
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  .content, .copyright
    margin: 20px
  .copyright
    display: flex
    flex-direction: column-reverse
</style>
