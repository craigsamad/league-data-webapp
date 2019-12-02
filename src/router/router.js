import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import IndividualStats from '../views/IndividualStats.vue'
import H2HStats from '../views/H2HStats.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/individualstats',
    name: 'individualstats',
    component: IndividualStats
  },
  {
    path: '/h2hstats',
    name: 'h2hstats',
    component: H2HStats
  }
]

const router = new VueRouter({
  mode: 'history', //remove this if hosted externally
  routes
})

export default router
