'use strict';

function formatWords(words) { // eslint-disable-line

  let noEmptyArray = [];
  let j = 0;

  if (words) {
    for (let i = 0; i < words.length; i++) {
      if (words[i] !== '') {
        noEmptyArray[j] = words[i];
        j++;
      }
    }

    let lastWord = noEmptyArray ? noEmptyArray[noEmptyArray.length - 1] : '';

    const regex1 = new RegExp(`,(?= ${lastWord})`);
    let wordStr = noEmptyArray.join(', ');
    let rtnstr = wordStr.replace(regex1, ' and');
    return rtnstr;
  }
  return '';
}