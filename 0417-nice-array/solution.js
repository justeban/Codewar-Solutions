'use strict';

function isNice(arr) { // eslint-disable-line

  let isNice = false;

  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr.includes(arr[i] - 1) || arr.includes(arr[i] + 1)) {
        isNice = true;
      } else { return isNice = false; }
    }
  }
  return isNice;
}