const makeCall = async () => {
  try {
    //res will be the return value of the api function I write
    const res = await $.ajax('/odds', {method: 'GET'});
    console.log("the result of the call: ", res);
  } catch (err) {
    console.error(err);
  }
  
};

$(function() {
  $('#getOddsBtn').on('click', () => {
    console.log('button pushed');
    makeCall();
    // const res = await $.ajax('/odds', {method: 'GET'});
  });
})


