<template>
  <div class="loginArea">
    <div class="login">
      <div class="title">會員登入</div>
      <form action="">
        <label for="account">輸入帳號

        </label> <input
          type="text"
          id="account"
        >
        <label for="password">
          輸入密碼

        </label> <input
          type="password"
          id="password"
        >
        <a
          href="#"
          class="link"
        >
          忘記密碼了嗎?</a>
        <input
          type="submit"
          value="登入"
        >
      </form>
      <p>或者</p>
      <a
        href=""
        class="link"
      >
        立即註冊</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {};
  }
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"

.loginArea
  min-height: 720px
  margin: 0 auto
  background-image: url('../../assets/img/login.jpg')
  background-size: cover
  background-position: center
  background-attachment: fixed
  +center()
  .login
    +size(100%,500px)
    +center()
    flex-direction: column
    max-width: 600px
    position: relative
    z-index: 1
    &:after 
      filter: blur(4px)
      content: ''
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0
      background-color: rgba(255,255,255,0.8)
      z-index: -1

    .title
      font-size: 1.5*$fontSize
      font-weight: 600
    form
      display: flex
      flex-direction: column
      >label
        margin-top: 20px
      >input[type="text"],input[type="password"]
        +size(100%,40px)
        min-width: 280px
        padding: 0 20px
        margin: 4px 0
        border: none
        box-sizing: border-box
      >input[type="submit"]
        +size(100%,60px)
        +font()
        margin-top: 20px
        background-color: $cSelect
        border: none
        outline:  none
        font-size: 1.2*$fontSize
        transition: .5s
        &:hover
          box-shadow: 5px 5px 15px rgba(0,0,0,.3)
</style>
