const API_URL = 'http://localhost:8080/LeagueDataAccess/api/owners/';

export default {
  async getOwners() {
    const res = await fetch(API_URL);
    return res.json();
  },
};
