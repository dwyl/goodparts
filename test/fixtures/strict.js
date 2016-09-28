'use strict';

module.exports = {
  strict: {
    fail: ['function foo () {}'],
    pass: ['function foo () {\'use strict\';}']
  }
};
