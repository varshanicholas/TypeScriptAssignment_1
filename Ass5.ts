// To create an object with keys generated by running the 
// provided function for each key and the same values as the 
// provided object 



// Define a generic function to transform object keys
function transformObjectKeys<T>(obj: Record<string, T>, transform: (key: string) => string): Record<string, T> {
    // Use Object.keys to iterate over each key in the object
    return Object.keys(obj).reduce((result, key) => {
        // Apply the transform function to each key and assign the value from the original object
        result[transform(key)] = obj[key];
        return result;
    }, {} as Record<string, T>); // Initialize an empty object of the same type as the input object
}

// Example usage of the function
const originalObj = { a: 1, b: 2 };

// Transform the keys of the original object to uppercase
const transformedObj = transformObjectKeys(originalObj, key => key.toUpperCase());

// Log the transformed object
console.log(transformedObj); // Output: { A: 1, B: 2 }
