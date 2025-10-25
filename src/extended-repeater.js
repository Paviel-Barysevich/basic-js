const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const { repeatTimes = 1,
          separator = '+',
          addition = '',
          additionRepeatTimes = 1,
          additionSeparator  = '|'} = options;
  const argToString = `${str}`;
  let additionString = repeat(addition, additionRepeatTimes, additionSeparator);

  const repeatedString = argToString + additionString;
  let result = repeat(repeatedString, repeatTimes, separator);

  function repeat(string, times, divider) {
    let res = '';

    if (times > 0 && Number.isFinite(times)) {
      for (let k = 0; k < times; k += 1) {
        if (k < times - 1) {
          res += `${string}` + `${divider}`;
        } else {
          res += `${string}`;
        }
      }
    }

    return res;
  }

  return result;
}

module.exports = {
  repeater
};
