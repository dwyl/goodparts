var obj = {};
Object.defineProperty(obj, 'x', {
  set: function (x) { this.a = x;}
});
