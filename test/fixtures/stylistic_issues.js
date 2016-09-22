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
  'unicode-bom': {
    fail: [],
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
  }
};
