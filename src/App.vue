<template>
  <div id="app">
    <div id="nav" v-show="getAuth() != null">
      <router-link to="/totalstats">Total Stats</router-link> |
      <router-link to="/seasonstats">Season Stats</router-link> |
      <router-link to="/h2hstats">Head to Head Stats</router-link> |
      <router-link to="/msgboard">Message Board</router-link>
      <button id="logout-button" @click="logOut()">Logout</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
import auth from '@/auth.js'

export default {
  methods: {
    getAuth() {
      return auth.getUser();
    },
    logOut() {
      auth.logout();
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #000000;
}

#nav {
  padding: 30px;
  text-align: left;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: #FB4F14;
}

#logout-button {
  float: right;
}
</style>
