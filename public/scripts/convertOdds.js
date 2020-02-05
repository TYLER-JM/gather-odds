const convertOdds = (e) => {
  let arr = document.getElementsByClassName('moneyline');

  if (e.target.value === 'decimal') {
    for (item of arr) {
      if (Number(item.innerHTML) > 0) {
        let converted = (Number(item.innerHTML) / 100) + 1;
        item.innerHTML = converted.toFixed(2);
      } else {
        let converted = (100 / Math.abs(Number(item.innerHTML))) + 1;
        item.innerHTML = converted.toFixed(2);
      }
      // console.log(item.innerHTML);
    }
  } else {
    for (item of arr) {
      if (Number(item.innerHTML) >= 2.00) {
        let converted = (Number(item.innerHTML) - 1) * 100;
        item.innerHTML = converted.toFixed(0);
      } else {
        let converted = -100 / (Number(item.innerHTML) - 1);
        item.innerHTML = converted.toFixed(0);
      }
    }
  }

}
