import auth from '../auth.js'

export default {
    getTotalStats() {
      return fetch(`${process.env.VUE_APP_REMOTE_API}/api/totalstats/`, {headers: {Authorization: 'Bearer ' + auth.getToken()}})
      .then((response) => {
        return response.json();
      });
    },
    getStatsForOneOwner(ownerId) {
      return fetch(`${process.env.VUE_APP_REMOTE_API}/api/stats/${ownerId}`, {headers: {Authorization: 'Bearer ' + auth.getToken()}})
      .then((response) => {
        return response.json();
      });
    },
    getAllOwners() {
        return fetch(`${process.env.VUE_APP_REMOTE_API}/api/owners`, {headers: {Authorization: 'Bearer ' + auth.getToken()}})
        .then((response) => {
          return response.json();
        });
    },
    getH2HStats(ownerOne, ownerTwo) {
        return fetch(`${process.env.VUE_APP_REMOTE_API}/api/h2hstats/${ownerOne}/${ownerTwo}`, {headers: {Authorization: 'Bearer ' + auth.getToken()}})
        .then((response) => {
          return response.json();
        });
    },
    getBoardPosts() {
      return fetch(`${process.env.VUE_APP_REMOTE_API}/api/boardposts/`, {headers: {Authorization: 'Bearer ' + auth.getToken()}})
      .then((response) => {
        return response.json();
    });
    },
    
}