/*

Given an N by M matrix consisting only of 1's and 0's, find the largest rectangle containing only 1's and return its area.

*/

const largestRectangleArea = (matrix) => {
    if (matrix.length === 0) return 0;

    const N = matrix.length;
    const M = matrix[0].length;
    const heights = new Array(M).fill(0);
    let maxArea = 0;

    for (let i = 0; i < N; i++) {
        for (let j = 0; j < M; j++) {
            heights[j] = matrix[i][j] === 0 ? 0 : heights[j] + 1;
        }
        maxArea = Math.max(maxArea, largestRectangleInHistogram(heights));
    }

    return maxArea;
};

const largestRectangleInHistogram = (heights) => {
    const stack = [];
    let maxArea = 0;
    heights.push(0); 

    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            const height = heights[stack.pop()];
            const width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }

    heights.pop();
    return maxArea;
};

// Test cases
const m1 = [[1, 0, 0, 0],
            [1, 0, 1, 1],
            [1, 0, 1, 1],
            [0, 1, 0, 0]]
console.log(largestRectangleArea(m1)) // Expect 4
