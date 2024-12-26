// Add special characters for console text color


function colorizeText(text: string, colorCode: string): string {
    return `\x1b[${colorCode}m${text}\x1b[0m`;
}
console.log(colorizeText("Hello, colorful world!", "31")); 
