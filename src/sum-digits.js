const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let nToString = `${n}`;

  if (nToString.length > 1) {
    nToString = countDigits(nToString);
  } else {
    return +nToString;
  }

  function countDigits(numberToString) {
    let counter = 0;

    for (let i = 0; i < numberToString.length; i++) {
      counter += +numberToString[i];
    }

    let result = `${counter}`;

    if (result.length > 1) {
      result = countDigits(result);
    }

    return result;
  }

  return +nToString;
}

module.exports = {
  getSumOfDigits
};
