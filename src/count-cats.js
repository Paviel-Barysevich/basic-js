const { NotImplementedError } = require('../lib');

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
  let catCount = 0;

  catCount = matrix.reduce((accumulator, arr) => accumulator + countCatsInArray(arr), 0);

  function countCatsInArray(array) {
    let catCountInArray = 0;

    for (const element of array) {
      if (element === '^^') {
        catCountInArray += 1;
      }
    }

    return catCountInArray;
  }

  return catCount;
}

module.exports = {
  countCats
};
