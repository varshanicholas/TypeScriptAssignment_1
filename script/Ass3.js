"use strict";
// Write a function that returns true if the provided predicate function 
// returns true for all elements in a collection, false otherwise
function predicatedValues(arr, predicate) {
    return arr.every(predicate); //The every method checks if all elements in the array satisfy the predicate function.
}
console.log(predicatedValues([2, 3, 5, 6, 7, 8], x => x > 0));
console.log(predicatedValues([2, 8, 44, -9, -9], x => x > 0));
