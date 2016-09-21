var bestPractices = require('./best-practices');
var nodeCommonJs = require('./node-common-js');
var possibleErrors = require('./possible-errors');
var strict = require('./strict');
var stylisticIssues = require('./stylistic-issues');
var variables = require('./variables');

module.exports = Object.assign({},
  bestPractices,
  nodeCommonJs,
  possibleErrors,
  strict,
  stylisticIssues,
  variables
);
