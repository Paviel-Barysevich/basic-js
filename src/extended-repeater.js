const { NotImplementedError } = require("../extensions/index.js");

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
  const separator = options.separator ? options.separator : "+";
  const separatorLength = separator.length;
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  const additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : options.addition === "ADDITION"
    ? "|"
    : "";
  const additionSeparatorLength =
    additionSeparator.length > 0 ? -additionSeparator.length : undefined;
  const addition =
    options.addition || options.addition === false || options.addition === null
      ? options.addition
      : "";
  const additionRepeatTimes = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;
  const subString = addition + additionSeparator;
  const repeatedSubString =
    str +
    subString.repeat(additionRepeatTimes).slice(0, additionSeparatorLength) +
    separator;
  const repeatedString = repeatedSubString
    .repeat(repeatTimes)
    .slice(0, -separatorLength);

  return repeatedString;
}

module.exports = {
  repeater,
};
