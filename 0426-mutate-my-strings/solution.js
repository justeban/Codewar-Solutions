'use strict';

function mutateMyStrings(stringOne, stringTwo) { //eslint-disable-line

  let strArrayOne = stringOne.split('');
  let strArrayTwo = stringTwo.split('');
  let returnStr = stringOne + '\n';

  var forCondition = stringOne.length >= stringTwo.length ? stringOne : stringTwo;

  for (let i = 0; i < forCondition.length; i++) {
    if (!(strArrayOne[i] === strArrayTwo[i])) {
      strArrayOne[i] = strArrayTwo[i];
      let strNoBreaks = strArrayOne.join('');
      returnStr += strNoBreaks + '\n';
    }
  }
  return returnStr;
}