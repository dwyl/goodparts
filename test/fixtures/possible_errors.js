var read = require('../read.js');

module.exports = {
  'valid-jsdoc': {
    fail: [
      read('./valid-jsdoc.fail')
    ],
    pass: [
      read('./valid-jsdoc.pass')
    ]
  },

  'no-irregular-whitespace': {
    fail: [
      read('./no-irregular-whitespace.fail')
    ]
  },

  'no-func-assign': {
    fail: [
      'function foo () {}; foo = 1;'
    ]
  },

  "no-extra-boolean-cast": {
    fail: [
      '!!!foo',
      'Boolean(!!foo)',
      'if (!!foo) {console.log(foo);}'
    ]
  },

  "no-empty": {
    fail: [
      'if (true) {}',
      'while (1) {}',
      'for (var i = 0; i < 2; i++) {}'
    ]
  },

  "no-duplicate-case": {
    fail: [
      read('./no-duplicate-case.fail')
    ]
  },

  "no-dupe-args": {
    fail: [
      'function (a, a) {};'
    ]
  },

  "no-control-regex": {
    fail: [
      'var x = /\x1f/',
      'var x = new RegExp("/\x1f/")'
    ]
  },

  "no-constant-condition": {
    fail: [
      'while (1) {}'
    ]
  },

  "no-cond-assign": {
    fail: [
      'if (foo = 1) { foo++; }'
    ]
  }
};
