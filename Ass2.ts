//Removes non-printable ASCII characters from a given string 


function removeNonPrintableChars(str: string): string {
    return str.replace(/[\x00-\x1F\x7F]/g, '');
}
console.log(removeNonPrintableChars("Hello\u0001\u0002World")); // Output: HelloWorld
