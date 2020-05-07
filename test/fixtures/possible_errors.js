'use strict';

var read = require('../read.js');

module.exports = {
  'no-irregular-whitespace': { fail: [
    read('./no-irregular-whitespace.fail')
  ] },
  'no-func-assign': { fail: [
    'function foo () {}; foo = 1;'
  ] },

  'no-extra-boolean-cast': { fail: [
    '!!!foo',
    'Boolean(!!foo)',
    'if (!!foo) {console.log(foo);}'
  ] },

  'no-empty': { fail: [
    'if (true) {}',
    'while (1) {}',
    'for (var i = 0; i < 2; i++) {}'
  ] },

  'no-duplicate-case': { fail: [read('./no-duplicate-case.fail')] },
  'no-dupe-args': { fail: ['function (a, a) {};'] },
  'no-control-regex': { fail: [
    'var x = /\x1f/',
    'var x = new RegExp("/\x1f/")'
  ] },

  'no-constant-condition': { fail: [
    'while (1) {}'
  ] },

  'no-cond-assign': { fail: [
    'if (foo = 1) { foo++; }'
  ] },
  'no-console': { fail: ['console.log("not allowed")'] },
  'no-debugger': { fail: ['debugger;'] },
  'no-dupe-keys': { fail: ['var x = {a:1, a: "repeat"'] },
  'no-empty-character-class': { fail: ['/^abc[]/.test("abcdefg");'] },
  'no-ex-assign': { fail: ['try { var x; } catch (e) { e = 10; }'] },
  'no-extra-parens': null,
  'no-extra-semi': { fail: ['var x;;'] },
  'no-inner-declarations': { fail: [
    'if (test) {function func () { return; }}',
    'if (test) { var x; }'
  ] },
  'no-invalid-regexp': { fail: ['RegExp(\'[\')'] },
  'no-obj-calls': { fail: ['var math = Math();'] },
  'no-prototype-builtins': null,
  'no-regex-spaces': {
    fail: ['/a  b/'], pass: ['/a {3}b/']
  },
  'no-sparse-arrays': { fail: ['[1, ,3]'] },
  'no-template-curly-in-string': { pass: ['\'hello ${buddy}.\''] },
  'no-unexpected-multiline': { fail: ['var foo = bar\n(1 || 2).baz();'] },
  'no-unsafe-finally': { fail: [read('no-unsafe-finally.fail')] },
  'no-unsafe-negation': {
    fail: ['if (!k in obj) {console.log(k);}'],
    pass: ['if (!(k in obj)) {console.log(k);}']
  },
  'no-unreachable': { fail: [
    'throw new Error(\'oops\'); console.log(\'hi\');}',
    'function foo () {return 1; console.log(3);}'
  ] },
  'use-isnan': { fail: ['if (NaN == x) { x = 0; }'] },
  'valid-typeof': { fail: ['var x; if (typeof x == "jack") { x = "OMG"} '] },
  'for-direction': {fail: [
    'for (var i = 0; i < 10; i--){}',
    'for (var i = 10; i >= 0; i++){}'
  ], pass: ['for (var i = 0; i < 10; i++){}']},
  'no-async-promise-executor': null,
  'no-await-in-loop': null,
  'no-compare-neg-zero': {fail: [
    'x === -0'
  ], pass: ['x === 0']},
  'no-dupe-else-if': {fail: [read('./no-dupe-else-if.fail')]},
  'no-import-assign': {fail: [read('./no-import-assign.fail')]},
  'no-misleading-character-class': null,
  'no-setter-return': {fail: [read('./no-setter-return.fail')]},
  'require-atomic-updates': null
};
