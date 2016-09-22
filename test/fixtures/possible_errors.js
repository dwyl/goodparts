var read = require('../read.js');

module.exports = {
  'no-console': null,
  'no-debugger': { pass: [], fail: ['debugger;'] },
  'no-dupe-keys': { pass: [], fail: ['var x = {a:1, a: "repeat"']}
};
