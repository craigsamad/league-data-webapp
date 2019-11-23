<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <TotalStats msg="All Time League Stats" />
  </div>
</template>

<script>
// @ is an alias to /src
import TotalStats from '@/components/TotalStats.vue'

export default {
  name: 'home',
  components: {
    TotalStats
  }
}
</script>

<style scoped>
  .home {
    padding: 30px;
    padding-top: 0px;
  }
</style>
