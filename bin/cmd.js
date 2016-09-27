#!/usr/bin/env node
'use strict';

var path = require('path');
var eslint = require('eslint');

var configFilePath = path.resolve(__dirname, '..', '.eslintrc.js');
var cli, report;

var dir = process.argv.slice(2, 3);
var flags = process.argv.slice(3);
var shouldFix = flags.indexOf('--fix') > -1;

cli = new eslint.CLIEngine({
  configFile: configFilePath, fix: shouldFix
});

report = cli.executeOnFiles(dir);

if (shouldFix) {
  eslint.CLIEngine.outputFixes(report);
}

console.log(cli.getFormatter()(report.results)); // eslint-disable-line
