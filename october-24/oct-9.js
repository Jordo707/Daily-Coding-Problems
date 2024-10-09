/*

Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".

*/

const numToLetter = num => {
    let result = '';
    while (num > 0) {
        num--; // Adjust for 0-indexing
        result = String.fromCharCode((num % 26) + 65) + result;
        num = Math.floor(num / 26);
    }
    return result;
}

// Test Cases
console.log(numToLetter(1)); // "A"
console.log(numToLetter(27)); // "AA"
