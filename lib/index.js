var browserify = require('browserify-middleware')
var babelify = require('babelify')

module.exports = function (entries, brOptions, baOptions) {
  brOptions = brOptions || {}
  brOptions.transform = brOptions.transform || []
  baOptions = baOptions || {}
  baOptions.stage = baOptions.stage || 1
  brOptions.transform.unshift(babelify.configure(baOptions))

  return browserify(entries, brOptions)
}
