/**
 * Test case for value.
 * Runs with mocha.
 */
'use strict'

const value = require('../lib/value.js')
const assert = require('assert')

it('Value', (done) => {
  assert.equal(value(1, 9, 0.5), 5)
  done()
})


