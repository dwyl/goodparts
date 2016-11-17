#!/usr/bin/env node
'use strict';

var exec = require('child_process').exec;
var path = require('path');
var eslint = require('eslint');
var parse = require('minimist');

var configFilePath = path.resolve(__dirname, '..', '.eslintrc.js');
var cli, report;

var args = parse(process.argv.slice(2));
var dir = args._.slice(0, 1);

/*
 * Symlinks the eslintrc file into the dependent project's root
 */
function createSymLink () {
  var fullpath = path.resolve(dir[0]);

  exec(
    'ln -sf ' + configFilePath + ' ' + path.join(fullpath, '.eslintrc.js'),
    function (err) {
      if (err) {
        console.error('Error encountered when trying to create symlink', err); // eslint-disable-line
      }

      console.log('Successfully symlinked .eslintrc.js to ' + fullpath); // eslint-disable-line
    }
  );
}

/*
 * Lints the directory passed in as a command line argument
 */
function lintDirectory () {
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
}

if (args.hasOwnProperty('link')) {
  createSymLink();
} else {
  lintDirectory();
}
