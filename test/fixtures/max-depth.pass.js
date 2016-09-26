var cb = require('./cb.js');

cb(function (data) {
  if (data.prop) {
    for (var i = 0; i < 10; i++) {
      if (i === data.prop) {
        console.log(i);
      }
    }
  }
});
