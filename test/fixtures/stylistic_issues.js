'use strict';

var read = require('../read.js');

module.exports = {
  'array-bracket-spacing': {
    fail: ['[ 1, 2, 3 ]'],
    pass: ['[1, 2, 3]']
  },
  'block-spacing': {
    fail: ['{var a =2; }'],
    pass: ['{ var a =2; }']
  },
  'brace-style': {
    fail: [read('brace-style.fail')],
    pass: [read('brace-style.pass')]
  },
  'camelcase': null,
  'comma-style': {
    fail: [read('comma-style.fail')],
    pass: [read('comma-style.pass')]
  },
  'comma-spacing': {
    fail: ['var a = 2 , b = 3;'],
    pass: ['var a = 2, b = 3;']
  },
  'comma-dangle': {
    fail: ['var a = [1, 2,];'],
    pass: ['var a = [1, 2];']
  },
  'computed-property-spacing': {
    fail: ['obj[ "foo" ];'],
    pass: ['obj["foo"];']
  },
  'consistent-this': null,
  'capitalized-comments': null, // https://github.com/dwyl/goodparts/issues/278
  'eol-last': {
    fail: [read('eol.fail')],
    pass: [read('eol.pass')]
  },
  'func-call-spacing': {
    fail: ['fn ();'],
    pass: ['fn();']
  },
  'func-names': null,
  'func-style': null,
  'id-blacklist': null,
  'id-length': null,
  'id-match': null,
  'indent': {
    fail: [read('ident.fail')],
    pass: [read('ident.pass')]
  },
  'jsx-quotes': null,
  'padded-blocks': {
    fail: [read('padded-blocks.fail')],
    pass: [read('padded-blocks.pass')]
  },
  'quote-props': {
    fail: [read('quote-props.fail')],
    pass: [read('quote-props.pass')]
  },
  'quotes': {
    fail: [read('quotes.fail')],
    pass: [read('quotes.pass')]
  },
  'semi-spacing': {
    fail: ['var a = 2 ;', 'var foo;var bar;'],
    pass: ['var a = 2;', 'var foo; var bar;']
  },
  'sort-keys': null,
  'sort-vars': null,
  'space-in-parens': {
    fail: ['foo( "bar" );'],
    pass: ['foo("ba");']
  },
  'spaced-comment': {
    fail: ['//no space'],
    pass: ['// yes!']
  },
  'wrap-regex': null,
  'unicode-bom': { pass: ['U+FEFF\nvar abc;', 'var abc;'] },
  'space-unary-ops': {
    fail: [
      'i ++;',
      '-- i;',
      'delete(foo.bar);',
      '+ "3"'
    ],
    pass: [
      '+"3"',
      'i++'
    ]
  },
  'space-infix-ops': {
    fail: ['a+b', 'a +b', 'a- b', 'var foo = bar|0'],
    pass: ['a + b', 'var foo = bar | 0']
  },
  'space-before-function-paren': {
    fail: ['function foo() {};', 'var foo = function() {};'],
    pass: ['function foo () {};', 'var foo = function () {};']
  },
  'space-before-blocks': {
    fail: ['function foo (){};', 'if (true){}'],
    pass: ['function foo () {};', 'if (true) {}']
  },
  'semi': {
    fail: [
      'var a = 1',
      'var a = 1;\nvar b = 2',
      'if (foo) {\nbar()\n}'
    ],
    pass: [
      'var a = 1;\nvar b = 3;',
      'if (foo) { bar() }',
      'var x = function () {\n};'
    ]
  },
  'lines-around-comment': null,
  'linebreak-style': {
    fail: ['var a = "a";\r\n'],
    pass: ['var a = "a";\n']
  },
  'line-comment-position': null,
  'no-continue': {
    fail: ['var sum = 0, i;\n\nfor(i = 0; i < 10; i++) {\nif(i >= 5) {\ncontinue;\n}\na += i;\n}'],
    pass: ['var sum = 0, i;\nfor(i = 0; i < 10; i++) {\nif(i < 5) {\na += i;\n}\n}']
  },
  'operator-linebreak': {
    fail: ['var foo = 1 +\n2;'],
    pass: ['var foo = 1\n+ 2;']
  },
  'operator-assignment': {
    fail: ['var x = 0; x = x + 1;'],
    pass: ['var x = 0; x += 1;']
  },
  'object-property-newline': {
    fail: ['var obj = { key: "value", key1: "value1",\nkey2: "value2"};'],
    pass: ['var obj = { key: "value" };', 'var obj = {\nkey: "value"\n};']
  },
  'object-curly-spacing': {
    fail: [
      'var obj = {key: value}',
      'var obj = { key: value}',
      'var obj = {key: value }',
      'var obj = { key: [ 1, 2 ]}'
    ],
    pass: [
      'var obj = { key: value };',
      'var obj = { key: [ 1, 2 ] };'
    ]
  },
  'object-curly-newline': {
    fail: [
      'var obj = {\na: 1\n}',
      'var obj = {\nsame: "line", two: "keys"\n}'
    ],
    pass: [
      'var obj = { key: 1 }',
      'var obj = {\nkey: 1,\nkey2: 2\n}',
      'var obj = { key: 1, key2: 2, key3: 3 }'
    ]
  },
  'one-var-declaration-per-line': null,
  'one-var': {
    fail: [
      'var a;\nvar b;',
      'var a=1, b=2;'
    ],
    pass: [
      'var a=1;\nvar b=2;',
      'var a, b, c;'
    ]
  },
  'no-whitespace-before-property': {
    fail: ['foo [bar]', 'foo. bar'],
    pass: ['foo.bar', 'foo[bar]']
  },
  'no-unneeded-ternary': {
    fail: ['var x = true ? true : false;'],
    pass: ['var x = true;']
  },
  'no-underscore-dangle': null,
  'no-trailing-spaces': {
    fail: ['var x = 1; ', 'var x = 1;     // comment '],
    pass: ['var x = 1;', 'var x = 1;      // comment']
  },
  'no-ternary': null,
  'no-tabs': {
    fail: ['if (true) {\n\t;\n}'],
    pass: ['if (true) {\n  ;\n}']
  },
  'no-restricted-syntax': null,
  'no-plusplus': null,
  'no-new-object': {
    fail: ['var obj = new Object();'],
    pass: ['var obj = {};']
  },
  'no-nested-ternary': { pass: ['var x =true ? "foo" : true ? "bar" : "baz"'] },
  'no-negated-condition': null,
  'no-multiple-empty-lines': {
    fail: [
      '\nvar x = 1;',
      'var x = 1;\n\n\n',
      'var x = 1;\n\n\n\n\nvar y = 2;'
    ],
    pass: [
      'var x = 1;',
      'var x = 1;\n',
      'var x = 1;\n\nvar y = 2;'
    ]
  },
  'no-mixed-spaces-and-tabs': {
    fail: ['function foo () {\tvar x = 1,\n\t   y = 1;}'],
    pass: ['function foo () {\tvar x = 1;\n\tvar y = 1;}']
  },
  'no-mixed-operators': null,
  'no-lonely-if': {
    fail: [read('./no-lonely-if.fail')],
    pass: [read('./no-lonely-if.pass')]
  },
  'no-inline-comments': null,
  'no-bitwise': null,
  'no-array-constructor': {
    fail: ['Array(0, 1, 2);', 'new Array(1, 2, 3);'],
    pass: ['Array(500);', 'new Array(5);']
  },
  'newline-per-chained-call': {
    fail: [
      'var _ = require("./u.js");\n_.chain().chain2().chain3();',
      'var _ = require("./u.js");\n_.chain({}).chain().chain().prop.chain();'
    ],
    pass: [
      'var _ = require("./u.js");\n_\n  .chain()\n  .chain();',
      'var _ = require("./u.js");\n_.chain()\n.chain();',
      'var _ = require("./u.js");\n_\n.chain({}).prop;'
    ]
  },
  'newline-before-return': {
    fail: [read('./newline-before-return.fail')],
    pass: [read('./newline-before-return.pass')]
  },
  'newline-after-var': {
    fail: ['var x = 1;\nconsole.log(x);'],
    pass: ['var x = 1;\n\nconsole.log(x);']
  },
  'new-parens': {
    fail: ['var serv = new Hapi\nvar server = Hapi()'],
    pass: ['var Hapi = require("hapi");\nvar server = new Hapi.Server();']
  },
  'new-cap': {
    fail: ['var hapi = require("hapi");\nvar server = new hapi();'],
    pass: ['var Hapi = require("hapi");\nvar Server = new Hapi();']
  },
  'multiline-ternary': null,
  'max-statements': null,
  'max-statements-per-line': {
    fail: ['var a = 1; var b = 2;'],
    pass: ['var a = 1;']
  },
  'max-params': {
    fail: ['function foo (arg1, arg2, arg3, arg4, arg5, arg6) {};'],
    pass: ['function foo (arg1, arg2, arg3, arg4, arg5) {};']
  },
  'max-nested-callbacks': {
    fail: [read('./max-nested-callbacks.fail')],
    pass: [read('./max-nested-callbacks.pass')]
  },
  'max-lines': {
    fail: [read('./max-lines.fail')],
    pass: [read('./max-lines.pass')]
  },
  'max-len': {
    fail: [read('./max-len.fail0'), read('./max-len.fail1')],
    pass: [read('./max-len.pass0'), read('./max-len.pass1')]
  },
  'max-depth': {
    fail: [read('./max-depth.fail')],
    pass: [read('./max-depth.pass')]
  },
  'keyword-spacing': {
    fail: ['if(true){};'],
    pass: ['if (true) {};']
  },
  'key-spacing': {
    fail: ['var obj = {key : 42};'],
    pass: ['var obj = {key: 42};']
  },
  'func-name-matching': {
    fail: ['var bar = function foo () {return 42;};'],
    pass: ['var bar = function bar () {return 42;};']
  },
  'array-bracket-newline': null,
  'array-element-newline': null,
  'function-call-argument-newline': null,
  'function-paren-newline': null,
  'implicit-arrow-linebreak': null,
  'lines-between-class-members': null,
  'max-lines-per-function': null,
  'multiline-comment-style': null,
  'no-buffer-constructor': null,
  'no-multi-assign': null,
  'nonblock-statement-body-position': null,
  'padding-line-between-statements': null,
  'prefer-destructuring': null,
  'prefer-exponentiation-operator': null,
  'prefer-named-capture-group': null,
  'prefer-object-spread': null,
  'template-tag-spacing': null,
  'switch-colon-spacing': null,
  'semi-style': null
};
