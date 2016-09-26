function foo (x, y) {
  var i = 0;
  for (i = 0; i < 10; i++) {
    if (x) {
      if (y) {
        if (x || y) {
          if (x && y) {
            if (x * x) {
              if (x * y) {
                if (x || y) {
                  console.log(x, y);
                }
              }
            }
          }
        }
      }
    }
  }
}
