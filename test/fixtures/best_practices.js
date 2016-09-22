var read = require('../read.js');

module.exports = {
  'array-callback-return': { fail: ['[1].map(function(x){ console.log(x)})'] },
  'class-methods-use-this': null,
  'consistent-return': { fail: ['function f(c) { if (c) { return true; } }'] },
};
