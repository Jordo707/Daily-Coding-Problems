// You are given an M by N matrix consisting of booleans that represents a board. Each True boolean represents a wall. Each False boolean represents a tile you can walk on.

const { DATEONLY } = require("sequelize");

// Given this matrix, a start coordinate, and an end coordinate, return the minimum number of steps required to reach the end coordinate from the start. If there is no possible path, then return null. You can move up, left, down, and right. You cannot move through walls. You cannot wrap around the edges of the board.

// For example, given the following board:

// [[f, f, f, f],
// [t, t, f, t],
// [f, f, f, f],
// [f, f, f, f]]
// and start = (3, 0) (bottom left) and end = (0, 0) (top left), the minimum number of steps required to reach the end is 7, since we would need to go through (1, 2) because there is a wall everywhere else on the second row.

const minSteps = (matrix, start, end) => {
    const m = matrix.length;
    const n = matrix[0].length;
    const visited = Array.from({length:m}, () => Array(n).fill(false));
    const queue = [[...start,0]];

    // establish directions
    const directions = [[-1, 0], [0, -1], [1, 0], [0, 1]];

    while (queue.length) {
        const [x, y, steps] = queue.shift();

        // if we reach the end, say how many steps it took
        if (x === end[0] && y === end[1]) return steps;

        // mark the spot as having been visited
        visited[x][y] = true;

        // check all four directions
        for (let [dx, dy] of directions) {
            const newX = x + dx;
            const newY = y + dy;

            // ensure that the cells are accessable and have not already been visited.
            if (newX >= 0 && newX < m && newY >= 0 && newY < n && !matrix[newX][newY] && !visited[newX][newY]) {
                queue.push([newX, newY, steps + 1]);
            }
        }
    }

    // if no path is found, return null
    return null;
}

// test case
const board = [
    [false, false, false, false],
    [true, true, false, true],
    [false, false, false, false],
    [false, false, false, false]
];
const start = [3, 0];
const end = [0, 0];

console.log(minSteps(board, start, end)); // expect 7
