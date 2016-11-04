'use strict';

var test = require('tape');
var utils = require('./utils.js');
var exec = require('child_process').exec;

test('cli executes without error', function (t) {
  exec('./bin/cmd.js .', function (err, stdout, stderr) {
    t.notOk(err, 'Expect no errors thrown');
    t.notOk(stderr, 'Expect nothing logged to stderr');
    t.end();
  });
});

test('cli exits with code 1 when there are errors', function (t) {
  utils.createFile();

  exec('./bin/cmd.js ./test/bin', function (err, stdout, stderr) {
    t.equal(err.code, 1, 'Expect process to exit with code 1');
    t.ok(stdout.replace('\n', ''), 'Expect errors to be logged to stdout');
    t.notOk(stderr, 'Don\'t expect anything to be logged to stderr');

    utils.deleteFile();
    t.end();
  });
});
