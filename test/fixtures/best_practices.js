var read = require('../read.js');

module.exports = {
  'yoda': {
    fail: [
      'var x = 2; if (1 === x) {console.log(x);}',
    ],
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

  'no-with': {
    fail: [
      'var x = {}; with (x) {console.log(x);}'
    ]
  },

  'no-void': {
    fail: [
      'void 0;'
    ]
  },

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

  'no-useless-concat': {
    fail: [
      '\'x\' + \'y\''
    ],
    pass: [
      'var x = \'a\'; var y = x + \'b\';'
    ]
  },

  'no-unused-labels': {
    fail: [
      'A: { var foo = 1; } B: { console.log(foo); }'
    ],
  },

  'no-sequences': {
    fail: [
      'var x = 4, 5;' // this is actually a fatal parsing error
    ],
    pass: [
      'var x = (3, 5);'
    ]
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

  'no-proto': {
    fail: [
      'var x = {}; console.log(x.__proto__);'
    ]
  },

  'no-octal': {
    fail: [
      'var x = 064;'
    ],
    pass: [
      'var x = \'064\';'
    ]
  },

  'no-new': {
    fail: [
      'var Person = require(\'person\'); new Person();'
    ],
    pass: [
      'var Person = require(\'person\'); var x = new Person();'
    ]
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
    fail: [
      'var x   = 1;'
    ],
    pass: [
      'var x = 1;'
    ]
  },

  'no-loop-func': {
    fail: [
      read('./no-loop-func.fail')
    ]
  },

  'no-labels': {
    fail: [
      'A: var foo = 1;'
    ],
  },

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
    fail: [
      'var x = 1;',
      'x = 1'
    ],
    pass: [
      'window.foo = 1;',
      '(function () { var x = 1; })()'
    ]
  },

  'no-global-assign': {
    fail: [
      'Object = 1;',
      'Math = 1;'
    ]
  },

  'no-fallthrough': {
    fail: [
      'switch (num) { case 1: num + 1; case 2: num + 2; }'
    ],
    pass: [
      'switch (num) { case 1: num + 1; break; case 2: num + 2; break; }'
    ],
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

  'no-eval': {
    fail: [
      'eval(\'1 + 1\');'
    ]
  },

  'no-empty-pattern': {
    fail: [] // this is an ES6 feature, so will cause a fatal error with ecmaVersion: 5
  },

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
      read('./no-case-declarations.fail') // causes fatal error b/c relies on ES6 let/const
    ],
    pass: [
      read('./no-case-declarations.pass')
    ]
  },

  'no-alert': {
    fail: [
      'alert(\'Hello!\')'
    ]
  },

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
      'foo\
        .prop();',
      'foo.prop;'
    ]
  },

  'curly': {
    fail: [
      'if (true) foo();',
      'while (bar)\
        foo();'
    ],
    pass: [
      'if (true) {foo();}',
      'while (bar) { foo(); }',
      'if (baz) {\
        foo();\
      }'
    ]
  },

  'complexity': {
    fail: [
      read('./complexity.fail')
    ]
  },

  'block-scoped-var': {
    fail: [
      'if (true) {var foo = 1;} console.log(foo);',
      'if (foo) {var bar = 2;} else {var bar = 3;}'
    ],
    pass: [
      'var foo; if (true) {foo = 1;} console.log(foo);',
      'var bar; if (foo) {bar = 2;} else {bar = 3;}'
    ]
  },

  'accessor-pairs': {
    fail: [
      read('./accessor-pairs.fail')
    ],
    pass: [
      read('./accessor-pairs.pass')
    ]
  },
};
