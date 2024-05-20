/*
Given a list of integers, return the largest product that can be made by multiplying any three integers.

For example, if the list is [-10, -10, 5, 2], we should return 500, since that's -10 * -10 * 5.

You can assume the list has at least three integers.
*/

const maxProductOfThree = (nums) => {
    // Sort the array
    nums.sort((a, b) => a - b);

    const n = nums.length;

    // The maximum product can be either from the product of the three largest numbers
    // or the product of the two smallest (most negative) numbers and the largest number.
    const maxProduct = Math.max(
        nums[n - 1] * nums[n - 2] * nums[n - 3],
        nums[0] * nums[1] * nums[n - 1]
    );

    return maxProduct;
};

// test cases
const nums1 = [-10, -10, 5, 2];
const nums2 = [-5,0,3,6];
console.log(maxProductOfThree(nums1)); // 500
console.log(maxProductOfThree(nums2)); // 0
