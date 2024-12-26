"use strict";
function createObjectFromPairs(pairs) {
    return Object(pairs); // Works after updating tsconfig.json to ES2019
}
const keyValuePairs = [['key1', 'value1'], ['key2', 'value2']];
console.log(createObjectFromPairs(keyValuePairs)); // Output: { key1: 'value1', key2: 'value2' }
// function createObjectFromPairs(pairs: [string, any][]): Record<string, any> {
//     return Object.fromEntries(pairs);  // Works after updating tsconfig.json to ES2019
// }
// const keyValuePairs: [string, any][] = [['key1', 'value1'], ['key2', 'value2']];
// console.log(createObjectFromPairs(keyValuePairs)); // Output: { key1: 'value1', key2: 'value2' }
