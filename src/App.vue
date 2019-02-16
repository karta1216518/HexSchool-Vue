<template>
  <div id="app">
    <NavBar />
    <transition
      name="fade"
      mode="in-out"
    >
      <Loading v-show="isShow" />
    </transition>

    <transition
      name="fade"
      mode="out-in"
    >
      <keep-alive>
        <router-view />
      </keep-alive>
    </transition>
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import Footer from "@/components/Footer/Footer.vue";
import Loading from "@/components/Loading/Loading.vue";

export default {
  name: "app",
  components: { NavBar, Footer, Loading },
  data() {
    return {};
  },
  methods: {},
  created() {
    this.$store.dispatch("GET_PRODUCTLIST");
  },
  computed: {
    isShow() {
      return this.$store.state.loading;
    }
  }
};
</script>

<style lang="sass">
@import "@/assets/sass/global.sass"
.icon 
  width: 1.5em
  height: 1.5em
  vertical-align: -0.15em
  fill: currentColor
  overflow: hidden

.fade-enter-active, .fade-leave-active 
  transition: opacity .5s
.fade-enter, .fade-leave-to
  opacity: 0

.list-complete-enter, .list-complete-leave-to
  opacity: 0
  transform: translate(20px,20px)
.list-complete-leave-active 
  transform: translate(0px,0px)



body,html
  +font()
  scroll-behavior: smooth
  overflow-y: overlay
body
  padding: 0 !important
  margin: 0
#app
  // padding-right: calc(100vw - 100%) 
  position: relative
ul
  padding: 0
  margin: 0
  width: 100%
li
  list-style: none
a
  text-decoration: none
  &:visited,&:link
    color: $cPri
.imageWall:last-child
  margin-bottom: 0 !important
</style>
