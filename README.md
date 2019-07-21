rangecal
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-rangecal
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-rangecal
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-rangecal.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/okunishinishi/node-rangecal
[bd_travis_com_shield_url]: https://api.travis-ci.com/okunishinishi/node-rangecal.svg?token=
[bd_license_url]: https://github.com/okunishinishi/node-rangecal/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-rangecal
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-rangecal.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-rangecal.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-rangecal
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-rangecal.svg
[bd_npm_url]: http://www.npmjs.org/package/rangecal
[bd_npm_shield_url]: http://img.shields.io/npm/v/rangecal.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Basic range calculations.

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>



<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/readme/01.Installation.md.hbs" Start -->

<a name="section-doc-readme-01-installation-md"></a>

Installation
-----

```bash
$ npm install rangecal --save
```


<!-- Section from "doc/readme/01.Installation.md.hbs" End -->

<!-- Section from "doc/readme/02.Usage.md.hbs" Start -->

<a name="section-doc-readme-02-usage-md"></a>

Usage
---------

```javascript
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


```


<!-- Section from "doc/readme/02.Usage.md.hbs" End -->

<!-- Section from "doc/readme/03.API.md.hbs" Start -->

<a name="section-doc-readme-03-api-md"></a>

API
---

| Signature | Description |
| --------- | ----------- |
| .amount(min, max) | Get amount in range. |
| .rate(min, max, value) | Get rate for value in range. |
| .value(min, max, rate) | Get value for rate in range. |
| .contains(min, max, value) | Value contained in range or not. |
| .round(min, max, value) | Round value to fit in range. |


<!-- Section from "doc/readme/03.API.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-rangecal/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [numcal][numcal_url]
+ [chopcal][chopcal_url]
+ [veccal][veccal_url]

[numcal_url]: https://github.com/okunishinishi/node-numcal
[chopcal_url]: https://github.com/okunishinishi/node-chopcal
[veccal_url]: https://github.com/okunishinishi/node-veccal

<!-- Links End -->
