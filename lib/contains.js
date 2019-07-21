/**
 * A value contained in range.
 * @memberof module:rangecal
 * @function contains
 * @param {number} min - Min value.
 * @param {number} max - Max value.
 * @param {number} value - Value.
 * @returns {boolean} - Contains or not.
 */
'use strict'

const invariant = require('invariant')
const amount = require('./amount')

/** @lends module:rangecal.contains */
function contains (min, max, value) {
  invariant(arguments.length === 3, 'Invalid args')
  return (min <= value) && (value <= max)
}

module.exports = contains
