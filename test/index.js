'use strict';

var assert = require('assert');
var fs = require('fs');

var transform = require('../');

var failed = false;

function assertEqual(output, expected) {
  console.log('\tOutput:  ', JSON.stringify(output));
  console.log('\tExpected:', JSON.stringify(expected));
  if (output !== expected) {
    console.log('\tFAILED');
    failed = true;
  } else {
    console.log('\tPASSED');
  }
}

var input = '<div id="name">Old Value</div>';
var expected = '<div id="name">New Value</div>';
var locals = {
  name: 'New Value'
};

var output = transform.render(input, null, locals);
assertEqual(output, expected);

if (failed) {
  console.log('tests FAILED');
  process.exit(1);
} else {
  console.log('tests PASSED');
}
