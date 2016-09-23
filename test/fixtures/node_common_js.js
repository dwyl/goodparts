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
  },
  'no-new-require': {
    fail: ['var mod = new require("mod");']
  },
  'no-mixed-requires': {
    fail: [read('no-mixed-requires.fail')],
  },
  'handle-callback-err': {
    fail: [read('handle-callback-err.fail')],
    pass: [read('handle-callback-err.pass')]
  },
  'global-require': {
    fail: [read('global-require.fail')]
  },
  'callback-return': {
    fail: [read('callback-return.fail')],
    pass: [read('callback-return.pass')]
  }
};
