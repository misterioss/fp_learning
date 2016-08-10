const co = require('./common');

let xs = [1, 2, 3, 4, 5];
const initLength = xs.length;

//pure
xs.slice(1, 3) && co.say(xs.length === initLength ? 'pure' : 'impure');
//impure
xs.splice(1, 3) && co.say(xs.length === initLength ? 'pure' : 'impure');
//=========================================
//impure
let min = 21;

function checkAge(age) {
    return age >= min;
}

//pure
function checkAge(age) {
    let min = 21;
    return age >= min;
}
//=========================================
const initValue = 25;
let immutableState = Object.freeze({min: initValue});
immutableState.min = 21;


co.say('is immutable? ' + (immutableState.min === initValue));
//=========================================
let toLowerCase = {
    'A': 'a',
    'B': 'b',
    'C': 'c',
    'D': 'd',
    'E': 'e'
};

let str = 'ABCD'.split('').map((letter) => toLowerCase[letter]).join('');
co.say(str);
