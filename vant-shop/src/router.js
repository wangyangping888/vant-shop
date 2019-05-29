import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import { Tabbar, TabbarItem } from 'vant';
import Cart from './views/Cart.vue'

Vue.use(Router)
Vue.use(Tabbar).use(TabbarItem);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    ,{
      path: '/cart',
      name: 'cart',
      component: Cart
    }
  ]
})
