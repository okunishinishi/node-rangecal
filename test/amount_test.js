/**
 * Test case for amount.
 * Runs with nodeunit.
 */

var amount = require('../lib/amount.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Amount'] = function (test) {
    test.equal(amount(2, 5), 3);
    test.done();
};

