var read = require('../read.js');

module.exports = {
  'max-len': {
    fail: [read('./max-len.fail0'),read('./max-len.fail1') ],
    pass: ['aaaaaa']
  },
  'space-infix-ops': {
    fail: ['var a = 1+ 2;'],
    pass: ['var a = 1 + 2;']
  },
  'unicode-bom': {
    pass: ['U+FEFF\nvar abc;', 'var abc;']
  },
  'space-unary-ops': {
    fail: [
      'varhi = "world";',
      'var hi= "world";',
      'var hi ="world";',
      'var bool = ! true;'
    ],
    pass: [
      'var hi = "world";',
      'var bool = !true;'
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
      'if (foo) { bar(); }'
    ]
  },
  'require-jsdoc': {
    pass: ['function () {};']
  },
  'operator-linebreak': {
    fail: ['var foo = 1 +\n2;'],
    pass: ['var foo = 1\n+ 2;']
  },
  'operator-assignment': {
    fail: ['var x = x + 1'],
    pass: ['var x += 1']
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
    pass: ['var obj = { key: value };', 'var obj = { key: [ 1, 2 ] };']
  },
  'object-curly-newline': {
    fail: ['var obj = {\nkey: 1\n}', 'var obj = { key: 1, key2: 2, key3: 3 }'],
    pass: ['var obj = { key: 1 }', 'var obj = { key: 1,\nkey2: 2}']
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
  'no-nested-ternary': {
    pass: ['var x = true ? "foo" : true ? "bar" : "baz"']
  },
  'no-negated-condition': null,
  'no-multiple-empty-lines': {
    fail: ['\nvar x = 1;', 'var x = 1;\n\n', 'var x = 1;\n\n\nvar y = 2;'],
    pass: ['var x = 1;', 'var x = 1;\n', 'var x = 1;\n\nvar y = 2;']
  },
  'no-mixed-spaces-and-tabs': {
    fail: ['var x = \t1;'],
    pass: ['var x =\t1;', 'var x = 1;']
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
      'var _ = require("./u.js");\n_.chain().chain2();',
      'var _ = require("./u.js");\n_\n.chain({}).prop.prop;'
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
    fail: ['var Hapi = new require("hapi").Server\nvar server = Hapi()'],
    pass: ['var Hapi = require("hapi");\nvar server = new Hapi.Server();']
  },
  'new-cap': {
    fail: ['var hapi = require("hapi");\nvar server = new hapi.Server();'],
    pass: ['var Hapi = require("hapi");\nvar Server = new Hapi.Server();']
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
    pass: [read('./max-len.pass0'), read('./max-len.pass1')],
  },
  'max-depth': {
    fail: [read('./max-depth.fail')],
    pass: [read('./max-depth.pass')]
  },
  'lines-around-directive': {
    fail: [read('./lines-around-directive.fail0'), read('./lines-around-directive.fail0')],
    pass: [read('./lines-around-directive.pass0'), read('./lines-around-directive.pass1')]
  },
  'keyword-spacing': {
    fail: ['if(true){};'],
    pass: ['if (true) {};']
  },
  'key-spacing': {
    fail: ['{key :42};'],
    pass: ['{key: 42};']
  }
};
