/**
 * Test case for contains.
 * Runs with nodeunit.
 */

var contains = require('../lib/contains.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Contains'] = function (test) {
    test.ok(contains(1, 3, 2));
    test.ok(!contains(1, 3, 8));
    test.ok(!contains(1, 3, -1));
    test.done();
};

