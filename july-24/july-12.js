/*

Given a string, return whether it represents a number. Here are the different kinds of numbers:

"10", a positive integer
"-10", a negative integer
"10.1", a positive real number
"-10.1", a negative real number
"1e5", a number in scientific notation


And here are examples of non-numbers:

"a"
"x 1"
"a -2"
"-"

*/

const numType = str => {

    // ensure input is a string
    if(typeof(str) !== 'string') return 'Invalid Input: Please Enter a String'

    // Define regular expressions for different types of numbers
    const intRegex = /^-?\d+$/;
    const realRegex = /^-?\d*\.\d+$/;
    const sciRegex = /^-?\d+(\.\d+)?e-?\d+$/i;

    // Check for different types of numbers
    if (intRegex.test(str)) {
        return str.startsWith('-') ? 'a negative integer' : 'a positive integer';
    } else if (realRegex.test(str)) {
        return str.startsWith('-') ? 'a negative real number' : 'a positive real number';
    } else if (sciRegex.test(str)) {
        return 'a number in scientific notation';
    } else {
        return 'NaN';
    }
}

// Test Cases
console.log(numType(5)) // Expect "Invalid Input: Please Enter a String"
console.log(numType('5')) // Expect "a positive integer"
console.log(numType('-5')) // Expect "a negative integer"
console.log(numType('13.4')) // Expect "a positive real number"
console.log(numType('-9.02')) // Expect "a negative real number"
console.log(numType('3e5')) // Expect "a number in scientific notation"
console.log(numType('y')) // Expect "NaN"
