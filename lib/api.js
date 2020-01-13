const axios = require('axios');
const apiHeaders = require('./Private/api_headers.json');
const getOdds = (league) => {

  const leagues = {
    nfl: 2,
    nba: 4,
    nhl: 6
  };

  return axios({
      "method":"GET",
      "url":`https://therundown-therundown-v1.p.rapidapi.com/sports/${leagues[league]}/events/2020-01-13`,
      "headers":apiHeaders,
      "params":{
        "include":[
          "all_periods",
          "scores"
        ],
        "offset":"300"
      }
    })
    .then((response)=>{
      // console.log("response after successful call: ", response)
      return response;
    })
    .catch((error)=>{
      console.log(error)
    })
}

module.exports = getOdds;