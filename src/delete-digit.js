const { NotImplementedError } = require('../extensions/index.js');

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
  const numString = `${n}`;
  const digitArray = numString.split('');
  let maxNumberArray = [];

  for (let i = 0; i < digitArray.length; i++) {
    const digitArrayString = JSON.stringify(digitArray);
    const copyDigitArray = JSON.parse(digitArrayString);

    copyDigitArray.splice(i, 1);

    const numberWitoutADigit = +copyDigitArray.join('');

    maxNumberArray.push(numberWitoutADigit);
  }

  maxNumberArray.sort((a, b) => b - a);

  const maxNumber = maxNumberArray[0];

  return maxNumber;
}

module.exports = {
  deleteDigit
};
