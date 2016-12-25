'use strict'

var plates = require('plates')

exports.name = 'plates'
exports.outputFormat = 'html'
exports.render = function (str, options, locals) {
  return plates.bind(str, locals)
}
