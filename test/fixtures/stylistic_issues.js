var read = require('../read.js');

module.exports = {
  'max-len': {
    fail: [read('max-len.fail0'), read('max-len.fail1'), read('max-len.fail2')],
    pass: [read('max-len.pass0'), read('max-len.pass1')]
  },
  'space-infix-ops': {
    fail: ['var a = 1+ 2;'],
    pass: ['var a = 1 + 2;']
  }
};
