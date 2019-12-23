<template>
  <div class="h2h-stats">
    <h1>This is the Head to Head Stats page</h1>
    <div class="owner-drop-downs">
      <div>
        <select v-model="selected1">
          <option
            v-for="owner in setDropDownOneOptions"
            :key="owner.ownerId"
            :value="owner.ownerId"
          >{{owner.firstName === 'Zach' ? owner.firstName + ' ' + owner.lastName.substring(0,1) : owner.firstName}}</option>
        </select>
      </div>
      <div>
        <select v-model="selected2">
          <option
            v-for="owner in setDropDownTwoOptions"
            :key="owner.ownerId"
            :value="owner.ownerId"
          >{{owner.firstName === 'Zach' ? owner.firstName + ' ' + owner.lastName.substring(0,1) : owner.firstName}}</option>
        </select>
      </div>
    </div>
    <div class="stats-table" v-if="Object.keys(h2hStatsObject).length != 0">
      <table class="table table-bordered">
        <th></th>
        <th>{{ownerArray.find(element => element.ownerId == selected1).firstName}}</th>
        <th>{{ownerArray.find(element => element.ownerId == selected2).firstName}}</th>
        <tr>
          <td>Regular Season</td>
        </tr>
        <tr>
          <td>Wins:</td>
          <td>{{h2hStatsObject.regWins}}</td>
          <td>{{h2hStatsObject.regLosses}}</td>
        </tr>
        <tr>
          <td>Points:</td>
          <td>{{h2hStatsObject.regScoreFor.toFixed(2)}}</td>
          <td>{{h2hStatsObject.regScoreAgainst.toFixed(2)}}</td>
        </tr>
        <tr>
          <td>Post Season</td>
        </tr>
        <tr>
          <td>Wins:</td>
          <td>{{h2hStatsObject.postWins}}</td>
          <td>{{h2hStatsObject.postLosses}}</td>
        </tr>
        <tr>
          <td>Points:</td>
          <td>{{h2hStatsObject.postScoreFor.toFixed(2)}}</td>
          <td>{{h2hStatsObject.postScoreAgainst.toFixed(2)}}</td>
        </tr>
        <tr>
          <td>Total</td>
        </tr>
        <tr>
          <td>Wins:</td>
          <td>{{h2hStatsObject.regWins + h2hStatsObject.postWins}}</td>
          <td>{{h2hStatsObject.regLosses + h2hStatsObject.postLosses}}</td>
        </tr>
        <tr>
          <td>Points:</td>
          <td>{{(h2hStatsObject.regScoreFor + h2hStatsObject.postScoreFor).toFixed(2)}}</td>
          <td>{{(h2hStatsObject.regScoreAgainst + h2hStatsObject.postScoreAgainst).toFixed(2)}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import API_Service from "@/service/API_Service.js";

export default {
  components: {},
  data() {
    return {
      selected1: undefined,
      selected2: undefined,
      ownerOneName: '',
      ownerTwoName: '',
      h2hStatsObject: {},
      ownerArray: []
    };
  },
  created() {
    API_Service.getAllOwners().then(owners => (this.ownerArray = owners));
  },
  methods: {
    getStats() {
      API_Service.getH2HStats(this.selected1, this.selected2).then(
        parsedStats => (this.h2hStatsObject = parsedStats)
      );
    }
  },
  computed: {
    setDropDownOneOptions: function() {
      if (this.selected2 != undefined)
        return this.ownerArray.filter(owner => this.selected2 != owner.ownerId);
      else return this.ownerArray;
    },
    setDropDownTwoOptions: function() {
      if (this.selected1 != undefined)
        return this.ownerArray.filter(owner => this.selected1 != owner.ownerId);
      else return this.ownerArray;
    },
    populateStatsArray: function() {
      if (this.selected1 != undefined && this.selected2 != undefined) {
        this.getStats();
        return true;
      } else return false;
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