'use strict';

function cubeOdd(arr) { // eslint-disable-line
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if ((typeof arr[i]) === 'string') {
      return undefined;
    }
  }

  let oddArray = arr.map(x => x * x * x).filter(x => x % 2);
  if (oddArray && oddArray.length) {
    return oddArray.reduce((acc, val) => acc + val);
  } else {
    return undefined;
  }
}