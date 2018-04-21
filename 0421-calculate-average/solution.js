'use strict';

function find_average(array) { // eslint-disable-line

  function getSum(total, num) {
    return total += num;
  }

  return array.reduce(getSum, 0) / array.length;
}