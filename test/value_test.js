/**
 * Test case for value.
 * Runs with nodeunit.
 */

var value = require('../lib/value.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Value'] = function (test) {
    test.equal(value(1, 9, 0.5), 5);
    test.done();
};

