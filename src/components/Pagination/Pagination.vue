<template>
  <ul class="pagination">
    <li class="pageItem">
      <a class="pageLink" href="#">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-left"></use>
        </svg>
      </a>
    </li>
    <li class="pageItem" v-for="item in 3" :key="item" :class="{'nowActive':nowActive==item}">
      <a class="pageLink" href="#">{{item}}</a>
    </li>

    <li class="pageItem">
      <a class="pageLink" href="#">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "pagination",
  data() {
    return {
      nowActive: 1
    };
  }
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"
.pagination
  +center()
.pageLink
  +center()
  +size(48px)
  +hover
  border: 1px solid $cLite
  cursor: pointer
  >.icon
    width: 1em
  &:hover
    background: $cSelect
.nowActive
  background: $cLite !important
</style>
