import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Product from './views/Product.vue'
import ProductDetailPage from './views/ProductDetailPage.vue'
import Cart from './views/Cart.vue'
import Login from './views/Login.vue'
import Checkout from './views/Checkout.vue'
import Payment from '@/components/Checkout/FormPage/Payment.vue'
import Personal from '@/components/Checkout/FormPage/Personal.vue'
import Transport from '@/components/Checkout/FormPage/Transport.vue'
import OrderCheck from '@/components/OrderCheck/OrderCheck.vue'
import CompleteOrder from '@/components/CompleteOrder/CompleteOrder.vue'

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
          component: Personal,
          meta: { requiresAuth: true }
        },
        {
          path: '/transport',
          name: 'transport',
          component: Transport,
          meta: { requiresAuth: true },
          beforeEnter: (to, from, next) => {
            if (from.name === 'checkout') {
              next()
            } else {
              next({ name: 'home' })
            }
          }
        },
        {
          path: '/payment',
          name: 'payment',
          component: Payment,
          meta: { requiresAuth: true },
          beforeEnter: (to, from, next) => {
            if (from.name === 'transport') {
              next()
            } else {
              next({ name: 'home' })
            }
          }
        }
      ]
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/productDetailPage/:id',
      name: 'productDetailPage',
      component: ProductDetailPage
    },
    {
      path: '/orderCheck',
      name: 'orderCheck',
      component: OrderCheck,
      beforeEnter: (to, from, next) => {
        if (from.name === 'payment') {
          next()
        } else {
          next({ name: 'home' })
        }
      }
    },
    {
      path: '/completeOrder',
      name: 'completeOrder',
      component: CompleteOrder,
      beforeEnter: (to, from, next) => {
        if (from.name === 'orderCheck') {
          next()
        } else {
          next({ name: 'home' })
        }
      }
    },
    {
      path: '*',
      name: 'home',
      component: Home
    }
  ]
})
