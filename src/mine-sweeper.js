const { NotImplementedError } = require('../extensions/index.js');

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
  let result = new Array(matrix.length).fill(0);

  for (let i = 0; i < result.length; i++) {
    const newRow = new Array(matrix[0].length).fill(0);

    result[i] = newRow;
  }

  for (let row = 0; row < result.length; row++) {
    for (let col = 0; col < result[0].length; col++) {
      let cell = result[row][col];
      const countPrevRow = (counter) => {
        if (matrix[row - 1][col - 1]) counter++;
        if (matrix[row - 1][col]) counter++;
        if (matrix[row - 1][col + 1]) counter++;

        return counter;
      };
      const countCurrentRow = (counter) => {
        if (matrix[row][col + 1]) counter++;
        if (matrix[row][col - 1]) counter++;

        return counter;
      };
      const countNextRow = (counter) => {
        if (matrix[row + 1][col - 1]) counter++;
        if (matrix[row + 1][col]) counter++;
        if (matrix[row + 1][col + 1]) counter++;

        return counter;
      };

      if (matrix[row - 1] !== undefined &&
          matrix[row + 1] !== undefined
      ) {
        cell = countPrevRow(cell);
        cell = countCurrentRow(cell);
        cell = countNextRow(cell);
      }

      if (matrix[row - 1] === undefined) {
        cell = countCurrentRow(cell);
        cell = countNextRow(cell);
      }

      if (matrix[row + 1] === undefined) {
        cell = countPrevRow(cell);
        cell = countCurrentRow(cell);
      }

      result[row][col] = cell;
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
