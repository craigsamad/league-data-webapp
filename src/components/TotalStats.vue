<template>
  <div class="all-time-stats">
    <h1>All Time League Stats</h1>
    <div>
      <table class="table table-striped">
        <th>Owner Name</th>
        <th>Reg Wins</th>
        <th>Reg Losses</th>
        <th>Reg Ties</th>
        <th>Total Games</th>
        <th>Win %</th>
        <th>Reg Score For</th>
        <th>Reg Score Against</th>
        <th>PPG</th>
        <th>Highest Reg Score</th>
        <th>Lowest Reg Score</th>
        <th>Post Wins</th>
        <th>Post Loses</th>
        <th>Total Games</th>
        <th>Win %</th>
        <th>Post Score For</th>
        <th>Post Score Against</th>
        <th>PPG</th>
        <tr v-for="owner in statsArray" :key="owner">
          <td
            v-if="owner.firstName === 'Zach'"
          >{{owner.firstName + ' ' + owner.lastName.substring(0,1)}}</td>
          <td v-else>{{owner.firstName}}</td>
          <td>{{owner.regWins}}</td>
          <td>{{owner.regLosses}}</td>
          <td>{{owner.regTies}}</td>
          <td>{{owner.regWins + owner.regLosses + owner.regTies}}</td>
          <td>{{(owner.regWins / (owner.regWins + owner.regLosses + owner.regTies) * 100).toFixed(2)}}%</td>
          <td>{{owner.regScoreFor.toFixed(2)}}</td>
          <td>{{owner.regScoreAgainst.toFixed(2)}}</td>
          <td>{{(owner.regScoreFor / (owner.regWins + owner.regLosses + owner.regTies)).toFixed(2)}}</td>
          <td>{{owner.highestRegScore.toFixed(2)}}</td>
          <td>{{owner.lowestRegScore.toFixed(2)}}</td>
          <td>{{owner.postWins}}</td>
          <td>{{owner.postLosses}}</td>
          <td>{{owner.postWins + owner.postLosses}}</td>
          <td>{{(owner.postWins / (owner.postWins + owner.postLosses) * 100).toFixed(2)}}%</td>
          <td>{{owner.postScoreFor.toFixed(2)}}</td>
          <td>{{owner.postScoreAgainst.toFixed(2)}}</td>
          <td>{{(owner.postScoreFor / (owner.postWins + owner.postLosses)).toFixed(2)}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import API_Service from "@/service/API_Service.js";

export default {
  name: "TotalStats",
  props: {},
  data() {
    return {
      statsArray: []
    };
  },
  created() {
    API_Service.getTotalStats().then(
      parsedStats => (this.statsArray = parsedStats)
    );
  },
  methods: {}
};
</script>

<style scoped>
h1 {
  text-align: center;
}
h3 {
  margin: 40px 0 0;
}
table {
  display: block;
  overflow-x: auto;
}
th,
td {
  border: 1px solid black;
}
tr:nth-child(odd) {
  background-color: rgb(248, 203, 179);
}
tr:nth-child(even) {
  background-color: rgb(208, 206, 206);
}
th:first-child {
  visibility: hidden;
}
th:nth-child(odd) {
  background-color: rgb(180, 198, 231);
}
th:nth-child(even) {
  background-color: rgb(142, 169, 219);
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
