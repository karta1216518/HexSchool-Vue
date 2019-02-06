<template>
  <div class="progress">
    <div class="progressBar">
      <div class="outCircle">
        <router-link :to="{ name: 'checkout' }">
          <div class="point"></div>
        </router-link>
      </div>
      <div class="line"></div>
      <div class="outCircle">
        <router-link :to="{ name: 'transport' }">
          <div class="point"></div>
        </router-link>
      </div>
      <div class="line"></div>
      <div class="outCircle">
        <router-link :to="{ name: 'payment' }">
          <div class="point"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "progressBar",
  data() {
    return {};
  }
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/global.sass"
.progress
  padding: 0 40px
  +center()
.progressBar
  max-width: 240px
  width: 100%
  display: flex
  justify-content: space-around  
  align-items: center
  .outCircle
    border: 1px solid #FFF
    border-radius: 20px 
    min-width: 20px
    +size(20px)
    +center()
    .point
      +size(15px)
      background-color: #FFF
      border-radius: 20px
  .line
    height: 1px
    background-color: #FFF
    width: 100%
</style>

