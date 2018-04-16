'use strict';

function validatePIN(pin) {
  return RegExp(/^\d{6}$|^\d{4}$/).test(pin);
}