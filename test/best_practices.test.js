var test = require('tape');
var eslint = require('eslint');

var testObject = require('./test_object.js');
var config = require('../eslintrc.js');

var linter = eslint.linter;

function passesRule (rule, text) {
  var rules = {};

  rules[rule] = config.rules[rule];

  return linter.verify(text, { rules: rules }).length === 0;
}

function ruleNotSet (rule) {
  return [undefined, 0, 'off'].indexOf(config.rules[rule]) > -1;
}

test('rule runner', function (t) {
  Object.keys(testObject).forEach(function (rule) {
    if (!testObject[rule]) {
      t.ok(ruleNotSet, rule + ' not configured');
      return;
    }

    testObject[rule].fail.forEach(function (text) {
      t.notOk(passesRule(rule, text), rule + ' fails');
    });
    testObject[rule].pass.forEach(function (text) {
      t.ok(passesRule(rule, text), rule + ' passes');
    });
  });

  t.end();
});
