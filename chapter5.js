"use strict";
let _ = require("Ramda")


let compose = (a, b) => (n) => a(b(n));

let toUpperCase = str => str.toUpperCase();

let exclaim = str => str + '!';

let shout = compose(toUpperCase, exclaim);

let head = a => a[0];

let reverse = _.reduce((acc, x) => [x].concat(acc), []);

let reverse2 = (ary) => {
    let newArray = [].concat(ary);
    for (let i = 0; i < ary.length / 2; i++) {
        [newArray[i], newArray[newArray.length - 1 - i]] = [newArray[newArray.length - 1 - i], newArray[i]];
    }
    return newArray;
}


let words = ['jumpkick', 'roundhouse', 'uppercut'];
let loudLast = compose(shout, compose(head, reverse2));
let loudLast2 = _.compose(head, shout, reverse2);

// Pointfree
let snakeCase = function (word) {
    return word.toLowerCase().replace(/\s+/ig, '_');
};

let replace = _.curry((regexp, what, str) => str.replace(regexp, what));
let replaceSpaces = replace(/\s+/ig);
let replaceSpacesWithSnakes = replaceSpaces("_");

let snakeCasePointfree = compose(replaceSpacesWithSnakes, toUpperCase);

// Debugging
const angry = _.compose(exclaim, toUpperCase);
const map = _.curry((f, ary) => ary.map(f))
const join = _.curry((str, ary) => ary.join(str));

let latin = _.compose(map(angry), reverse);

const trace = _.curry((tag, x) => {
    console.log(tag, x);
    return x;
})

const dasherize = _.compose(_.join("-"), trace("after map to lower"), _.map(_.toLower), trace("after split"), _.split(" "), trace("after replace"), _.replace(/\s{2,}/ig, " "));


const g = x => x.length;
const f = x => x === 4;
const id = (x) => x;
const isFourLetterWord = _.compose(f, g)


let accounting = require('accounting');

// Example Data
let CARS = [{
    name: 'Ferrari FF',
    horsepower: 660,
    dollar_value: 700000,
    in_stock: true,
}, {
    name: 'Spyker C12 Zagato',
    horsepower: 650,
    dollar_value: 648000,
    in_stock: false,
}, {
    name: 'Jaguar XKR-S',
    horsepower: 550,
    dollar_value: 132000,
    in_stock: false,
}, {
    name: 'Audi R8',
    horsepower: 525,
    dollar_value: 114200,
    in_stock: false,
}, {
    name: 'Aston Martin One-77',
    horsepower: 750,
    dollar_value: 1850000,
    in_stock: true,
}, {
    name: 'Pagani Huayra',
    horsepower: 700,
    dollar_value: 1300000,
    in_stock: false,
}];

// Exercise 1:
// ============
// Use _.compose() to rewrite the function below. Hint: _.prop() is curried.
var isLastInStock = function(cars) {
    var last_car = _.last(cars);
    return _.prop('in_stock', last_car);
};

isLastInStock = _.compose(_.prop('in_stock'), _.last);

// Exercise 2:
// ============
// Use _.compose(), _.prop() and _.head() to retrieve the name of the first car.
var nameOfFirstCar = undefined;

nameOfFirstCar = _.compose(_.prop("name"), _.head);

// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition.
var _average = function(xs) {
    return _.reduce(_.add, 0, xs) / xs.length;
}; // <- leave be

var averageDollarValue = function(cars) {
    var dollar_values = _.map(function(c) {
        return c.dollar_value;
    }, cars);
    return _average(dollar_values);
};

averageDollarValue = _.compose(_average, _.map(_.prop('dollar_value')))

// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored car's names: e.g: sanitizeNames([{name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true}]) //=> ['ferrari_ff'].

var _underscore = _.replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

var sanitizeNames = _.map(_.compose(_underscore, _.toLower, _.prop('name')));


// Bonus 1:
// ============
// Refactor availablePrices with compose.

var availablePrices = function(cars) {
    var available_cars = _.filter(_.prop('in_stock'), cars);
    return available_cars.map(function(x) {
        return accounting.formatMoney(x.dollar_value);
    }).join(', ');
};


availablePrices = _.compose(_.join(", "), _.map(_.compose (accounting.formatMoney, _.prop("dollar_value"))), _.filter(_.prop('in_stock')))

// Bonus 2:
// ============
// Refactor to pointfree. Hint: you can use _.flip().

var fastestCar = function(cars) {
    var sorted = _.sortBy(function(car) {
        return car.horsepower;
    }, cars);
    var fastest = _.last(sorted);
    return fastest.name + ' is the fastest';
};

console.log(fastestCar(CARS))
let append = _.flip(_.concat)
let appendSign = append("$");
console.log(appendSign("135"))
console.log((_.concat("$", "135")))
fastestCar = _.compose(append(' is the fastest'), _.prop("name"), _.last, _.sortBy(_.prop("horsepower")))
console.log(fastestCar(CARS))
