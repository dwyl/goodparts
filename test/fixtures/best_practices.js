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
  'no-div-regex': { fail: ['function bar() { return /=foo/; }'] },
  'no-empty-function': { fail: ['function foo() {}'] },
  'no-eq-null': { fail: ['var x; x = val == null;'] },
  'no-extend-native': { fail: ['Object.prototype.a = "a";'] },
  'no-extra-label': { fail: ['A: while (a) {break A;}'] },
  'no-floating-decimal': { fail: ['var x = .5;'] },
  'no-implicit-coercion': { fail: ['var x = !!1;'] },
  'no-implied-eval': { fail: ['setTimeout("alert(\'Hi!\');", 100);'] },
  'no-iterator': { fail: ['foo.__iterator__ = function () {};'] },
  'no-lone-blocks': { fail: ['{}'] },
  'no-magic-numbers': null,
  'no-multi-str': { fail: ['test\\\ncase'] },
  'no-new-wrappers': { fail: ['var s = new String("cheese");'] },
  'no-octal-escape': { fail: ['var foo = "Copyright \\251"'] },
  'no-param-reassign': {
    fail: ['function two (x) { x = 2; }'],
    pass: ['function mutate (x) { x.a = 2; }']
  },
  'no-redeclare': { fail: ['var x; var x;'] },
  'no-script-url': { fail: ['location.href = "javascript:void(0)";'] },
  'no-self-compare': { fail: ['var x = 10; if (x === x) { x = 20; };'] },
  'no-unused-expressions': { fail: ['0;'] },
};
