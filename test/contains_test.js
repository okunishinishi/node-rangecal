/**
 * Test case for contains.
 * Runs with mocha.
 */
'use strict'

const contains = require('../lib/contains.js')
const assert = require('assert')

it('Contains', (done) => {
  assert.ok(contains(1, 3, 2))
  assert.ok(!contains(1, 3, 8))
  assert.ok(!contains(1, 3, -1))
  done()
})

