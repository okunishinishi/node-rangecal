/**
 * Get value for a rate.
 * @function rate
 * @param {number} min - Min value.
 * @param {number} max - Max value
 * @param {number} rate - Rate.
 * @returns {number} - Value for rate.
 */
"use strict";

var assert = require('assert'),
    amount = require('./amount');

/** @lends rate */
function value(min, max, rate) {
    assert.equal(arguments.length, 3, "Invalid args");
    return (amount(min, max) * rate) + min;
}

module.exports = value;
