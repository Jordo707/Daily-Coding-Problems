class SudokuSolver {
    private grid: number[][];

    constructor(grid: number[][]) {
        this.grid = grid;
    }

    public solve(): boolean {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (this.grid[row][col] === 0) {  // find an empty cell
                    for (let num = 1; num <= 9; num++) {  // consider digits 1 to 9
                        if (this.isValid(row, col, num)) {
                            this.grid[row][col] = num;
                            if (this.solve()) {  // recurse with the new number added
                                return true;
                            }
                            this.grid[row][col] = 0;  // reset on backtrack
                        }
                    }
                    return false;  // trigger backtracking
                }
            }
        }
        return true;  // all cells are correctly filled
    }

    private isValid(row: number, col: number, num: number): boolean {
        // Check the row
        for (let i = 0; i < 9; i++) {
            if (this.grid[row][i] === num) {
                return false;
            }
        }

        // Check the column
        for (let i = 0; i < 9; i++) {
            if (this.grid[i][col] === num) {
                return false;
            }
        }

        // Check the box
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (this.grid[i][j] === num) {
                    return false;
                }
            }
        }

        return true;
    }

    public getGrid(): number[][] {
        return this.grid;
    }
}

// Example usage
const initialGrid = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];
const solver = new SudokuSolver(initialGrid);
if (solver.solve()) {
    console.log('Sudoku solved:');
    console.log(solver.getGrid());
} else {
    console.log('No solution exists');
}
