'use strict';

function capitalize(s, arr) { //eslint-disable-line

  let arrayStr = s.split('');

  let rtnStr = arrayStr.map((e, i) => {
    return (arr.includes(i) ? arrayStr[i].toUpperCase() : e);
  });

  return rtnStr.join('');
}


//one liner

capitalize = (s, arr) => { //eslint-disable-line
  return (s.split('')).map((e, i) => { return (arr.includes(i) ? (s.split(''))[i].toUpperCase() : e); }).join('');
};