import Vue from 'vue'
import VueRouter from 'vue-router'
import auth from '../auth'
import Home from '../views/Home.vue'
import TotalStats from '../components/TotalStats.vue'
import SeasonStats from '../views/SeasonStats.vue'
import H2HStats from '../views/H2HStats.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import MsgBoard from '../views/MsgBoard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/totalstats',
    name: 'totalstats',
    component: TotalStats,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/seasonstats',
    name: 'seasonstats',
    component: SeasonStats,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/h2hstats',
    name: 'h2hstats',
    component: H2HStats,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/msgboard',
    name: 'msgboard',
    component: MsgBoard,
    meta: {
      requiresAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history', //remove this if hosted externally
  routes
})

router.beforeEach((to, from, next) => {
  // Determine if the route requires Authentication
  const requiresAuth = to.matched.some(x => x.meta.requiresAuth);
  const user = auth.getUser();

  // If it does and they are not logged in, send the user to "/login"
  if (requiresAuth && !user) {
    next("/login");
  } else {
    // Else let them go to their next destination
    next();
  }
});

export default router
