const { NotImplementedError } = require('../extensions/index.js');

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
  let encodedString = '';
  let counter = 1;
  let comparedLetter = str[0] || '';

  for (let i = 1; i < str.length; i++) {
    let currentLetter = str[i];

    if (currentLetter === comparedLetter) {
      counter++;
    } else {
      counter === 1 ? encodedString += comparedLetter
                    : encodedString += counter + comparedLetter;
      comparedLetter = currentLetter;
      counter = 1;
    }
  }

  if (counter === 1) {
    encodedString += comparedLetter;
  } else {
    encodedString += counter + comparedLetter;
  }

  return encodedString;
}

module.exports = {
  encodeLine
};
