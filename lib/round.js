/**
 * @memberof module:rangecal
 * @function round
 */

'use strict'

/** @lends module:rangecal.round */
function round (min, max, value) {
  if (value < min) {
    value = min;
  }
  if (max < value) {
    value = max;
  }
  return value;
}

module.exports = round;
