/*
You are given an N by M 2D matrix of lowercase letters. Determine the minimum number of columns that can be removed to ensure that each row is ordered from top to bottom lexicographically. That is, the letter at each column is lexicographically later as you go down each row. It does not matter whether each row itself is ordered lexicographically.

For example, given the following table:

cba
daf
ghi
This is not ordered because of the a in the center. We can remove the second column to make it ordered:

ca
df
gi
So your function should return 1, since we only needed to remove 1 column.

As another example, given the following table:

abcdef
Your function should return 0, since the rows are already ordered (there's only one row).

As another example, given the following table:

zyx
wvu
tsr
Your function should return 3, since we would need to remove all the columns to order it.
*/

const minDeletionSize = (strs: string[]): number => {
    if (strs.length === 0) return 0;

    const numRows = strs.length;
    const numCols = strs[0].length;
    let deletions = 0;

    for (let col = 0; col < numCols; col++) {
        for (let row = 1; row < numRows; row++) {
            if (strs[row][col] < strs[row - 1][col]) {
                deletions++;
                break;
            }
        }
    }

    return deletions;
};

// Example usage:
const strs1 = ["cba", "daf", "ghi"];
console.log(minDeletionSize(strs1)); // Output: 1

const strs2 = ["abcdef"];
console.log(minDeletionSize(strs2)); // Output: 0

const strs3 = ["zyx", "wvu", "tsr"];
console.log(minDeletionSize(strs3)); // Output: 3
