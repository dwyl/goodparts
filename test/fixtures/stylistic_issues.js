var read = require('../read.js');

module.exports = {
  'max-len': {
    fail: [read('max-len.fail')],
    pass: ['aaaaaa']
  },
  'space-infix-ops': {
    fail: ['var a = 1+ 2;'],
    pass: ['var a = 1 + 2;']
  },
  'array-bracket-spacing': {
    fail: ['[ 1, 2, 3 ]'],
    pass: ['[1, 2, 3]']
  },
  'block-spacing': {
    fail: ['{var a =2; }'],
    pass: ['{var a =2;}']
  },
  'brace-style': {
    fail: [read('brace-style.fail')],
    pass: [read('brace-style.pass')]
  },
  'camelcase': {
    fail: ['var camel_case = 42;'],
    pass: ['var camelCase = 42;']
  },
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
  'wrap-regex': null
};
