'use strict';

var test = require('tape');
var cli = require('../../bin/cmd.js');
var exec = require('child_process').exec;

test('cli executes without error', function (t) {
  cli(['./rules']);
  t.end();
});

test('cli exits with code 1 when there are errors', function (t) {
  exec('./bin/cmd.js .', function (err, stdout, stderr) {
    t.ok(err, 'Expect process to exit with code 1');
    t.ok(stdout, 'Expect errors to be logged to stdout');
    t.notOk(stderr, 'Don\'t expect anything to be logged to stderr');
    t.end();
  });
});
