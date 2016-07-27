/**
 * A value contained in range.
 * @function contains
 * @param {number} min - Min value.
 * @param {number} max - Max value.
 * @param {number} value - Value.
 * @returns {boolean} - Contains or not.
 */
'use strict'

const assert = require('assert')
const amount = require('./amount')

/** @lends rate */
function contains (min, max, value) {
  assert.equal(arguments.length, 3, 'Invalid args')
  return (min <= value) && (value <= max)
}

module.exports = contains
