#!/usr/bin/env node

var path = require('path');
var eslint = require('eslint');

var configFilePath = path.resolve(__dirname, '..', '.eslintrc.js')
var cli, report;

cli = new eslint.CLIEngine({ configFile: configFilePath });
report = cli.executeOnFiles(process.argv.slice(2));

console.log(cli.getFormatter()(report.results)); // eslint-disable-line
