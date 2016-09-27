var cb1 = require('./cb1.js');

cb1(function (cb2) {
  cb2();
});
