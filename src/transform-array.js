const { NotImplementedError } = require('../lib');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }

  if (arr.length === 0) {
    return arr;
  }

  const transformedArr = [];
  const keysArray = [`--discard-next`, `--discard-prev`, `--double-next`, `--double-prev`];
  const cloneArray = [...arr];

  cloneArray.forEach((elem, i) => {
    if (keysArray.includes(elem)) {
      switch (elem) {
        case `--discard-next`:
          delete cloneArray[i + 1];
        break;
        case `--discard-prev`:
          if (cloneArray[i - 1] !== undefined) {
            transformedArr.pop();
          }
        break;
        case `--double-next`:
          transformedArr.push(cloneArray[i + 1]);
        break;
        case `--double-prev`:
          transformedArr.push(cloneArray[i - 1]);
        break;
      }
    } else {
      transformedArr.push(elem);
    }
  });

  const filteredArray = transformedArr.filter(elem => elem !== undefined);

  return filteredArray;
}

module.exports = {
  transform
};
