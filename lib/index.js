/**
 * Basic range calculations.
 * @module rangecal
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get amount () { return d(require('./amount')) },
  get contains () { return d(require('./contains')) },
  get rate () { return d(require('./rate')) },
  get round () { return d(require('./round')) },
  get value () { return d(require('./value')) }
}
