<template>
  <div class="home">
    <ProfilePage />
  </div>
</template>

<script>
import ProfilePage from '@/components/ProfilePage.vue'

export default {
  name: 'home',
  components: {
    ProfilePage
  },
}
</script>

<style scoped>
  .home {
    padding: 30px;
    padding-top: 0px;
  }
</style>
