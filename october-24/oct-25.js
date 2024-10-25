/*

Given a list of numbers, create an algorithm that arranges them in order to form the largest possible integer. For example, given [10, 7, 76, 415], you should return 77641510.

*/

const largestNumber = (nums) => {
    // Convert numbers to strings to easily concatenate them
    const strNums = nums.map(String);

    // Custom sort: if `a + b` is larger than `b + a`, `a` should come first
    strNums.sort((a, b) => (b + a) - (a + b));

    // Join the sorted array into a single string
    const result = strNums.join('');

    // Edge case: if the largest number is 0 (e.g., [0, 0]), return '0' instead of '00...'
    return result[0] === '0' ? '0' : result;
};

// Test Cases
console.log(largestNumber([10, 7, 76, 415])); // "77641510"
