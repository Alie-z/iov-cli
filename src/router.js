import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import HomeWay from './views/HomeWay'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home-way',
      component: HomeWay
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/message',
      name: 'message',
      component: () => import('./views/Message/index.vue')
    },
    {
      path: '/demo',
      name: 'demo',
      component: () => import('./views/Demo/index.vue')
    },
    {
      path: '/swiper',
      name: 'swiper',
      component: () => import('./views/Swiper/index.vue')
    }
  ]
})
