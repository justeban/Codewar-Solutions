'use strict';

function validateUsr(username) { // eslint-disable-line
  let res = RegExp('^[a-z1-9\_]{4,16}$').test(username);
  return res;
}