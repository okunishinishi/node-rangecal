/**
 * Get value for a rate.
 * @memberof module:rangecal
 * @function value
 * @param {number} min - Min value.
 * @param {number} max - Max value
 * @param {number} rate - Rate.
 * @returns {number} - Value for rate.
 */
'use strict'

const invariant = require('invariant')
const amount = require('./amount')

/** @lends module:rangecal.value */
function value (min, max, rate) {
  invariant(arguments.length === 3, "Invalid args")
  return (amount(min, max) * rate) + min
}

module.exports = value
