'use strict';
function abbrevName(name) {

  const nameArray = name.split(' ');
  const fn = nameArray[0].substring(0, 1).toUpperCase();
  const ln = nameArray[1].substring(0, 1).toUpperCase();

  return fn + '.' + ln;

}
//test
console.log(abbrevName('justin morris'));

//expected output => J.M
