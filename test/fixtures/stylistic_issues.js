var read = require('../read.js');

module.exports = {
  'max-len': {
    fail: [read('max-len.fail')],
    pass: ['aaaaaa']
  },
  'space-infix-ops': {
    fail: ['var a = 1+ 2;'],
    pass: ['var a = 1 + 2;']
  }
};
