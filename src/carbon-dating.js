const { NotImplementedError } = require('../lib');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!Boolean(sampleActivity) || typeof sampleActivity !== 'string') {
    return false;
  }

  let sampleActivityValue;

  if (sampleActivity.includes(',')) {
    sampleActivityValue = Number(sampleActivity.split(',').join('.'));
  } else {
    sampleActivityValue = Number(sampleActivity);
  }

  if (sampleActivityValue > 0 && sampleActivityValue <= 15) {
    const sampleAge = Math.ceil(
      HALF_LIFE_PERIOD * Math.log2(MODERN_ACTIVITY / sampleActivityValue)
    );

    return sampleAge;
  }

  return false;
}

module.exports = {
  dateSample
};
