'use strict';

var fs = require('fs');
var path = require('path');

module.exports = function read (filename) {
  return fs.readFileSync(
    path.join(__dirname, 'fixtures', filename + '.js'),
    'utf-8'
  );
};
