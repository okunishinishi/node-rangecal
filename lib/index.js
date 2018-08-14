/**
 * Basic range calculations.
 * @module rangecal
 */

'use strict'

const d = (module) => module && module.default || module

const amount = d(require('./amount'))
const contains = d(require('./contains'))
const rate = d(require('./rate'))
const round = d(require('./round'))
const value = d(require('./value'))

module.exports = {
  amount,
  contains,
  rate,
  round,
  value
}
