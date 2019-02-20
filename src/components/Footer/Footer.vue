<template>
  <div class="footer">
    <div class="mailBar">
      <div class="mailSlogan">訂閱 Karta's file</div>
      <div class="mailInputBar">
        <label
          for="inputBox"
          class="mailIcon"
        >
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-mail"></use>
          </svg>
        </label>
        <input
          type="text"
          class="inputBox"
          id="inputBox"
          placeholder="輸入電子信箱"
        >
        <button class="sendBtn">
          <svg
            class="icon"
            aria-hidden="true"
          >
            <use xlink:href="#icon-right"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="footerInfArea">
      <div class="container">
        <div class="footerLinkbar">
          <router-link :to="{name: 'home'}">
            <div class="backstage">前往後臺</div>
          </router-link>
          <HoverIcon />
        </div>
        <div class="footerInf">
          <div class="content">0910-966-000
            <br>karta12165188@gmail.com
            <br>新北市板橋區
            <br>
          </div>
          <div class="copyright">©本頁面僅供練習使用，圖片版權來自各原作者 / 圖片來源: Unsplash </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo/Logo.vue'
import HoverIcon from '@/components/Footer/HoverIcon.vue'

export default {
  name: 'Footer',
  components: { HoverIcon, Logo },
  data () {
    return {}
  }
}
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
      max-width: 300px
      box-sizing: border-box
      background: $cLite
      height: 60px
      +font()
    .sendBtn
      background: $cSelect
      border: none
      outline: none
      cursor: pointer
      +hover()
.backstage
  +size(200px,60px)
  +font()
  +center()
  font-size: $fontSize
  font-weight: 500
  letter-spacing: 8px
  border: 1px solid $cPri
.footerInfArea
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
