"use strict";
let _ = require("Ramda")

let compose = (a, b) => (n) => a(b(n));

let head = a => a[0];

let reverse = _.reduce((acc, x) => [x].concat(acc), []);

console.log(reverse([1, 2, 3, 4]))

let reverse2 = (ary) => {
    for (let i = 0; i < ary.length / 2; i++) {
        [ary[i], ary[ary.length - 1 - i]] = [ary[ary.length - 1 - i], ary[i]];
    }
    return ary;
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = reverse2(a);
console.log(a)

