const { NotImplementedError } = require('../lib');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const columnsWithZeroSet = new Set();
  let sum = 0;

  for (let r = 0; r < matrix.length; r += 1) {
    for (let c = 0; c < matrix[0].length; c += 1) {
      if (matrix[r][c] === 0) {
        columnsWithZeroSet.add(c);
      } else if (matrix[r][c] !== 0 && !columnsWithZeroSet.has(c)) {
        sum += matrix[r][c];
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
