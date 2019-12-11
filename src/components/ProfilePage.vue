<template>
  <div>
    <h1>Profile Page</h1>
    {{user}}
  </div>
</template>

<script>
import auth from '@/auth.js'

export default {
  data() {
    return {
      user: auth.getUser(),
    }
  },
  methods: {
    
  }
  
};
</script>

<style>
</style>