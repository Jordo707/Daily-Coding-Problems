/*

Given an array of numbers, find the maximum sum of any contiguous subarray of the array.

For example, given the array [34, -50, 42, 14, -5, 86], the maximum sum would be 137, since we would take elements 42, 14, -5, and 86.

Given the array [-5, -1, -8, -9], the maximum sum would be 0, since we would not take any elements.

Do this in O(N) time.

*/

const maxSubarraySum = (arr: number[]): number => {
    if (arr.length === 0) return 0;

    let maxCurrent = Math.max(0, arr[0]);
    let maxGlobal = maxCurrent;

    for (let i = 1; i < arr.length; i++) {
        maxCurrent = Math.max(arr[i], maxCurrent + arr[i]);
        if (maxCurrent > maxGlobal) {
            maxGlobal = maxCurrent;
        }
    }

    return maxGlobal;
};

// Example usage:
console.log(maxSubarraySum([34, -50, 42, 14, -5, 86]));  // Output: 137
console.log(maxSubarraySum([-5, -1, -8, -9]));          // Output: 0
