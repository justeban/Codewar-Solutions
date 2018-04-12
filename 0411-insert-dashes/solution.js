'use strict';
function insertDash(num) { //eslint-disable-line
  let numArray = num.toString().split('');
  numArray.forEach(function (item, i) {
    if (item !== 0 && item % 2 && numArray[i + 1] % 2) {
      numArray.splice(i + 1, 0, '-');
      i++;
    }
  });
  return numArray.join('');
}
