const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (typeof str !== 'string') {
    return new Error('A string is required as the argument of the function encodeLine');
  }

  if (str.trim().length === 0) {
    return '';
  }

  const charsArray = [];

  for (let i = 0; i < str.length; i += 1) {
    const char = [0, ''];

    if (charsArray.at(-1)?.[1] === str[i]) {
      charsArray.at(-1)[0] += 1;
    } else {
      char[0] += 1;
      char[1] = str[i];
      charsArray.push(char);
    }
  }

  const encodedLine = charsArray.reduce(
    (acc, char) => char[0] > 1 ? acc + char[0] + char[1] : acc + char[1],
  '');

  return encodedLine;
}

module.exports = {
  encodeLine
};
