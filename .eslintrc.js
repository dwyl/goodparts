var rules = require('./rules');

var config = {
  parserOptions: {
    ecmaVersion: 5,
  },
  env: {
    browser: true,
    node: true,
  },
  rules: rules
};

module.exports = config;
