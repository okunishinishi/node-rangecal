/**
 * Get rate for a value.
 * @function rate
 * @param {number} min - Min value.
 * @param {number} max - Max value
 * @param {number} value - Value.
 * @returns {number} - Rate for value.
 */
"use strict";

var assert = require('assert'),
    amount = require('./amount');

/** @lends rate */
function rate(min, max, value) {
    assert.equal(arguments.length, 3, "Invalid args");
    return (value - min) / amount(min, max);
}

module.exports = rate;
