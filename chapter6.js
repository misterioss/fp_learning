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

var something = Maybe.of("something").map(e => e.toUpperCase()).map(e=>e.split(''))
console.log(something)