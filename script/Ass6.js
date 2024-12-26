"use strict";
//Create a function that invokes each provided function with the 
//arguments it receives and returns the results 
function invokeFunctions(funcs, ...args) {
    return funcs.map(fn => fn(...args));
}
const results = invokeFunctions([
    x => x + 1,
    x => x * 2
], 5);
console.log(results); // Output: [6, 10]
