<template>
  <div class="h2h-stats">
    <h1>This is the Head to Head Stats page</h1>
    <div class="owner-drop-downs">
      <div>
        <select v-model="selected1">
            <option v-for="owner in setDropDownOneOptions" :key="owner.ownerId" :value="owner.ownerId">{{owner.firstName === 'Zach' ? owner.firstName + ' ' + owner.lastName.substring(0,1) : owner.firstName}}</option>
        </select>
      </div>
      <div>
        <select v-model="selected2">
            <option v-for="owner in setDropDownTwoOptions" :key="owner.ownerId" :value="owner.ownerId">{{owner.firstName === 'Zach' ? owner.firstName + ' ' + owner.lastName.substring(0,1) : owner.firstName}}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
import API_Service from '@/service/API_Service.js';

export default {
  components: {

  },
  data() {
    return {
      selected1: undefined,
      selected2: undefined,
      h2hStatsArray: [],
      ownerArray: [],
    };
  },
  created() {
    API_Service
      .getAllOwners()
      .then(owners => (this.ownerArray = owners));
  },
  computed: {
    setDropDownOneOptions: function(){
      if (this.selected2 != undefined)
        return this.ownerArray.filter(owner => this.selected2 != owner.ownerId);
      else
        return this.ownerArray;
    },
    setDropDownTwoOptions: function(){
      if (this.selected1 != undefined)
        return this.ownerArray.filter(owner => this.selected1 != owner.ownerId);
      else
        return this.ownerArray;
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
}
.owner-drop-downs {
  display: flex;
  justify-content: center;
}
</style>