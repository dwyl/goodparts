var test = require('tape');
var eslint = require('eslint');
var allRules = require('eslint/conf/eslint-all.js').rules;

var testObject = require('./fixtures/');
var ourRules = require('../rules');

var linter = eslint.linter;

function passesRule (rule, text) {
  var rules = {};

  rules[rule] = ourRules[rule];

  return linter.verify(text, { rules: rules }).length === 0;
}

function ruleNotSet (rule) {
  return [undefined, 0, 'off'].indexOf(config.rules[rule]) > -1;
}

function ruleNotConfigured (rule) {
  return ourRules[rule] === undefined;
}

test('Testing All Conifgurable Rules', function (t) {
  Object.keys(allRules).forEach(function (rule) {
    var fCases;
    var pCases;

    if (ruleNotConfigured(rule)) {
      return t.fail(rule + ' not configured');
    }

    if ([null, undefined].indexOf(testObject[rule]) > -1) {
      return t.ok(ruleNotSet, rule + ' not configured');
    }

    fCases = testObject[rule].fail;
    pCases = testObject[rule].pass;

    fCases && fCases.forEach(function (text) {
      t.notOk(passesRule(rule, text), rule + ' fails');
    });
    pCases && pCases.forEach(function (text) {
      t.ok(passesRule(rule, text), rule + ' passes');
    });
  });

  t.end();
});

test('Testing bin file executes without error', function (t) {
  require('../bin/cmd.js');
  t.end();
});
