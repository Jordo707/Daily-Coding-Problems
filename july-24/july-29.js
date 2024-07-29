/*

Given an array of integers in which two elements appear exactly once and all other elements appear exactly twice, find the two elements that appear only once.

For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The order does not matter.

Follow-up: Can you do this in linear time and constant space?

*/

const twoUnique = arr => {
    // XOR all the elements in the array
    let xorResult = arr.reduce((acc, num) => acc ^ num, 0);

    // Find a set bit (rightmost set bit in this case)
    let setBit = xorResult & -xorResult;

    // Divide elements into two groups and XOR separately
    let unique1 = 0, unique2 = 0;
    for (let num of arr) {
        if (num & setBit) {
            unique1 ^= num;
        } else {
            unique2 ^= num;
        }
    }

    return [unique1, unique2];
}

// Test Case
const arr1 = [2, 4, 6, 8, 10, 2, 6, 10]
const arr2 = [1, 2, 5, 1, 11, 3, 2, 11]

console.log(twoUnique(arr1)) // expect [4,8]
console.log(twoUnique(arr2)) // expect [3,5]
