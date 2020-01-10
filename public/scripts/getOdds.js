$(function() {
  $('#getOddsBtn').on('click', () => {
    console.log('button pushed');
    $.ajax('/odds', {method: 'GET'});
  });
})


