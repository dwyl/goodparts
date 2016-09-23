var read = require('../read.js');

module.exports = {
  'no-use-before-define': {
    fail: [read('no-use-before-define.fail')],
    pass: [read('no-use-before-define.pass')]
  },
  'no-undefined': {
    fail: ['var undefined = "bob";']
  },
  'no-undef-init': {
    fail: ['var a = undefined;'],
    pass: ['var a;']
  },
  'no-shadow-restricted-names': {
    fail: ['function NaN(){};']
  }
};
