var read = require('../read.js');

module.exports = {
  'array-callback-return': { fail: ['[1].map(function(x){ console.log(x)})'] },
  'class-methods-use-this': null,
  'consistent-return': { fail: ['function f(c) { if (c) { return true; } }'] },
  'default-case': { fail: ['switch (a) { case 1: break; }'] },
  'dot-notation': { fail: ['var x; var y = x[\'key\'];'] },
  'no-caller': {
    fail: ['[1].map(function(n) { return arguments.callee(n - 1);});']
  },
  'guard-for-in': null,
};
