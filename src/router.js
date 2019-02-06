import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Product from './views/Product.vue'
import Cart from './views/Cart.vue'
import Login from './views/Login.vue'
import Checkout from './views/Checkout.vue'
import Payment from '@/components/Checkout/FormPage/Payment.vue'
import Personal from '@/components/Checkout/FormPage/Personal.vue'
import Transport from '@/components/Checkout/FormPage/Transport.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/checkout',
      component: Checkout,
      children: [
        {
          path: '',
          name: 'checkout',
          component: Personal
        },
        {
          path: '/transport',
          name: 'transport',
          component: Transport
        },
        {
          path: '/payment',
          name: 'payment',
          component: Payment
        }
      ]
    },
    {
      path: '/product',
      name: 'product',
      component: Product
      // component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
