/**
 * Test case for amount.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')

const amount = require('../lib/amount.js')
it('Amount', (done) => {
  assert.equal(amount(2, 5), 3)
  done()
})

