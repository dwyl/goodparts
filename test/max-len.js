var eslint = require('eslint');
var test = require('tape');

test('max-len', function (t) {
  var CLIEngine = eslint.CLIEngine;

  var cli = new CLIEngine({
    useEslintrc: false,
    configFile: './eslintrc.js'
  });

  var code1 = 'asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa';
  var code2 = 'aaaaaa';

  t.equal(cli.executeOnText(code1).errorCount, 1);
  t.equal(cli.executeOnText(code2).errorCount, 0);

  t.end();
});
