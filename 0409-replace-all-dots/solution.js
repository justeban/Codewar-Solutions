'use strict';

var replaceDots = function (str) {

  var currentStr = str;
  var stringArray = str.split('');

  for (var i = 0; i < stringArray.length; i++) {
    if (stringArray[i] === '.') {
      stringArray[i] = '-';
    }
  }

  return stringArray.join('');
};

//TEST

console.log(replaceDots('the.string.is.here'));

//expected output: 'the-string-is-here'

