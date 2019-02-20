<template>
  <div class="classMenu">
    <div class="title">商品類別</div>
    <ul>
      <li
        class="classMenuItem"
        v-for="item in classType"
        :key="item"
        :class="{ 'nowActive' : nowActive==item }"
        @click="changeClass(item)"
      >
        {{item}}
        <span>(30)</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'classMenu',
  data () {
    return {
      classType: ['所有產品', '測試分類', '人氣推薦', '新品上市'],
      nowActive: '所有產品'
    }
  },
  methods: {
    changeClass (item) {
      this.nowActive = item
      this.$emit('changeClass', item)
      if (this.nowActive != '所有產品') {
        this.$store.commit('SET_APITYPE', 'all')
        this.$store.dispatch('GET_PRODUCTLIST')
      }
    }
  }
}
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
