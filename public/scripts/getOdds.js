const makeCall = async (league) => {
  // const leagues = {
  //   nfl: 2,
  //   nba: 4,
  //   nhl: 6
  // };
  // axios({
  //   "method":"GET",
  //   "url":`https://therundown-therundown-v1.p.rapidapi.com/sports/${leagues[league]}/events/2020-01-12`,
  //   "headers":{
  //   "content-type":"application/octet-stream",
  //   // "x-rapidapi-host":"therundown-therundown-v1.p.rapidapi.com",
  //   "x-rapidapi-host": process.env.RAPIDAPI_HOST,
  //   // "x-rapidapi-key":"6a75e4cf8fmsh4aa85bcc9940ceap11141ajsn3fea21c90b0c"
  //   "x-rapidapi-key":process.env.RAPIDAPI_KEY,
  //   },"params":{
  //   "include":["all_periods",
  //   "scores"],"offset":"300"
  //   }
  //   })
  //   .then((response)=>{
  //     console.log("response after successful call: ", response)
  //     return response;
  //     // rez = response;
  //   })
  //   .catch((error)=>{
  //     console.log(error)
  //   })
  try {
    //res will be the return value of the api function I write
    const res = await $.ajax(`/odds/${league}`, {method: 'GET'});
    console.log("the result of the call: ", res);
  } catch (err) {
    console.log(err);
  }
  
};

$(function() {
  $('#getOddsBtn').on('click', () => {
    // e.preventDefault();
    // let league = $('#league').val();
    // console.log(league);
    console.log('button pushed');
    makeCall($('#league').val());
    // makeCall();
    // const res = await $.ajax('/odds', {method: 'GET'});
  });
})


