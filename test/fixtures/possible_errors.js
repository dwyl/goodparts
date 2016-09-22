var read = require('../read.js');

module.exports = {
  'no-console': null,
  'no-debugger': { fail: ['debugger;'] },
  'no-dupe-keys': { fail: ['var x = {a:1, a: "repeat"'] },
  'no-empty-character-class': { fail: ['/^abc[]/.test("abcdefg");'] },
  'no-ex-assign': { fail: ['try { var x; } catch (e) { e = 10; }'] },
  'no-extra-parens': null,
};
