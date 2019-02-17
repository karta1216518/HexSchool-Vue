<template>
  <div class="logo">
    <div class="stage">
      <div class="wrapper">
        <div class="slash"></div>
        <div class="sides">
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
          <div class="side"></div>
        </div>
        <div class="text">
          <div class="textBacking">{{title}}</div>
          <div class="textLeftMove">
            <div class="inner">{{title}}</div>
          </div>
          <div class="textRightMove">
            <div class="inner">{{title}}</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "logo",
  data() {
    return {
      title: "Karta's file"
    };
  }
};
</script>

<style scoped lang="sass">
@import "@/assets/sass/global.sass"
$logoText: #3F5D45
$logoBG: $cNavBar
$logoShadow: #3F5D45



*:before, *:after
  box-sizing: border-box
  font-rendering: optimizeLegibility
  -webkit-font-smoothing: antialiased
  
.stage
  +size(100%,60px)
  +center()
.wrapper
  +size(100%)
  position: relative

.slash
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%) rotate(-24deg) scaleY(0)
  transform-origin: center center
  width: 2px
  height: 145%
  background: $logoText
  z-index: 4
  animation: slash 10s ease-in infinite
  
  &:before
    content: ''
    display: block
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 10px
    height: 120%
    background: $logoBG
    z-index: -1
    
  &:after
    content: ''
    display: block
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    background: $logoText
  
.sides
  position: absolute
  width: 100%
  height: 100%
  top: 0
  left: 0
  overflow: hidden
  
  .side
    position: absolute
    background: $logoText
  
  .side:nth-child(1)
    top: 0
    left: 0
    width: 100%
    height: 0.15rem
    transform: translateX(-101%)
    animation: side-top linear 10s infinite
  
  .side:nth-child(2)
    top: 0
    right: 0
    width: 0.15rem
    height: 100%
    transform: translateY(-101%)
    animation: side-right linear 10s infinite
  
  .side:nth-child(3)
    left: 0
    bottom: 0
    width: 100%
    height: 0.15rem
    transform: translateX(101%)
    animation: side-bottom linear 10s infinite
  
  .side:nth-child(4)
    top: 0
    left: 0
    width: 0.15rem
    height: 100%
    transform: translateY(101%)
    animation: side-left linear 10s infinite
  
.text
  +font()
  position: relative
  top: 50%
  transform: translateY(-50%)
  white-space: nowrap
  margin: 0 15px 
  letter-spacing: 3px
  color: $logoText
  font-size: $fontSize
  text-transform: uppercase

.textBacking
  opacity: 0
  
.textLeftMove
  position: absolute
  top: 0
  left: 0
  overflow: hidden
  width: 51%
  .inner
    transform: translateX(100%)
    animation: text-move 10s ease-in-out infinite
.textRightMove
  position: absolute
  top: 0
  right: 0
  overflow: hidden
  +size(50%,100%)  
  .inner
    transform: translateX(-200%)
    animation: text-move-re 10s ease-in-out infinite

@keyframes slash
  0%
    transform: translate(-50%, -50%) rotate(-24deg) scaleY(0)
  3%
    transform: translate(-50%, -50%) rotate(-24deg) scaleY(1)
  10%
    transform: translate(-50%, -50%) rotate(-24deg) scaleY(1)
  12% // 1 second
    transform: translate(-50%, -50%) rotate(-24deg) scaleY(0)
  100%
    transform: translate(-50%, -50%) rotate(-24deg) scaleY(0)
    
@keyframes text-move
  5%
    transform: translateX(100%)
  15%
    transform: translateX(0)
  70%
    transform: translateX(0)
  80%
    transform: translateX(-200%)
  100%
    transform: translateX(-200%)
@keyframes text-move-re
  5%
    transform: translateX(-200%)
  15%
    transform: translateX(-100%)
  70%
    transform: translateX(-100%)
  80%
    transform: translateX(-300%)
  100%
    transform: translateX(-300%)

@keyframes side-top
  0%
  10%
    transform: translateX(-101%)
  20%
    transform: translateX(0)

  75%
    transform: translateX(0%)
  80%
    transform: translateX(101%)

  100%
    transform: translateX(101%)
@keyframes side-right
  0%

  20%
    transform: translateY(-101%)
  22%
    transform: translateY(0)

  80%
    transform: translateY(0%)
  82%
    transform: translateY(101%)

  100%
    transform: translateY(101%)
@keyframes side-bottom
  0%

  22%
    transform: translateX(101%)
  27%
    transform: translateX(0)

  82%
    transform: translateX(0%)
  87%
    transform: translateX(-101%)
  100%
    transform: translateX(-101%)
@keyframes side-left
  0%

  27%
    transform: translateY(101%)
  30%
    transform: translateY(0%)

  87%
    transform: translateY(0%)
  90%
    transform: translateY(-101%)
  100%
    transform: translateY(-101%)
</style>
