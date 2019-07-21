/**
 * Get amount in range.
 * @memberof module:rangecal
 * @function amount
 * @param {number} min - Min value.
 * @param {number} max - Max value
 * @returns {number} - Amount of the range.
 */

'use strict'

const invariant = require('invariant')

/** @function module:rangecal.amount */
function amount (min, max) {
  invariant(arguments.length === 2, 'Invalid args')
  return max - min
}

module.exports = amount
