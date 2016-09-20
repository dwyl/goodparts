var eslint = require('eslint');
var test = require('tape');

test('space-infix-ops', function (t) {
  var CLIEngine = eslint.CLIEngine;

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: './eslintrc.js'
  });

  var code1 = 'var a = 1 + 2;'
  var code2 = 'var a = 1+ 2;'

  t.equal(cli.executeOnText(code1).errorCount, 0);
  t.equal(cli.executeOnText(code2).errorCount, 1);

  t.end();
});
