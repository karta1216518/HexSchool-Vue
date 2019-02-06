<template>
  <div class="imageWall" :class="{'imageWallReverse':reverse}">
    <div class="img">
      <img src="https://fakeimg.pl/460x460/">
    </div>
    <div class="inf">
      <p>
        青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。
        是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
        是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
        樵江渚上，古今多少事，都付笑談中。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ImageWell",
  props: ["reverse"],
  data() {
    return {};
  }
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"

.imageWall
  max-height: 420px 
  background: $cLite
  margin: 40px auto 
  display: flex
  .img,.inf
    width: 50%
    +center()
  .inf
    padding: 70px
    box-sizing: border-box
    p
      writing-mode: vertical-lr 
.imageWallReverse
  flex-direction: row-reverse
@media only screen and (max-width: $rwdM)
  .imageWall
    flex-direction: column
    max-height: none
    align-items: center
    .img,.inf
      +size(100%,250px)
      +center()
      overflow: hidden
    .inf
      padding: 30px
      max-width: 500px
      p
        writing-mode: horizontal-tb 
</style>
