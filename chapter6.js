/**
 * Created by serhii on 24.01.2017.
 */
var R = require('ramda')
var Container = function (x) {
    this.__value = x;
};

Container.of = function(x) {return new Container(x)};

// (a -> b) -> Container a -> Container b
Container.prototype.map = function(f) {
    return Container.of(f(this.__value));
}

console.log(Container.of(2).map(R.add(5)).map(R.add(1500)).__value);
console.log(Container.of("hotdogs"));
