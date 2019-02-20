<template>
  <div class="imageWall">
    <div
      class="container"
      :class="{'imageWallReverse':index%2==0}"
    >
      <div
        class="img"
        :style="{backgroundImage:'url('+item.imgUrl+')'}"
      >
      </div>
      <div class="info">
        <p>
          {{item.content}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImageWell',
  props: ['item', 'index'],
  data () {
    return {}
  }
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"

.imageWall
  height: 460px
  background: $cLite
  margin-bottom: 400px
  .container
    display: flex
    max-width: 1200px
    height: 100%
    margin: 0 auto
  .info
    width: 50%
  .img
    +center()
    width: 50%
    background-position: center
    background-size: cover
  .info
    padding: 70px
    box-sizing: border-box
    p
      writing-mode: vertical-lr
.imageWallReverse
  flex-direction: row-reverse
@media only screen and (max-width: $rwdM)
  .imageWall
    margin-bottom: 0
    .container
      flex-direction: column
      max-height: none
      align-items: center
      margin: 40px auto

      .img,.info
        +size(100%,250px)
        +center()
        overflow: hidden
      .info
        padding: 30px
        max-width: 500px
        p
          writing-mode: horizontal-tb
</style>
