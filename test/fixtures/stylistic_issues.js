var read = require('../read.js');

module.exports = {
  'max-len': {
    fail: [read('max-len.fail')],
    pass: ['aaaaaa']
  },
  'space-infix-ops': {
    fail: ['var a = 1+ 2;'],
    pass: ['var a = 1 + 2;']
  },
  'array-bracket-spacing': {
    fail: ['[ 1, 2, 3 ]'],
    pass: ['[1, 2, 3]']
  },
  'block-spacing': {
    fail: ['{var a =2; }'],
    pass: ['{var a =2;}']
  }
};
