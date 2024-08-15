/*

Given a string, determine whether any permutation of it is a palindrome.

For example, carrace should return true, since it can be rearranged to form racecar, which is a palindrome. daily should return false, since there's no rearrangement that can form a palindrome.

*/


const isPalindromicPerm = str => {
    // Create a character count object
    const charCount = {};

    // Iterate through str, assigning each distinct character to a key/value pair in charCount
    for (let char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    // See if there are more than 1 character with an odd number of occurances
    let oddCount = 0;
    for (let count of Object.values(charCount)) {
        if (count % 2) {
            oddCount++;
        }
    }

    // If a word has more than one character that occurs an odd number of times, there is no way to permutate it into a palindrome
    return oddCount <= 1;
}

// Test Cases
console.log(isPalindromicPerm('rcarace')); // true
console.log(isPalindromicPerm('catthew')); // false
