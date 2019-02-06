<template>
  <div class="classMenu">
    <div class="title">甜點類別</div>
    <ul>
      <li
        class="classMenuItem"
        v-for="item in classType"
        :key="item"
        :class="{ 'nowActive' : nowActive==item }"
      >
        {{item}}
        <span>(30)</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "classMenu",
  data() {
    return {
      classType: ["所有甜點", "本日精選", "人氣推薦", "新品上市"],
      nowActive: "所有甜點"
    };
  },
  computed: {}
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"
.classMenu
  min-width: 200px
  margin-bottom: 40px
.title,li
  +center()
  +size(100%,60px)
  font-weight: 600
  font-size: 20px
.title
  background: $cPri
  color: $cBText

li
  color: $cPri
  border: 1px solid $cLite
  +hover()
  &:hover
    background: $cSelect
.nowActive
  background: $cLite !important

</style>
