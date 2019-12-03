<template>
  <div class="home">
    <TotalStats msg="All Time League Stats" />
  </div>
</template>

<script>
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
