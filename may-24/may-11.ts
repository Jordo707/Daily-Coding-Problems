/*
Given a multiset of integers, return whether it can be partitioned into two subsets whose sums are the same.

For example, given the multiset {15, 5, 20, 10, 35, 15, 10}, it would return true, since we can split it up into {15, 5, 10, 15, 10} and {20, 35}, which both add up to 55.

Given the multiset {15, 5, 20, 10, 35}, it would return false, since we can't split it up into two subsets that add up to the same sum.
*/

function canPartition(nums: number[]): boolean {
    let totalSum = nums.reduce((a, b) => a + b, 0);

    // If the total sum is odd, we cannot split it into two equal parts
    if (totalSum % 2 !== 0) return false;

    let target = totalSum / 2;
    let n = nums.length;

    // dp[i] will be true if a subset with sum i can be formed
    let dp: boolean[] = new Array(target + 1).fill(false);
    dp[0] = true;

    // Process each number in the multiset
    for (let num of nums) {
        // Update the dp array from right to left
        for (let j = target; j >= num; j--) {
            dp[j] = dp[j] || dp[j - num];
        }
    }

    return dp[target];
}

// Test cases

console.log(canPartition([15, 5, 20, 10, 35, 15, 10])); // expect true
console.log(canPartition([15, 5, 20, 10, 35])); // expect false
