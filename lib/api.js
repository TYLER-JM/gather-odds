const axios = require('axios');
const apiHeaders = require('./Private/api_headers.json');
const getOdds = (league = false) => {

  const leagues = {
    nfl: 2,
    mlb: 3,
    nba: 4,
    nhl: 6
  };

  const date = new Date(Date.now());
  //or use .toJSON()
  const formatDate = date.toISOString().split('T')[0];
  let url = league
              ? `https://therundown-therundown-v1.p.rapidapi.com/sports/${leagues[league]}/events/${formatDate}`
              : 'https://therundown-therundown-v1.p.rapidapi.com/affiliates';


  return axios({
      "method":"GET",
      // "url":`https://therundown-therundown-v1.p.rapidapi.com/sports/${leagues[league]}/events/${formatDate}`,
      "url": url,
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
      return false;
    })
}

module.exports = getOdds;