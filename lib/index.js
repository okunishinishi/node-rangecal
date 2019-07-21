/**
 * Basic range calculations.
 * @module rangecal
 */

'use strict'


const amount = require('./amount')
const contains = require('./contains')
const rate = require('./rate')
const round = require('./round')
const value = require('./value')

exports.amount = amount
exports.contains = contains
exports.rate = rate
exports.round = round
exports.value = value

module.exports = {
  amount,
  contains,
  rate,
  round,
  value
}
