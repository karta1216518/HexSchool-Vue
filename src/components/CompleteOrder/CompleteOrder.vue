<template>
  <div class="completeOrder">
    <div class="content">
      <h2>訂單已完成!</h2>
      <p>
        感謝您的訂購
        <br>您可以在帳號資訊中查看物流情況
      </p>
      <router-link :to="{name:'home'}">
        <button>回首頁</button>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'completeOrder',
  data () {
    return {}
  }
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"
.completeOrder
  background: url('../../assets/img/s_banner3.jpg')
  background-size: cover
  background-position: bottom
  +center()
  +size(100%,calc(100vh - 80px))
  .content
    +center()
    +size(600px,300px)
    background-color: rgba(255,255,255,.8)
    flex-direction: column
    box-shadow: 5px 5px 15px rgba(255,255,255,.3)

    >p
      text-align: center
    button
      +size(200px,60px)
      +font()
      +center()
      cursor: pointer
      font-size: $fontSize
      background-color: $cSelect
      border: none
      outline: none
      transition: .5s
      font-weight: 600
      &:hover
        box-shadow: 5px 5px 15px rgba(0,0,0,.3)
</style>
