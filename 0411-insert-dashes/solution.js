'use strict';
function insertDash(num) { // eslint-disable-line
  let numArray = num.toString().split('');
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] !== 0 && numArray[i] % 2 && numArray[i + 1] % 2) {
      numArray.splice(i + 1, 0, '-');
      i++;
    }
  }
  return numArray.join('');
}
