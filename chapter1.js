const co = require('./common');

let a = 1;
let b = 2;
let c = 3;

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y
}


// (a + b) + c = a + (b + c)
add(add(a, b), c) === add(a, add(b, c)) && co.say('associative');

// a + b = b + a
add(a, b) === add(b, a) && co.say('commutative');

// a + 0 = a
add(a, 0) === a && co.say('identity');

// a * (b + c) = a * b + a * c
multiply(a, add(b, c)) === add(multiply(a, b), multiply(a, c)) && co.say('distributive');
