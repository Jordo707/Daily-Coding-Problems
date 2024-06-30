/*

Given two strings A and B, return whether or not A can be shifted some number of times to get B.

For example, if A is abcde and B is cdeab, return true. If A is abc and B is acb, return false.

*/

const canShift = (A, B) => {
    // Check if A and B have the same length
    if (A.length !== B.length) return false;

    // Concatenate A with itself
    let doubleA = A + A;

    // Check if B is a substring of the concatenated result
    return doubleA.includes(B);
}

// Test Cases
console.log(canShift("abcde", "cdeab")); // expect true
console.log(canShift("abc", "acb"));     // expect false
