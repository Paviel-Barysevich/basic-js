const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  function isNumber(string) {
    const numFromHex = Number(`0x${string}`);

    return !Number.isNaN(numFromHex);
  }

  if (typeof n !== 'string') {
    return false;
  }

  let mac48Array = [];

  if (n.includes('-')) {
    mac48Array = [...n.split('-')];
  } else if (n.includes(':')) {
    mac48Array = [...n.split(':')];
  } else {
    return false;
  }

  if (mac48Array.length !== 6) {
    return false;
  }

  const isMAC48 = mac48Array.every(elem => isNumber(elem) && elem.length === 2);

  return isMAC48;
}

module.exports = {
  isMAC48Address
};
