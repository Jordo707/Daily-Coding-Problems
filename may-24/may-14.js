/*

*/
const maxKnightTours = (N) => {
    // Directions a knight can move
    const moves = [
        [2, 1], [1, 2], [-1, 2], [-2, 1],
        [-2, -1], [-1, -2], [1, -2], [2, -1]
    ];

    let tourCount = 0;

    function isSafe(x, y, board) {
        return (x >= 0 && x < N && y >= 0 && y < N && board[x][y] === -1);
    }

    function solve(x, y, movei, board) {
        if (movei === N * N) {
            tourCount++;
            return true;
        }

        for (let i = 0; i < 8; i++) {
            let nextX = x + moves[i][0];
            let nextY = y + moves[i][1];

            if (isSafe(nextX, nextY, board)) {
                board[nextX][nextY] = movei;
                solve(nextX, nextY, movei + 1, board);
                board[nextX][nextY] = -1; // Backtracking
            }
        }

        return false;
    }

    let board = Array.from({ length: N }, () => Array(N).fill(-1));

    // Start from the first cell
    board[0][0] = 0;

    solve(0, 0, 1, board);

    return tourCount;
}

// test cases
console.log(maxKnightTours(5)) // 304
console.log(maxKnightTours(4))
