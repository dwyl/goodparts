/*
 * Utility functions to help with CLI testing
 */
'use strict';

var fs = require('fs');
var path = require('path');

/*
 * Creates a dummy file with known linter errors to help
 * simulate the CLI catching errors.
 * Just copies over one of the test fixtures.
 */
exports.createFile = function createFile () {
  var contents = fs.readFileSync(
    path.resolve(__dirname, '..', 'fixtures', 'ident.fail.js'),
    'utf8'
  );

  fs.writeFileSync(path.join(__dirname, 'dummy.js'), contents);
};

/*
 * Deletes the dummy file
 */
exports.deleteFile = function deleteFile () {
  fs.unlinkSync(path.join(__dirname, 'dummy.js'));
};
