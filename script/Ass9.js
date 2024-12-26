"use strict";
//I. Compute average of an array after mapping
function computeAverage(arr, mapFn) {
    const mapped = arr.map(mapFn);
    return mapped.reduce((sum, value) => sum + value, 0) / mapped.length;
}
console.log(computeAverage([1, 2, 3], x => x * 2));
