const { NotImplementedError } = require("../extensions/index.js");

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
  try {
    if (!Array.isArray(arr)) {
      throw new Error("'arr' parameter must be an instance of the Array!");
    } else {
      let transformedArr = [];
      let copyArr = [...arr];

      arr.map((value, i) => {
        const obj = {
          "--discard-prev": () => {
            if (i > 0 && i < copyArr.length && copyArr[i - 1] !== '&') {
              transformedArr.pop();
            }
          },
          "--discard-next": () => {
            if (i >= 0 && i < copyArr.length - 1) {
              copyArr.splice(i + 1, 1, '&');
            }
          },
          "--double-prev": () => {
            if (i > 0 && i < copyArr.length && copyArr[i - 1] !== '&') {
              transformedArr.push(copyArr[i - 1]);
            }
          },
          "--double-next": () => {
            if (i >= 0 && i < copyArr.length - 1) {
              transformedArr.push(copyArr[i + 1]);
            }
          },
        };

        if (obj.hasOwnProperty(value)) {
          obj[value]();
        } else if (copyArr[i] !== '&') {
          transformedArr.push(value);
        }
      });

      return transformedArr;
    }
  } finally {
  }
}

module.exports = {
  transform,
};
