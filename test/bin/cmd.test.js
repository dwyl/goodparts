'use strict';

var test = require('tape');
var utils = require('./utils.js');
var path = require('path');
var exec = require('child_process').exec;

test('cli executes without error', function (t) {
  exec('./bin/cmd.js .', function (err, stdout, stderr) {
    t.notOk(err, 'Expect no errors thrown');
    t.notOk(stderr, 'Expect nothing logged to stderr');
    t.end();
  });
});

test('cli exits with code 1 when there are errors', function (t) {
  var source = path.resolve(__dirname, '..', 'fixtures', 'ident.fail.js');
  var target = path.join(__dirname, 'dummy.js');

  utils.copyFile(source, target);

  exec('./bin/cmd.js ./test/bin', function (err, stdout, stderr) {
    t.equal(err.code, 1, 'Expect process to exit with code 1');
    t.ok(stdout.replace('\n', ''), 'Expect errors to be logged to stdout');
    t.notOk(stderr, 'Don\'t expect anything to be logged to stderr');

    utils.deleteFile(target);
    t.end();
  });
});

test('cli creates a symlink file when called with "--link"', function (t) {
  exec('./bin/cmd.js ./test/bin --link', function (err, stdout, stderr) {
    t.notOk(err, 'Expect no errors thrown');
    t.notOk(stderr, 'Expect nothing logged to stderr');
    t.ok(
      /Successfully symlinked .eslintrc.js to /.test(stdout),
      'Expect success message in stdout'
    );

    utils.deleteFile(path.join(__dirname, '.eslintrc.js'));
    t.end();
  });
});

test('cli outputs fixes when called with "--fix"', function (t) {
  var source = path.resolve(__dirname, '..', 'fixtures', 'ident.fail.js');
  var target = path.join(__dirname, 'dummy.js');

  function getProblems (stdout) {
    var pattern = /(\d+) problems \(\d+ errors, \d+ warnings\)/;
    var matches = stdout.match(pattern);

    return matches && matches.length > 1
      ? Number(matches[1])
      : 0;
  }

  utils.copyFile(source, target);

  exec('./bin/cmd.js ./test/bin', function (err, stdout, stderr) {
    var problemsNoFix = getProblems(stdout);

    t.ok(problemsNoFix, 'Expect errors to be output to stdout');
    t.equal(err.code, 1, 'Expect process to exit with code 1');
    t.notOk(stderr, 'Expect nothing logged to stderr');

    exec('./bin/cmd.js ./test/bin --fix', function (_err, _stdout, _stderr) {
      var problemsFix = getProblems(_stdout);

      t.ok(problemsFix < problemsNoFix, 'Expect --fix to fix some issues');
      t.equal(_err.code, 1, 'Expect process to exit with code 1');
      t.notOk(_stderr, 'Expect nothing logged to stderr');

      utils.deleteFile(target);
      t.end();
    });
  });
});
