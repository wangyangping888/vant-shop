import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Cart from './views/Cart.vue'
import User from './views/User.vue'
import Product from './views/Product.vue'
import Address from './views/Address.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },{
      path: '/cart',
      name: 'cart',
      component: Cart
    },{
      path: '/user',
      name: 'user',
      component: User
    },{
      path: '/product',
      name: 'product',
      component: Product
    },{
      path: '/address',
      name: 'address',
      component: Address
    }]
})
