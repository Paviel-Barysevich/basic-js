const { NotImplementedError } = require('../lib');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (!Array.isArray(arr)) {
    return new Error('The argument must be an array');
  }

  if (arr.length === 1) {
    return arr;
  }

  if (arr.some(elem => typeof elem !== 'number' || !Number.isFinite(elem) || Number.isNaN(elem))) {
    return new Error('The array must contain numbers only');
  }

  const filteredAndSortedArray = arr.filter(number => number !== -1).sort((a, b) => a - b);
  const sortedByHeightArr = new Array(arr.length).fill(-1);

  arr.forEach((height, i) => {
    if (height !== -1) {
      sortedByHeightArr[i] = filteredAndSortedArray.shift();
    }

    return;
  });

  return sortedByHeightArr;
}

module.exports = {
  sortByHeight
};
