/**
 * Test case for round.
 * Runs with nodeunit.
 */

var round = require('../lib/round.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Round'] = function (test) {
    test.equal(round(2, 8, 16), 8);
    test.equal(round(2, 8, 1), 2);
    test.done();
};

