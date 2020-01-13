const axios = require('axios');
const getOdds = (league) => {

  const leagues = {
    nfl: 2,
    nba: 4,
    nhl: 6
  };

  return axios({
    "method":"GET",
    "url":`https://therundown-therundown-v1.p.rapidapi.com/sports/${leagues[league]}/events/2020-01-13`,
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"therundown-therundown-v1.p.rapidapi.com",
    // "x-rapidapi-host": process.env.RAPIDAPI_HOST,
    "x-rapidapi-key":"6a75e4cf8fmsh4aa85bcc9940ceap11141ajsn3fea21c90b0c"
    // "x-rapidapi-key":process.env.RAPIDAPI_KEY,
    },"params":{
    "include":["all_periods",
    "scores"],"offset":"300"
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