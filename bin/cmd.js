#!/usr/bin/env node
'use strict';

var path = require('path');
var eslint = require('eslint');
var parse = require('minimist');

var configFilePath = path.resolve(__dirname, '..', '.eslintrc.js');
var cli, report;

var args = parse(process.argv.slice(2));
var dir = args._.slice(0, 1);

var shouldFix = args.hasOwnProperty('fix');

cli = new eslint.CLIEngine({ configFile: configFilePath, fix: shouldFix });

report = cli.executeOnFiles(dir);

if (shouldFix) {
  eslint.CLIEngine.outputFixes(report);
}

console.log(cli.getFormatter()(report.results)); // eslint-disable-line

// End with exit code 1 if there are errors
// Use process.exit instead of throwing to mimic the behaviour of eslints bin
// We don't want a stacktrace, it would just be confusing
if (report.errorCount) {
    process.exit(1); // eslint-disable-line
}
