'use strict';

var plates = require('plates');

exports.name = 'plates';
exports.outputFormat = 'xml';
exports.render = function(str, options, locals) {
  return plates.bind(str, locals);
};
