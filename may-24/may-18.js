/*
On our special chessboard, two bishops attack each other if they share the same diagonal. This includes bishops that have another bishop located between them, i.e. bishops can attack through pieces.

You are given N bishops, represented as (row, column) tuples on a M by M chessboard. Write a function to count the number of pairs of bishops that attack each other. The ordering of the pair doesn't matter: (1, 2) is considered the same as (2, 1).
*/

const countBishopPairs = (bishops, M) => {
    const diagonal1 = {};
    const diagonal2 = {};

    bishops.forEach(([r,c]) => {
        const diag1 = r + c;
        const diag2 = r - c;

        if (diagonal1[diag1] === undefined) {
            diagonal1[diag1] = 0;
        }
        if (diagonal2[diag2] === undefined) {
            diagonal2[diag2] = 0;
        }

        diagonal1[diag1]++;
        diagonal2[diag2]++;
    });

    function countPairs(diagonal) {
        let pairs = 0;
        for (let count of Object.values(diagonal)) {
            if (count > 1) {
                pairs += count * (count - 1) / 2;
            }
        }
        return pairs;
    }

    return countPairs(diagonal1) + countPairs(diagonal2);
}
