<template>
  <div class="iconArea">
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
      integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
      crossorigin="anonymous"
    >

    <a
      href="https://github.com/karta1216518/HexSchool-Vue"
      target="_block"
    >
      <i class="fab fa-github"></i>
    </a>
    <a href="#">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="#">
      <i class="fab fa-google"></i>
    </a>

    <a href="#">
      <i class="fab fa-youtube"></i>
    </a>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>

.iconArea
	display: flex
	margin: 20px
	> a
		padding: 10px
		margin: 0px 10px
		width: 40px
		height: 40px
		display: flex
		align-items: center
		justify-content: center
		text-decoration: none
		border-radius: 30%
		box-shadow: 0 5px 15px -5px #00000070
		background-color: #f1f1f1
		color: #3F5D45
		overflow: hidden
		position: relative
		> i
			font-size: 26px	
			transition: 0.2s linear
	a:hover i
		transform: scale(1.3)
		color: #f1f1f1
	a::before
		content: ''
		position: absolute
		width: 120%
		height: 120%
		background-color: #3F5D45
		transform: rotate(45deg)
		left: -110%
		top: 90%
	a:hover::before
		animation: hover 0.7s 1
		top: -10%
		left: -10%
		@keyframes hover
			0%
				left: -110%
				top: 90%
			50%
				left: 10%
				top: -30%
			100%
				top: -10%
				left: -10%

</style>
