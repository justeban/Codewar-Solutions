'use strict';

function high(x) { //eslint-disable-line
  let abcs = 'abcdefghijklmnopqrstuvwxyz';
  let arrayOfWords = x.split(' ');
  let highestSum = 0;
  let highestSumWord = '';

  for (let i = 0; i < arrayOfWords.length; i++) {

    let arrayOfLetters = arrayOfWords[i].split('');
    let wordSum = 0;

    for (let k = 0; k < arrayOfLetters.length; k++) {
      let letterScore = abcs.indexOf(arrayOfLetters[k]);
      wordSum += letterScore;
    }

    if (wordSum > highestSum) {
      highestSumWord = arrayOfWords[i];
      highestSum = wordSum;
    }
  }
  return highestSumWord;
}