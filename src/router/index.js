import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/inicio',
    name: 'Main',
    component: () => import('../components/Main.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/options',
    name: 'Options',
    component: () => import('../views/Options.vue')
  },
  {
    path: '/capitales',
    name: 'Capitales',
    component: () => import('../views/Capitales.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
