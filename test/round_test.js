/**
 * Test case for round.
 * Runs with mocha.
 */
'use strict'

const assert = require('assert')
const round = require('../lib/round.js')

it('Round', (done) => {
  assert.equal(round(2, 8, 16), 8)
  assert.equal(round(2, 8, 1), 2)
  done()
})

