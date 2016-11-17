/*
 * Utility functions to help with CLI testing
 */
'use strict';

var fs = require('fs');

/*
 * Creates a dummy file with known linter errors to help
 * simulate the CLI catching errors.
 * Just copies over one of the test fixtures.
 */
exports.copyFile = function copyFile (source, target) {
  fs.writeFileSync(target, fs.readFileSync(source, 'utf8'));
};

/*
 * Deletes the dummy file
 */
exports.deleteFile = function deleteFile (target) {
  fs.unlinkSync(target);
};
