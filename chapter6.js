var R = require('ramda')

var Maybe = function (x) {
  this.__value = x;
}

Maybe.of = function (x) {
  return new Maybe(x);
};

Maybe.prototype.isNothing = function () {
  return (this.__value === null || this.__value === undefined);
};

Maybe.prototype.map = function (f) {
  return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value))
};


console.log(Maybe.of('Malkovich Malkovich').map(R.match(/a/ig)))