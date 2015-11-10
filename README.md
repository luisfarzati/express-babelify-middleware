## express-babelify-middleware

[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![Dependencies status][dep-status-image]][dep-status-url] [![MIT license][license-image]][license-url] [![Donations][gratipay-image]][gratipay-url]

[Browserify](http://browserify.org) + [Babelify](https://github.com/babel/babelify) middleware for super-fast ES6+ development.

## About

This is a thin wrapper of [browserify-middleware](https://github.com/ForbesLindesay/browserify-middleware) which lets you serve browserified files on the fly, quickly and setupless. There are other Babel-related middlewares but they all rely on gulp, watch, or similar approaches. I wanted to begin coding right away and worry about the build later.

## Install

```shell
npm install express-babelify-middleware
```

## Usage

`babelify(entries, [browserifyOptions], [babelifyOptions])`

* entries: directory, file, or packages, see [browserify-middleware examples](https://github.com/ForbesLindesay/browserify-middleware#usage)
* browserifyOptions: see [browserify-middleware options](https://github.com/ForbesLindesay/browserify-middleware#options--settings)
* babelifyOptions: see [Babel options](http://babeljs.io/docs/usage/options)

```js
import babelify from 'express-babelify-middleware'
import express from 'express'

var app = express()

app.use('/app.js', babelify('public/app.js'))

app.use(express.static('public'))
```

> Depending your project structure, notice that you may need to put babelify **before** the static middleware.

## Credits

Thanks to [ForbesLindesay](https://github.com/ForbesLindesay) for his [browserify-middleware](https://github.com/ForbesLindesay/browserify-middleware).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/express-babelify-middleware.svg
[npm-url]: https://npmjs.org/package/express-babelify-middleware
[npm-downloads-image]: https://img.shields.io/npm/dm/express-babelify-middleware.svg
[npm-downloads-url]: https://npmjs.org/package/express-babelify-middleware
[dep-status-image]: https://img.shields.io/david/luisfarzati/express-babelify-middleware.svg
[dep-status-url]: https://david-dm.org/luisfarzati/express-babelify-middleware
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
[gratipay-image]: http://img.shields.io/gratipay/luisfarzati.svg
[gratipay-url]: https://www.gratipay.com/luisfarzati
