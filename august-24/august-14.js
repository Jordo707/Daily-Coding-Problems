/*

Given a positive integer n, find the smallest number of squared integers which sum to n.

*/

const smallestSquareSum = n => {
    const dp = Array(n + 1).fill(Infinity);
    dp[0] = 0;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j * j <= i; j++) {
            dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
        }
    }

    return dp[n];
}

// Test Case
console.log(smallestSquareSum(27)); // 3
console.log(smallestSquareSum(13)); // 2
