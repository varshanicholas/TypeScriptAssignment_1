"use strict";
// Converts a specified number to an array of digits 
function numberToDigit(n1) {
    return Array.from(String(n1), digit => parseInt(digit));
}
console.log(numberToDigit(124567));
