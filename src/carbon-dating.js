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
  if (typeof(sampleActivity) !== 'string' || !sampleActivity || Number(sampleActivity) <= 0 || Number(sampleActivity) >= 15) {
    return false;
  }
  if (!Boolean(Number(sampleActivity))) {
    return false;
  }
  const x = Math.log(MODERN_ACTIVITY / Number(sampleActivity)) * (HALF_LIFE_PERIOD / Math.log(2))
  return Math.ceil(x);
}

module.exports = {
  dateSample
};
