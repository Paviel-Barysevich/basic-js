const { NotImplementedError } = require('../lib');

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
  if (typeof n !== 'number' || !Number.isFinite(n) || Number.isNaN(n)) {
    return new Error('Use a number as the argument');
  }
  const nToArray = `${n}`.split('');

  let sum = nToArray.reduce((acc, num) => acc + Number(num), 0);

  if (`${sum}`.length > 1) {
    sum = getSumOfDigits(sum);
  }

  return sum;
}

module.exports = {
  getSumOfDigits
};
