'use strict';

const isValid = require('./multi-bracket-validation.js');

let str = '{()}';
let str2 = '{}((){ere})';
let str3 = '[{}])';
let str4 = '{{}';

console.log(isValid(str));
console.log(isValid(str2));
console.log(isValid(str3));
console.log(isValid(str4));
