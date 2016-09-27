'use strict';

var bestPractices = require('./best_practices');
var nodeCommonJs = require('./node_common_js');
var possibleErrors = require('./possible_errors');
var strict = require('./strict');
var stylisticIssues = require('./stylistic_issues.js');
var variables = require('./variables');
var es6 = require('./es6');

module.exports = Object.assign({},
  bestPractices,
  nodeCommonJs,
  possibleErrors,
  strict,
  stylisticIssues,
  variables,
  es6
);
