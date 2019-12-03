<template>
    <div class="owner-drop-down">
        <select>
            <option value="" selected disabled hidden>Choose Owner {{dropDownNum}}</option>
            <option v-for="owner in ownerArray" :key="owner.ownerId" :value="owner.ownerId">{{owner.fullName}}</option>
        </select>
    </div>
</template>

<script>
import ownerService from '@/service/OwnerService.js'

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
    ownerService
      .getAllOwners()
      .then(owners => (this.ownerArray = owners));
  }
};
</script>

<style>
</style>