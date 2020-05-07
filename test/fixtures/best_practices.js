'use strict';

var read = require('../read.js');

module.exports = {
  'yoda': {
    fail: ['var x = 2; if (1 === x) {console.log(x);}'],
    pass: [
      'var x = 2; if (x === 1) {console.log(x);}',
      'var x = 1; if (-1 <= x && x <= 1) {console.log(x);}'
    ]
  },

  'vars-on-top': {
    fail: [
      'var x = 1; console.log(x); var y = x + 1; console.log(y);'
    ],
    pass: [
      'var x = 1; var y = x + 1; console.log(x, y);'
    ]
  },

  'no-with': { fail: ['var x = {}; with (x) {console.log(x);}'] },

  'no-void': { fail: ['void 0;'] },

  'no-unmodified-loop-condition': {
    fail: [
      'var node; while (node) { doSomething(node); } node = other;',
      'for (var j=0; j<10; i++) { console.log(foo); }'
    ],
    pass: [
      'while (obj.prop) { doSomething(obj); }',
      'while (node) { doSomething(node); node--; }'
    ]
  },
  'wrap-iife': {
    fail: ['(function () {}())'],
    pass: ['(function () {})()']
  },
  'no-useless-concat': {
    fail: ['\'x\' + \'y\''],
    pass: ['var x = \'a\'; var y = x + \'b\';']
  },

  'no-unused-labels': { fail: ['A: { var foo=1; } B: { console.log(foo); }'] },

  'no-sequences': {
    // this is actually a fatal parsing error
    fail: ['var x = 4, 5;'],
    pass: ['var x = (3, 5);']
  },

  'no-self-assign': {
    fail: [
      'var x = 1; x = x;',
      'var x = { a: 1 }; x.a = x.a;'
    ],
    passes: [
      'var x = 1; var y = x;',
      'var x = { a: 1, b: 2 }; x.a = x.b;'
    ]
  },

  'no-return-assign': {
    fail: [
      'function foo () {return x = 1 + 2;}'
    ],
    pass: [
      'function foo () {var x = 1 + 2; return x;}'
    ]
  },

  'no-throw-literal': { fail: ['throw 0;', 'throw \'oops\''] },

  'no-proto': { fail: ['var x = {}; console.log(x.__proto__);'] },

  'no-octal': {
    fail: ['var x = 064;'],
    pass: ['var x = \'064\';']
  },

  'no-new': {
    fail: ['var Person = require(\'person\'); new Person();'],
    pass: ['var Person = require(\'person\'); var x = new Person();']
  },

  'no-new-func': {
    fail: [
      'var foo = new Function(\'a\', \'return a;\');',
      'var foo = Function(\'a\', \'return a;\');'
    ],
    pass: [
      'var foo = function (a) {return a;}',
      'function foo (a) {return a;}'
    ]
  },

  'no-multi-spaces': {
    fail: ['var x   = 1;'], pass: ['var x = 1;']
  },

  'no-loop-func': { fail: [read('./no-loop-func.fail')] },

  'no-labels': { fail: ['A: var foo = 1;'] },

  'no-invalid-this': {
    fail: [
      '\'use strict\'; console.log(this);',
      '\'use strict\'; function foo (x) { this._x = x; return this; }',
      '\'use strict\'; var foo = function (x) { this._x = x; }'
    ],
    pass: [
      'function Foo (x) { this._x = x; }',
      'var Foo = function (x) { this._x = x; }',
      'var obj = { myMethod: function (x) {this._x = x;} }'
    ]
  },

  'no-implicit-globals': {
    fail: ['var x = 1;', 'x = 1'],
    pass: ['window.foo = 1;', '(function () { var x = 1; })()']
  },

  'no-global-assign': { fail: ['Object = 1;', 'Math = 1;'] },

  'no-fallthrough': {
    fail: [
      'switch (num) { case 1: num + 1; case 2: num + 2; }'
    ],
    pass: [
      'switch (num) { case 1: num + 1; break; case 2: num + 2; break; }'
    ]
  },

  'no-extra-bind': {
    fail: [
      '(function () {}).bind({});',
      '(function () {(function () {})()}).bind({})'
    ],
    pass: [
      '(function () { this.foo++; }).bind({ foo: 1 });',
      '(function foo (a) { return a + 1; }).bind({}, 1);'
    ]
  },

  'no-eval': { fail: ['eval(\'1 + 1\');'] },

  // this is an ES6 feature, so will cause a fatal error with ecmaVersion: 5
  'no-empty-pattern': { fail: [] },

  'no-else-return': {
    fail: [
      'function foo () { if (foo) { return 1; } else { return 2; } }'
    ],
    pass: [
      'function foo () { if (foo) { return 1; } return 2; }'
    ]
  },

  'no-case-declarations': {
    fail: [
      // causes fatal error b/c relies on ES6 let/const
      read('./no-case-declarations.fail')
    ],
    pass: [
      read('./no-case-declarations.pass')
    ]
  },

  'no-alert': { fail: ['alert(\'Hello!\')'] },

  'eqeqeq': {
    fail: [
      '1 == 1;',
      '2 == \'2\';'
    ],
    pass: [
      '1 === 1;',
      '2 === \'2\';'
    ]
  },

  'dot-location': {
    fail: [
      read('./dot-location.fail')
    ],
    pass: [
      'foo\n.prop();',
      'foo.prop;'
    ]
  },

  'curly': {
    fail: [
      'if (true) foo();',
      'while (bar)\nfoo();'
    ],
    pass: [
      'if (true) {foo();}',
      'while (bar) { foo(); }',
      'if (baz) {\nfoo();\n}'
    ]
  },

  'complexity': { fail: [read('./complexity.fail')] },

  'block-scoped-var': {
    fail: ['if (true) {var foo = 1;} console.log(foo);',
      'if (foo) {var bar = 2;} else {var bar = 3;}'],
    pass: ['var foo; if (true) {foo = 1;} console.log(foo);',
      'var bar; if (foo) {bar = 2;} else {bar = 3;}']
  },

  'accessor-pairs': {
    fail: [read('./accessor-pairs.fail')],
    pass: [read('./accessor-pairs.pass')]
  },
  'array-callback-return': { fail: ['[1].map(function(x){ console.log(x)})'] },
  'class-methods-use-this': null,
  'consistent-return': { fail: ['function f(c) { if (c) { return true; } }'] },
  'default-case': { fail: ['switch (a) { case 1: break; }'] },
  'dot-notation': { fail: ['var x; var y = x[\'key\'];'] },
  'no-caller': { fail: [
    '[1].map(function(n) { return arguments.callee(n - 1);});'
  ] },
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
  'no-useless-call': { fail: ['foo.call(null, 1, 2, 3);'] },
  'no-useless-escape': { fail: ['"\\a";'] },
  'no-warning-comments': null,
  'radix': { fail: ['var num = parseInt("071'] },
  'no-useless-return': {
    fail: [read('./no-useless-return.fail')],
    pass: [read('./no-useless-return.pass')]
  },
  'default-param-last': null,
  'getter-return': {
    fail: [read('./getter-return.fail')],
    pass: [read('./getter-return.pass')]
  },
  'grouped-accessor-pairs': {
    fail: [read('./grouped-accessor-pairs.fail')],
    pass: [read('./grouped-accessor-pairs.pass')]
  },
  'max-classes-per-file': null,
  'no-constructor-return': null,
  'no-useless-catch': {
    fail: [read('./no-useless-catch.fail')],
  },
  'prefer-promise-reject-errors': null,
  'prefer-regex-literals': null,
  'require-unicode-regexp': null
};
