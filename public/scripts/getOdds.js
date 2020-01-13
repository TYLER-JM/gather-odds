const makeCall = async (league) => {
  try {
    //res will be the return value of the api function I write
    const res = await $.ajax(`/odds/${league}`, {method: 'GET'});
    console.log("the result of the call: ", JSON.parse(res));
  } catch (err) {
    console.log(err);
  }
};

$(function() {
  $('#getOddsBtn').on('click', () => {
    console.log('button pushed');
    makeCall($('#league').val());
    // makeCall();
  });
})


