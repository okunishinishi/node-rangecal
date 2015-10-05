/**
 * Test case for rate.
 * Runs with nodeunit.
 */

var rate = require('../lib/rate.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Rate'] = function (test) {
    test.equal(rate(2, 8, 5), 0.5);
    test.done();
};

