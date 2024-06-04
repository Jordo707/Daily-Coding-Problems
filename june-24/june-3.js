/*
Given a matrix of 1s and 0s, return the number of "islands" in the matrix. A 1 represents land and 0 represents water, so an island is a group of 1s that are neighboring whose perimeter is surrounded by water.
*/

const islandCounter = (matrix) => {
    // weed out junk matrices
    if(!matrix || !matrix.length) return null;

    const numRows = matrix.length;
    const numCols = matrix[0].length;
    let count = 0;

    // Utilize a depth-first search
    const dfs = (row, col) => {
        if(row < 0 || col < 0 || row >= numRows || col >= numCols || matrix[row][col] == 0) {
           return;
        }

        // Mark the current cell as visited
        matrix[row][col] = '0';

        // Explore each neighboring cell
        dfs(row - 1, col);
        dfs(row + 1, col);
        dfs(row, col - 1);
        dfs(row, col + 1);
    };

    for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
            if(matrix[row][col] == 1) {
                count++;
                dfs(row, col);
            }
        }
    }

    return count
}

// Test Case
// const matrix1 = [
//     ['1', '0', '0', '0', '0'],
//     ['0', '0', '1', '1', '0'],
//     ['0', '1', '1', '0', '0'],
//     ['0', '0', '0', '0', '0'],
//     ['1', '0', '0', '1', '1'],
//     ['1', '1', '0', '0', '1']
// ]

const matrix1 = [
    [1,0,0,0,0],
    [0,0,1,1,0],
    [0,1,1,0,0],
    [0,0,0,0,0],
    [1,0,0,1,1],
    [1,1,0,0,1]
]

console.log(islandCounter(matrix1)) // Expect 4
