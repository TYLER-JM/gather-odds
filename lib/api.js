const axios = require('axios');
const getOdds = () => {
  // console.log("way to call the API, dude");
  // let rez = "hey";
  return axios({
    "method":"GET",
    "url":"https://therundown-therundown-v1.p.rapidapi.com/sports/6/events/2020-01-11",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"therundown-therundown-v1.p.rapidapi.com",
    "x-rapidapi-key":"6a75e4cf8fmsh4aa85bcc9940ceap11141ajsn3fea21c90b0c"
    },"params":{
    "include":["all_periods",
    "scores"],"offset":"0"
    }
    })
    .then((response)=>{
      // console.log("response after successful call: ", response)
      return response;
      // rez = response;
    })
    .catch((error)=>{
      console.log(error)
    })
    // return rez;
}

module.exports = getOdds;