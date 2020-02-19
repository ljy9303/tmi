import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/landing.vue'
import BaBa from '../components/baba/baba.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children:[
      {
        path: '/baba',
        name: 'BaBa',
        component: BaBa
      }
    ]
  },
  {
    path: '/baba',
    name: 'BaBa',
    component: BaBa,
    children:[
      /*
      {
        path: 'side',
        name: 'Side',
        component: Side
      },
      */
    ],
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
