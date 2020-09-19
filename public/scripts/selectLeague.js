const selectLeague = () => {
  let league = document.getElementById('league').value;
  let line = document.getElementById('line').value
  let anchor = document.getElementById('getOddsLink');
  // console.log('select tag: ', elem);
  anchor.setAttribute('href', `/odds/${league}/${line}`)
};

//set the url when the page loads
// selectLeague(document.getElementById('league').value);
selectLeague();