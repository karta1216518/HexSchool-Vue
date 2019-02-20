<template>
  <ul class="pagination">
    <li
      class="pageItem"
      @click="movePage(-1)"
    >
      <a
        class="pageLink"
        href="#"
      >
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-left"></use>
        </svg>
      </a>
    </li>
    <li
      class="pageItem"
      v-for="item in totalPages"
      :key="item"
    >
      <a
        href="#"
        class="pageLink"
        @click="changePage(item)"
        :class="{'nowActive':nowActive==item}"
      >{{item}}</a>
    </li>

    <li
      class="pageItem"
      @click="movePage(1)"
    >
      <a
        class="pageLink"
        href="#"
      >
        <svg
          class="icon"
          aria-hidden="true"
        >
          <use xlink:href="#icon-right"></use>
        </svg>
      </a>
    </li>
  </ul>
</template>

<script>
import { mapActions } from 'vuex'
import { mapMutations } from 'vuex'

export default {
  name: 'pagination',
  data () {
    return {
      nowActive: 1
    }
  },
  methods: {
    changePage (page) {
      this.nowActive = page
      this.$store.commit('SET_APITYPE', this.nowActive)
      this.$store.dispatch('GET_PRODUCTLIST')
    },
    movePage (d) {
      if (this.nowActive + d >= 1 && this.nowActive + d <= this.totalPages) {
        this.nowActive += d
        this.$store.commit('SET_APITYPE', this.nowActive)
        this.$store.dispatch('GET_PRODUCTLIST')
      }
    }
  },
  computed: {
    totalPages () {
      return this.$store.state.product.totalPages
    }
  }
}
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"
.pagination
  +center()
.pageLink
  +center()
  +size(48px)
  +hover()
  border: 1px solid $cLite
  cursor: pointer
  >.icon
    width: 1em

.nowActive
  background: $cLite !important
  cursor: auto
  &:hover
    box-shadow: none !important
</style>
