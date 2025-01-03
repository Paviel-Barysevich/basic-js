const { NotImplementedError } = require("../extensions/index.js");

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let counter = 1;
    const copyArr = [...arr];
    const complitlyFlatArr = copyArr.flat(Infinity);
    const complitlyFlatArrToStr = JSON.stringify(complitlyFlatArr);

    const anotherCopyArr = [...arr];
    const flattedArr = anotherCopyArr.flat(counter);
    const flattedArrToString = JSON.stringify(flattedArr);

    if (complitlyFlatArrToStr === JSON.stringify(anotherCopyArr.flat(0))) {
      return 1;
    }

    if (flattedArrToString !== complitlyFlatArrToStr) {
      counter += this.calculateDepth(flattedArr);
    } else {
      counter++;
    }

    return counter;
  }
}

module.exports = {
  DepthCalculator,
};
