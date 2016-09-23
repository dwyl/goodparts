var cb1 = require('./cb1.js');

cb1(function (cb2) {
    cb2(function (cb3) {
      cb3(function (cb4) {
        cb4();
      });
    });
  });
});
