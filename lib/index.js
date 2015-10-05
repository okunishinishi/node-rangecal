/**
 * Basic range calculations.
 * @module rangecal
 */

"use strict";

module.exports = {
    get amount() { return require('./amount'); },
    get contains() { return require('./contains'); },
    get rate() { return require('./rate'); },
    get round() { return require('./round'); },
    get value() { return require('./value'); }
};