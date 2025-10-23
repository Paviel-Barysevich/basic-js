const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  const charCountObj = {};
  let result = 0;

  for (let i = 0; i < s1.length; i += 1) {
    const char = s1[i];
    let charCount = 0;
    let charLastIndexInS2 = -1;

    if (char in charCountObj) {
      charCount = charCountObj[char][0];
      charLastIndexInS2 = charCountObj[char][1];
    }

    for (let j = charLastIndexInS2 + 1; j < s2.length; j += 1) {
      if (char === s2[j]) {
        charCount += 1;
        charLastIndexInS2 = j;
        charCountObj[char] = [charCount, charLastIndexInS2];
        break;
      }
    }
  }

  function countCommonChars(object) {
    let charNumber = 0;

    if (Array.isArray(Object.values(object)[0])) {
      for (const array of Object.values(object)) {
        charNumber += array[0];
      }
    }

    return charNumber;
  }

  result = countCommonChars(charCountObj);

  return result;
}

module.exports = {
  getCommonCharacterCount
};
