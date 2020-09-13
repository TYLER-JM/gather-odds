const selectLeague = (league) => {
  let anchor = document.getElementById('getOddsLink');
  // console.log('select tag: ', elem);
  anchor.setAttribute('href', `/odds/${league}`)
};

//set the url when the page loads
selectLeague(document.getElementById('league').value);