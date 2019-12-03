import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import SeasonStats from '../views/SeasonStats.vue'
import H2HStats from '../views/H2HStats.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/seasonstats',
    name: 'seasonstats',
    component: SeasonStats
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
