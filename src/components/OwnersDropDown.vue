<template>
    <div class="owner-drop-down">
        <select>
            <option value="" selected disabled hidden>Choose Owner {{dropDownNum}}</option>
            <option v-for="owner in ownerArray" :key="owner.ownerId" :value="owner.ownerId">{{owner.fullName}}</option>
        </select>
    </div>
</template>

<script>
import API_Service from '@/service/API_Service.js'

export default {
  name: "OwnersDropDown",
  props: {
    dropDownNum: String
  },
  data() {
    return {
      ownerArray: []
    };
  },
  created() {
    API_Service
      .getAllOwners()
      .then(owners => (this.ownerArray = owners));
  }
};
</script>

<style>
</style>