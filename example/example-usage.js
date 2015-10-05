var rangecal = require('rangecal');

//------------------------
// amount
//------------------------
console.log(rangecal.amount(3, 6)); //-> 3
console.log(rangecal.amount(2, -8)); //-> -10

//------------------------
// rate
//------------------------
console.log(rangecal.rate(3, 6, 3)); //-> 0
console.log(rangecal.rate(2, -8, 1)); //-> 0.1

//------------------------
// contains
//------------------------
console.log(rangecal.contains(3, 6, 3)); //-> false
console.log(rangecal.contains(2, -8, 1)); //-> false

//------------------------
// value
//------------------------
console.log(rangecal.value(3, 6, 0.3)); //-> 3.9
console.log(rangecal.value(2, -8, 0.5)); //-> -3

