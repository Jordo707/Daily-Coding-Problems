/*

You are given an N by M matrix of 0s and 1s. Starting from the top left corner, how many ways are there to reach the bottom right corner?

You can only move right and down. 0 represents an empty space while 1 represents a wall you cannot walk through.

*/

const numPaths = matrix => {
    const n = matrix.length;
    const m = matrix[0].length;

    // Initialize dp array with 0
    const dp = Array.from({ length: n }, () => Array(m).fill(0));

    // If the starting point is a wall, return 0
    if (matrix[0][0] === 1) return 0;

    // Start point
    dp[0][0] = 1;

    // Fill dp table
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (matrix[i][j] === 1) {
                dp[i][j] = 0; // Can't go through walls
            } else {
                if (i > 0) dp[i][j] += dp[i - 1][j]; // From above
                if (j > 0) dp[i][j] += dp[i][j - 1]; // From left
            }
        }
    }

    // Return the number of ways to reach the bottom-right corner
    return dp[n - 1][m - 1];
}

// Test Cases
const matrix1 = [[0, 0, 1],
                 [0, 0, 1],
                 [1, 0, 0]]

console.log(numPaths(matrix1)); // 2

const matrix2 = [[1, 0, 0],
                 [0, 0, 0],
                 [0, 0, 0]];

console.log(numPaths(matrix2)); // 0

const matrix3 = [[0, 0, 0],
                 [1, 1, 1],
                 [0, 0, 0]];

console.log(numPaths(matrix3)); // 0

const matrix4 = [[0]];

console.log(numPaths(matrix4)); // 1

const matrix6 = [[0, 0, 0, 0]];

console.log(numPaths(matrix6)); // 1

const matrix7 = [[0, 0, 0, 0],
                 [0, 1, 0, 0],
                 [0, 0, 0, 1],
                 [0, 1, 0, 0]];

console.log(numPaths(matrix7)); // 2

const matrix9 = [[0, 0, 0],
                 [0, 0, 0],
                 [0, 0, 0]];

console.log(numPaths(matrix9)); // 6
