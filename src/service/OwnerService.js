export default {
    getTotalStats() {
      return fetch(`http://localhost:8080/LeagueDataAccess/api/totalstats/`)
      .then((response) => {
        return response.json();
      });
    },
    getStatsForOneOwner(ownerId) {
      return fetch(`http://localhost:8080/LeagueDataAccess/api/stats/${ownerId}`)
      .then((response) => {
        return response.json();
      });
    },
    getAllOwners() {
        return fetch(`http://localhost:8080/LeagueDataAccess/api/owners`)
        .then((response) => {
          return response.json();
        });
    },
    getH2HStats(ownerOne, ownerTwo) {
        return fetch(`http://localhost:8080/LeagueDataAccess/api/h2hstats/${ownerOne}/${ownerTwo}`)
        .then((response) => {
          return response.json();
        });
    }
}