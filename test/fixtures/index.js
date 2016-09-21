var fs = require('fs');
var path = require('path');

function read (filename) {
  return fs.readFileSync(path.join(__dirname, filename + '.js'), 'utf-8');
}

module.exports = {
  'max-len': {
    fail: [read('max-len.fail')],
    pass: ['aaaaaa']
  },
  'space-infix-ops': {
    fail: ['var a = 1+ 2;'],
    pass: ['var a = 1 + 2;']
  },
  'jacks-rule' : null
}
