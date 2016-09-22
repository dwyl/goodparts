var read = require('../read.js');

module.exports = {
  'no-sync': null,
  'no-restricted-properties': null,
  'no-restricted-modules': null,
  'no-process-exit': {
    fail: ['process.exit(1);']
  },
  'no-process-env': null,
  'no-path-concat': {
    fail: ['var fullPath = __dirname + "/foo.js";']
  }
};
