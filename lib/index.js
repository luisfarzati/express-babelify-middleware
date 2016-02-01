var browserify = require('browserify-middleware')
var babelify = require('babelify')

function babelifyMiddleware(entries, brOptions, baOptions) {
  brOptions = brOptions || {}
  brOptions.transform = brOptions.transform || []
  baOptions = baOptions || {}
  baOptions.presets = baOptions.presets || ['es2015']
  brOptions.transform.unshift(babelify.configure(baOptions))

  return browserify(entries, brOptions)
}

babelifyMiddleware.browserifySettings = browserify.settings

module.exports = babelifyMiddleware
