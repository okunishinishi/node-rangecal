/**
 * Get amount in range.
 * @function amount
 * @param {number} min - Min value.
 * @param {number} max - Max value
 * @returns {number} - Amount of the range.
 */

"use strict";

var assert = require('assert');

/** @function amount */
function amount(min, max) {
    assert.equal(arguments.length, 2, "Invalid args");
    return max - min;
}

module.exports = amount;
