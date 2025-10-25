const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
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
  constructor() {
    this.depthValue = 1;
  }

  calculateDepth(arr) {
    let result = this.depthValue;

    if (arr.some(elem => Array.isArray(elem))) {
      const flattedArr = arr.flat();

      this.depthValue += 1;
      result = this.calculateDepth(flattedArr);
      return result;
    }

    this.depthValue = 1;

    return result;
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
