<template>
  <div id="app">
    <NavBar/>
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar/NavBar.vue";
import Footer from "@/components/Footer/Footer.vue";

// import { mapMutations } from "vuex";
// import { mapActions } from "vuex";

export default {
  name: "app",
  components: { NavBar, Footer },
  data() {
    return {};
  },
  methods: {},
  created() {}
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

body,html
  +font()
  scroll-behavior: smooth
  overflow-y: overlay
#app
  padding-right: calc(100vw - 100%)
ul
  padding: 0
  margin: 0
  width: 100%
li
  list-style: none
a
  text-decoration: none
</style>
