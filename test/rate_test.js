/**
 * Test case for rate.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')
const rate = require('../lib/rate.js')

it('Rate', (done) => {
  assert.equal(rate(2, 8, 5), 0.5)
  done()
})

