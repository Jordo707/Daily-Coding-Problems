/*
Given a N by M matrix of numbers, print out the matrix in a clockwise spiral.
*/

const right = matrix => {
    let row = matrix.shift();
    while (row.length) {
        console.log(row.shift());
    }
}

const down = matrix => {
    for (let i = 0; i < matrix.length; i++) {
        console.log(matrix[i].pop());
    }
}

const left = matrix => {
    let row = matrix.pop();
    while (row.length) {
        console.log(row.pop());
    }
}

const up = matrix => {
    for (let i = matrix.length - 1; i >= 0; i--) {
        console.log(matrix[i].shift());
    }
}

// Main function
const printMatrix = (matrix) => {
    while (matrix.length) {
        right(matrix);
        if (matrix.length === 0) break;
        down(matrix);
        if (matrix.length === 0) break;
        left(matrix);
        if (matrix.length === 0) break;
        up(matrix);
    }
}

// Example usage
let matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

printMatrix(matrix);
