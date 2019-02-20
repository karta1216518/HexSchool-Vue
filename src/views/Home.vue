<template>
  <div class="home">
    <Banner />
    <div class="section">精選商品</div>
    <div class="productArea">
      <div class="
        product">
        <template v-for="item in productList.slice(0, 3)">
          <ProductItem
            :item="item"
            :key="item.id"
          />
        </template>
      </div>
    </div>
    <div class="section">關於Karta</div>
    <template v-for="(item,index) in wallContent">
      <ImageWall
        :item="item"
        :index="index"
        :key="index"
      />
    </template>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner/Banner.vue'
import ImageWall from '@/components/ImageWall/ImageWall.vue'

export default {
  name: 'home',
  components: {
    Banner,
    ImageWall
  },
  data () {
    return {
      wallContent: [
        {
          imgUrl: require('@/assets/img/wall1.jpg'),
          title: 'Promise',
          content: '此條目為介紹 Promise 建構式。'
        },
        {
          imgUrl: require('@/assets/img/wall2.jpg'),
          title: 'Promise',
          content: '此條目為介紹 Promise 建構式。:'
        },
        {
          imgUrl: require('@/assets/img/wall3.jpg'),
          title: 'Promise',
          content: '此條目為介紹 Promise 建構式。:'
        }
      ]
    }
  },
  computed: {
    productList () {
      return this.$store.state.product.productList
    }
  }
}
</script>

<style scoped lang="sass">
.home
  background-image: url('https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=655&q=80')
  background-size: cover
  background-attachment: fixed
.section
  display: flex
  justify-content: center
  align-items: center
  height: 560px
  font-size: 40px
  font-weight: 600
  letter-spacing: 10px
  color: #3F5D45
  text-shadow: 5px 5px 15px rgba(#3F5D45,.3)
  background-attachment: fixed
  background-image: url('https://images.unsplash.com/photo-1534944845791-f9e35a201bf8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80')
  background-size: cover
  background-position: center
.productArea
  padding: 20px
  background-color: #fff
.product
  display: flex
  justify-content: space-around
  margin: 40px auto
  max-width: 1200px
  flex-wrap: wrap
</style>
