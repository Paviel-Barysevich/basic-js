const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  if (typeof n !== 'number' || Number.isNaN(n) || !Number.isFinite(n)) {
    return;
  }

  const numberWithoutDigitArray = [];
  const arrayFromArgument = n.toString().split('');

  if (arrayFromArgument.length <= 1) {
    return n;
  }

  for (let i = 0; i < arrayFromArgument.length; i += 1) {
    const cloneArray = [...arrayFromArgument];

    delete cloneArray[i];

    const numberWithoutDigit = Number(cloneArray.join(''));

    numberWithoutDigitArray.push(numberWithoutDigit);
  }

  const maxNumberWithoutDigit = Math.max(...numberWithoutDigitArray);

  return maxNumberWithoutDigit;
}

module.exports = {
  deleteDigit
};
