rangecal
==========

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![Code Climate][bd_codeclimate_shield_url]][bd_codeclimate_url]
[![Code Coverage][bd_codeclimate_coverage_shield_url]][bd_codeclimate_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]

[bd_repo_url]: https://github.com/okunishinishi/node-rangecal
[bd_travis_url]: http://travis-ci.org/okunishinishi/node-rangecal
[bd_travis_shield_url]: http://img.shields.io/travis/okunishinishi/node-rangecal.svg?style=flat
[bd_license_url]: https://github.com/okunishinishi/node-rangecal/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/okunishinishi/node-rangecal
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/okunishinishi/node-rangecal.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/okunishinishi/node-rangecal.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/okunishinishi/node-rangecal
[bd_gemnasium_shield_url]: https://gemnasium.com/okunishinishi/node-rangecal.svg
[bd_npm_url]: http://www.npmjs.org/package/rangecal
[bd_npm_shield_url]: http://img.shields.io/npm/v/rangecal.svg?style=flat
[bd_bower_badge_url]: https://img.shields.io/bower/v/rangecal.svg?style=flat

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

Node.js module for basic range calculations. .

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
// value
//------------------------
console.log(rangecal.value(3, 6, 0.3)); //-> 3.9
console.log(rangecal.value(2, -8, 0.5)); //-> -3


```

<!-- Section from "doc/readme/02.Usage.md.hbs" End -->

<!-- Section from "doc/readme/03.API.md.hbs" Start -->

<a name="section-doc-readme-03-a-p-i-md"></a>
API
---

| Signature | Description |
| --------- | ----------- |
| .amount(min, max) | Get amount in range. |
| .rate(min, max, value) | Get rate for value in range. |
| .value(min, max, rate) | Get value for rate in range. |

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

+ [numcal](https://github.com/okunishinishi/node-numcal)
+ [veccal](https://github.com/okunishinishi/node-veccal)

<!-- Links End -->
