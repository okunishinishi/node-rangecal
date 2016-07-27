var rangecal = require('rangecal')

//------------------------
// amount
//------------------------
console.log(rangecal.amount(3, 6)) //-> 3
console.log(rangecal.amount(2, -8)) //-> -10

//------------------------
// rate
//------------------------
console.log(rangecal.rate(4, 6, 3)) //-> -0.5
console.log(rangecal.rate(2, 9, 6)) //-> 0.5714285714285714

//------------------------
// round
//------------------------
console.log(rangecal.round(4, 6, 3)) //-> 4
console.log(rangecal.round(2, 9, 6)) //-> 6

//------------------------
// contains
//------------------------
console.log(rangecal.contains(4, 6, 3)) //-> false
console.log(rangecal.contains(2, 9, 6)) //-> true

//------------------------
// value
//------------------------
console.log(rangecal.value(3, 6, 0.3)) //-> 3.9
console.log(rangecal.value(2, -8, 0.5)) //-> -3

