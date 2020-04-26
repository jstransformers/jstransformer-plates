# jstransformer-plates

[Plates](http://npm.im/plates) support for [JSTransformers](http://github.com/jstransformers).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-plates/master.svg)](https://travis-ci.org/jstransformers/jstransformer-plates)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-plates/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-plates)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-plates/master.svg)](http://david-dm.org/jstransformers/jstransformer-plates)

[![NPM version](https://img.shields.io/npm/v/jstransformer-plates.svg)](https://www.npmjs.org/package/jstransformer-plates)

## Installation

    npm install jstransformer-plates

## API

```js
var plates = require('jstransformer')(require('jstransformer-plates'))
var locals = { "test": "New Value" }
plates.render('<div id="test">Old Value</div>', locals).body
//=> '<div id="test">New Value</div>'
```

## License

MIT
