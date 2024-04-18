// You have an N by N board. Write a function that, given N, returns the number of possible arrangements of the board where N queens can be placed on the board without threatening each other, i.e. no two queens share the same row, column, or diagonal.

const maxQueens = N => {
    let count = 0;

    // Represents the columns where queens are placed
    const columns = new Set();
    // Diagonals where queens are placed
    const diag1 = new Set(); // For '/' diagonals
    const diag2 = new Set(); // For '\' diagonals

    const placeQueen = row => {
        if (row === N) {
            count++; // A valid arrangement found
            return;
        }

        for (let col = 0; col < N; col++) {
            // Check if placing the queen here is valid
            if (columns.has(col) || diag1.has(row + col) || diag2.has(row - col)) {
                continue; // There's a conflict, so skip this column
            }

            // Place the queen
            columns.add(col);
            diag1.add(row + col);
            diag2.add(row - col);

            // Recurse to place the queen in the next row
            placeQueen(row + 1);

            // Backtrack
            columns.delete(col);
            diag1.delete(row + col);
            diag2.delete(row - col);
        }
    }

    // Start placing queens from the first row
    placeQueen(0);

    return count;
}

// test cases
console.log(maxQueens(1)) // expect 1
console.log(maxQueens(2)) // expect 0
console.log(maxQueens(3)) // expect 0
console.log(maxQueens(4)) // expect 2
