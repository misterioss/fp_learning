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

console.log(snakeCasePointfree("hello Piotr"))
