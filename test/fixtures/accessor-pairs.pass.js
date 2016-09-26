var obj = {};
Object.defineProperty(obj, 'x', {
  get: function (x) { return this.a;},
  set: function (x) { this.a = x;}
});
