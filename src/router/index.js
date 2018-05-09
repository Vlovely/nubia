import Vue from 'vue'
import Router from 'vue-router'
import Home from '../page/home'
import Cate from '../page/cate'
import Cart from '../page/cart'
import User from '../page/user'
import Detail from '../page/detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/cate',
      name: 'cate',
      component: Cate
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/detail',
      name: 'detail',
      component: Detail
    },
  ]
})
