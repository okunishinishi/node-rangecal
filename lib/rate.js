/**
 * Get rate for a value.
 * @memberof module:rangecal
 * @function rate
 * @param {number} min - Min value.
 * @param {number} max - Max value.
 * @param {number} value - Value.
 * @returns {number} - Rate for value.
 */
'use strict'

const invariant = require('invariant')
const amount = require('./amount')

/** @lends module:rangecal.rate */
function rate (min, max, value) {
  invariant(arguments.length === 3, "Invalid args")
  return (value - min) / amount(min, max)
}

module.exports = rate;
