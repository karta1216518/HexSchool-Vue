<template>
  <div class="banner" @mouseover="stopWorking" @mouseleave="startWorking">
    <div v-for="(item,index) in bannerItem" :key="index">
      <div
        class="backgroundImg"
        :class="{
					'backgroundImgRight':item.moveDiretive,
					'backgroundImgLeft':!item.moveDiretive,
					'imgActive':bannerStatus.active==index
				}"
        :style="{ 'backgroundImage': `url(${imgUrl[index]})`}"
      >
        <div
          class="content"
          :class="{'bannerFlowRight':item.moveDiretive,
					'bannerFlowLeft':!item.moveDiretive,
					'bannerFlowActive':bannerStatus.active==index}"
        >
          <div class="logo" :style="{ 'backgroundImage': `url(${item.logoUrl})`}"></div>
          <h2 class="text">{{item.text1}}</h2>
          <h2 class="text">{{item.text2}}</h2>
          <a href="#" class="linkBtn">{{item.btnText||'了解更多'}}</a>
        </div>
      </div>
    </div>

    <div class="leftSwitchBtn switchBtn" @click="changePagination(-1)"></div>
    <div class="rightSwitchBtn switchBtn" @click="changePagination(1)"></div>
    <div class="pagination">
      <div
        class="paginationBtn"
        v-for="(btn,index) in bannerItem"
        :key="index"
        @click="goto(index)"
      >
        <div
          class="progressBar"
          :class="{'progressActive' : bannerStatus.active==index&&bannerStatus.working}"
        >
          <div
            class="progress"
            :class="{'progressWorking':bannerStatus.working}"
            v-if="bannerStatus.active==index"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bannerStatus: {
        active: 3,
        interval: "",
        working: true,
        screenWidth: 1200
      },
      bannerItem: [
        {
          bgUrl: require("@/assets/img/banner1.jpg"),
          rwdUrl: require("@/assets/img/s_banner1.jpg"),
          logoUrl: require("@/assets/img/logo1.png"),
          text1: "敲響戰鼓",
          text2: "贊達拉的國王",
          moveDiretive: false,
          btnText: ""
        },
        {
          bgUrl: require("@/assets/img/banner2.jpg"),
          rwdUrl: require("@/assets/img/s_banner2.jpg"),
          logoUrl: require("@/assets/img/logo2.png"),
          text1: "創造世界",
          text2: "瞭解暴雪的工作機會",
          moveDiretive: true,
          btnText: "馬上看看"
        },
        {
          bgUrl: require("@/assets/img/banner3.jpg"),
          rwdUrl: require("@/assets/img/s_banner3.jpg"),
          logoUrl: require("@/assets/img/logo3.png"),
          text1: "暴雪 BATTLE.NET 行動應用程式",
          text2: "",
          moveDiretive: false,
          btnText: ""
        },
        {
          bgUrl: require("@/assets/img/banner4.jpg"),
          rwdUrl: require("@/assets/img/s_banner4.jpg"),
          logoUrl: require("@/assets/img/logo4.png"),
          text1: "和好友聊天",
          text2: "不會遺漏你傳的內容",
          moveDiretive: true,
          btnText: ""
        }
      ]
    };
  },
  computed: {
    slideIn() {
      return this.bannerStatus.active + 1 == 4
        ? 0
        : this.bannerStatus.active + 1;
    },
    imgUrl() {
      let screen = this.bannerStatus.screenWidth;
      let url;
      if (+screen >= 768) {
        url = this.bannerItem.map(x => {
          return x.bgUrl;
        });
      } else {
        url = this.bannerItem.map(x => {
          return x.rwdUrl;
        });
      }
      return url;
    }
  },
  methods: {
    change() {
      this.bannerStatus.active < this.bannerItem.length - 1
        ? this.bannerStatus.active++
        : (this.bannerStatus.active = 0);
    },
    changePagination(d) {
      if (this.bannerStatus.active + d === -1) {
        this.bannerStatus.active = this.bannerItem.length - 1;
      } else if (this.bannerStatus.active + d === this.bannerItem.length) {
        this.bannerStatus.active = 0;
      } else {
        this.bannerStatus.active += d;
      }
      this.stopWorking();
    },
    goto(p) {
      this.bannerStatus.active = p;
      this.stopWorking();
    },
    stopWorking() {
      if (this.bannerStatus.interval) clearInterval(this.bannerStatus.interval);
      this.bannerStatus.working = false;
    },
    startWorking() {
      let vm = this;
      this.bannerStatus.interval = setInterval(() => {
        vm.change();
      }, 5000);
      this.bannerStatus.working = true;
    }
  },
  created() {
    this.bannerStatus.screenWidth = window.innerWidth;
  },
  mounted() {
    let vm = this;
    setTimeout(() => {
      vm.change(), 1;
    });
    vm.startWorking();
    window.onresize = () => {
      // 定义窗口大小变更通知事件
      vm.bannerStatus.screenWidth = window.innerWidth;
    };
  },
  watch: {
    screenWidth(val) {
      this.bannerStatus.screenWidth = val;
    }
  }
};
</script>

<style lang="sass" scoped>
@import "@/assets/sass/global.sass"

@mixin transitionFlow($d)
		opacity: 0
		transition: 1s cubic-bezier(0.03, 0.85, 0.6, 1)
		transition-delay: $d
		position: relative

.banner
	+size(100%,500px)
	+center()
	overflow: hidden
	position: relative
	.backgroundImg
		+size(100%)
		background-size: 110%
		background-position: center
		position: absolute
		left: 0
		top: 0
		opacity: 0
		transition: 2s cubic-bezier(0.1, 0.9, 0.6, 1),opacity .5s linear
	.imgActive
		opacity: 1
		background-position: center !important
	.backgroundImgRight
		background-position: right 
	.backgroundImgLeft
		background-position: left 
	&:hover
		.switchBtn
			opacity: 1
@media only screen and (max-width: $rwdM)
	.backgroundImg
		background-repeat: no-repeat
		background-size: auto 100% !important

.content
	+size(100%)
	position: relative
	z-index: 1
	color: white
	text-shadow: rgba(0,0,0,.5) 4px 4px 10px
	padding: 5% 120px
	box-sizing: border-box
	width: 100%
	.logo
		+size(100%,200px)
		background-size: contain
		background-repeat: no-repeat
		+transitionFlow(.2s)	
	.text
		font-size: 50px
		font-family: Microsoft JhengHei
		margin: 0
		display: block
		text-align: left
		+transitionFlow(.5s)	
	.linkBtn
    text-decoration: none
    background: red
    color: white
    font-size: 20px
    margin: 10px
    font-weight: 600
    +size(160px,50px)
    +center()
    +font()
    +transitionFlow(.8s)	
.bannerFlowRight
	.logo,.text,.linkBtn
		left: -60px 
.bannerFlowLeft
	.logo,.text,.linkBtn
		left: 60px
.bannerFlowActive
	.logo,.text,.linkBtn
		opacity: 1 !important
		left: 0 !important
@media only screen and (max-width: $rwdM)
	.content
		padding: 0
		flex-direction: column
		+center()
		.logo,.text,.linkBtn
			position: relative
		.logo
			background-position: center
			height: 150px
		.text
			font-size: 32px
	.bannerFlowRight
		.logo,.text,.linkBtn
			left: -30px 
	.bannerFlowLeft
		.logo,.text,.linkBtn
			left: 30px

.switchBtn
	position: absolute
	top: 50%
	transform: translateY(-50%)
	z-index: 2
	background: rgba(255,255,255,.5)
	opacity: 0
	transition: .5s
	cursor: pointer
	+size(80px,200px)
	&.leftSwitchBtn
		left: 0
	&.rightSwitchBtn
		right: 0
  
.pagination
	position: absolute
	bottom: 0
	height: 30px
	z-index: 1
	display: flex
	.paginationBtn
		margin: 4px
		cursor: pointer
		+size(100px,100%)
		.progressActive
			background: rgba(red,.5) !important
		.progressBar
			background: rgba(255,255,255,.5)
			height: 8px
			.progress
				background: red
				height: 100%        
        transition: 1s
			.progressWorking
				animation: progressWorking 5s linear
@keyframes progressWorking
	0%
		width: 0
	100%
		width: 100%
@media only screen and (max-width: $rwdM)
	.pagination
		width: 100%
	.paginationBtn
		width: 100% !important
</style>