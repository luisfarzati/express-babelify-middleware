var browserify = require('browserify-middleware')
var babelify = require('babelify')

module.exports = function (entries, brOptions, baOptions) {
  brOptions = brOptions || {}
  brOptions.transform = brOptions.transform || []
  baOptions = baOptions || {}
  brOptions.transform.unshift(babelify.configure(baOptions))

  return browserify(entries, brOptions)
}
