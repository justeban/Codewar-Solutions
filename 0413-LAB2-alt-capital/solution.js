'use strict';

function capitalize(s) { //eslint-disable-line

  let oddS = s.split('');
  let evenS = s.split('');

  for (let i in oddS) {
    if (!(i % 2)) {
      oddS[i] = oddS[i].toUpperCase();
    }
  }

  for (let i in evenS) {
    if (i % 2) {
      evenS[i] = evenS[i].toUpperCase();
    }
  }

  return [oddS.join(''), evenS.join('')];
}