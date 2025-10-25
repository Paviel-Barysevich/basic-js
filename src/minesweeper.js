const { NotImplementedError } = require('../lib');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const resultArray = [...matrix];

  for (let i = 0; i < resultArray.length; i += 1) {
    resultArray[i] = [...matrix[i]];
  }

  for (let r = 0; r < matrix.length; r += 1) {
    for (let c = 0; c < matrix[0].length; c += 1) {
      if (r > 0 && r < matrix.length - 1 && c > 0 && c < matrix[0].length - 1) {
        resultArray[r][c] = 0 + matrix[r][c - 1] + matrix[r][c + 1]
        + matrix[r - 1][c - 1] + matrix[r - 1][c] + matrix[r - 1][c + 1]
        + matrix[r + 1][c - 1] + matrix[r + 1][c] + matrix[r + 1][c + 1];
      }
      if (r === 0 && c === 0) {
        resultArray[r][c] = 0 + matrix[r][c + 1] + matrix[r + 1][c]
        + matrix[r + 1][c + 1];
      }
      if (r === 0 && c === matrix[0].length - 1) {
        resultArray[r][c] = 0 + matrix[r][c - 1] + matrix[r + 1][c - 1]
        + matrix[r + 1][c];
      }
      if (r === matrix.length - 1 && c === 0) {
        resultArray[r][c] = 0 + matrix[r][c + 1] + matrix[r - 1][c]
        + matrix[r - 1][c + 1];
      }
      if (r === matrix.length - 1 && c === matrix[0].length - 1) {
        resultArray[r][c] = 0 + matrix[r][c - 1] + matrix[r - 1][c - 1]
        + matrix[r - 1][c];
      }
      if (r > 0 && r < matrix.length - 1 && c === 0) {
        resultArray[r][c] = 0 + matrix[r][c + 1]
        + matrix[r - 1][c] + matrix[r - 1][c + 1]
        + matrix[r + 1][c] + matrix[r + 1][c + 1];
      }
      if (r > 0 && r < matrix.length - 1 && c === matrix[0].length - 1) {
        resultArray[r][c] = 0 + matrix[r][c - 1]
        + matrix[r - 1][c] + matrix[r - 1][c - 1]
        + matrix[r + 1][c] + matrix[r + 1][c - 1];
      }
      if (r === 0 && c > 0 && c < matrix[0].length - 1) {
        resultArray[r][c] = 0 + matrix[r][c - 1] + matrix[r][c + 1]
        + matrix[r + 1][c - 1] + matrix[r + 1][c] + matrix[r + 1][c + 1];
      }
      if (r === matrix.length - 1 && c > 0 && c < matrix[0].length - 1) {
        resultArray[r][c] = 0 + matrix[r][c - 1] + matrix[r][c + 1]
        + matrix[r - 1][c - 1] + matrix[r - 1][c] + matrix[r - 1][c + 1];
      }
    }
  }

  return resultArray;
}

module.exports = {
  minesweeper
};
