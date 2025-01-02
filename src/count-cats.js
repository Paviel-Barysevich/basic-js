const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let counter = 0;

  for (let row = 0; row < matrix.length; row++) {
    for (let index = 0; index < matrix[0].length; index++) {
      if (matrix[row][index] === '^^') counter ++;
    }
  }

  return counter;
}

module.exports = {
  countCats
};
