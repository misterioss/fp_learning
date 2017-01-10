"use strict";

// let add = function (x) {
//     return function (y) {
//         return x + y;
//     }
// }
// let increment = add(1);
// let addTen = add(10);
//
// let curry = require('lodash/curry');
//
// let match = curry(function (what, str) {
//     return str.match(what);
// })
//
// let replace = curry(function (what, replacement, str) {
//     return str.replace(what, replacement);
// })
//
// let filter = curry(function (f, ary) {
//     return ary.filter(f);
// })
//
// let map = curry(function (f, ary) {
//     return ary.map(f);
// })
//
// let hasSpaces = match(/\s+/ig)
//
// let findSpaces = filter(hasSpaces);
//
// let noVowels = replace(/[aeiouy]/ig);
//
// let censored = noVowels("*")

// Exercises

let _ = require('ramda');

// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function.

let words = function (str) {
    return _.split(' ', str);
};

let split = _.curry(function (what, str) {
    return _.split(what, str)
})

let splitBySpace = split(" ");


let map = _.curry(function (f, ary) {
    return _.map(f, ary)
});


let sentences = map(splitBySpace);


// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions.

let filterQs = function (xs) {
    return _.filter(function (x) {
        return match(/q/i, x);
    }, xs);
};

let match = _.curry((pattern, str) => str.match(pattern));

let filter = _.curry((f, ary) => ary.filter(f));

let matchQ = match(/q/i);

filterQs = _.filter(matchQ);


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any
// arguments.

// LEAVE BE:
var _keepHighest = function (x, y) {
    return x >= y ? x : y;
};

// REFACTOR THIS ONE:
var max = function (xs) {
    return _.reduce(function (acc, x) {
        return _keepHighest(acc, x);
    }, -Infinity, xs);
};

max = _.reduce(_keepHighest, -Infinity);



// Bonus 1:
// ============
// Wrap array's slice to be functional and curried.
// //[1, 2, 3].slice(0, 2)
var slice = undefined;

slice = _.curry((from, to, ary) => ary.slice(from, to))

let sliceFromZero = slice(0);
let sliceFromZeroToSecond = sliceFromZero(2);
console.log(sliceFromZeroToSecond([1,2,3]));

// Bonus 2:
// ============
// Use slice to define a function "take" that takes n elements from the beginning of the string. Make it curried.
// // Result for "Something" with n=4 should be "Some"
var take = undefined;
take = slice(0,4);

console.log(take("Something"))