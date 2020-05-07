'use strict';

var read = require('../read.js');

module.exports = {
  'no-use-before-define': {
    fail: [read('no-use-before-define.fail')],
    pass: [read('no-use-before-define.pass')]
  },
  'no-undefined': { fail: ['var undefined = "bob";'] },
  'init-declarations': null,
  'no-undef-init': {
    fail: ['var a = undefined;'],
    pass: ['var a;']
  },
  'no-shadow-restricted-names': { fail: ['function NaN(){};'] },
  'no-unused-vars': {
    fail: ['var x = 1;'],
    pass: ['var x = 1; console.log(x);']
  },
  'no-delete-var': {
    fail: ['var x;\ndelete x;'],
    pass: ['var x;']
  },
  'no-label-var': { fail: ['var x = 1;\nx: for (var key in obj) {}'] },
  'no-restricted-globals': null,
  'no-shadow': { fail: ['var a = 1; function () {var a = 2;}'] },
  'no-undef': { fail: ['var x = 1; y = 3;'] }
};
