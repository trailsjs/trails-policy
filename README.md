# trails-policy

[![Gitter][gitter-image]][gitter-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![Code Climate][codeclimate-image]][codeclimate-url]
[![Follow @trailsjs on Twitter][twitter-image]][twitter-url]

Trails Policy Class. Exposes Trails Application resources to the class
instances. Policies should extend this Class.

## Usage

### Express (trailpack-express)

In api/policies/MyPolicy.js:
```js
const Policy = require('trails-policy')

class MyPolicy extends Policy {
  policyMethod (req, res, next) {
    // ...
    next()
  }
}
```

### Hapi (trailpack-hapi)

In api/policies/MyPolicy.js:
```js
const Policy = require('trails-policy')

class MyPolicy extends Policy {
  policyMethod (req, res) {
    // ...
  }
}
```

### Both

In config/policies.js:
```js
module.exports = {
  SomeController: {
    doSomething: ['MyPolicy.policyMethod']
  }
}
```

Note: Even if you are only applying one policy to a controller method, you should
still enclose the string `'MyPolicy.policyMethod'` in an array.

#### Install

## License
[MIT](https://github.com/trailsjs/trails/blob/master/LICENSE)

[npm-image]: https://img.shields.io/npm/v/trails-policy.svg?style=flat-square
[npm-url]: https://npmjs.org/package/trails-policy
[ci-image]: https://img.shields.io/travis/trailsjs/trails-policy/master.svg?style=flat-square
[ci-url]: https://travis-ci.org/trailsjs/trails-policy
[daviddm-image]: http://img.shields.io/david/trailsjs/trails-policy.svg?style=flat-square
[daviddm-url]: https://david-dm.org/trailsjs/trails-policy
[codeclimate-image]: https://img.shields.io/codeclimate/github/trailsjs/trails-policy.svg?style=flat-square
[codeclimate-url]: https://codeclimate.com/github/trailsjs/trails-policy
[gitter-image]: http://img.shields.io/badge/+%20GITTER-JOIN%20CHAT%20%E2%86%92-1DCE73.svg?style=flat-square
[gitter-url]: https://gitter.im/trailsjs/trails-policy
[twitter-image]: https://img.shields.io/twitter/follow/trailsjs.svg?style=social
[twitter-url]: https://twitter.com/trailsjs

