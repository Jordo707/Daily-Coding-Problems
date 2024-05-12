/*
Implement integer exponentiation. That is, implement the pow(x, y) function, where x and y are integers and returns x^y.

Do this faster than the naive method of repeated multiplication.

For example, pow(2, 10) should return 1024
*/

function pow(x: number, y: number): number {
    if (y === 0) return 1;
    if (y < 0) return 1 / pow(x, -y);

    if (y % 2 === 0) {
        const half = pow(x, y / 2);
        return half * half;
    } else {
        return x * pow(x, y - 1);
    }
}

// Test cases
console.log(pow(2, 10));  // expect 1024
console.log(pow(3, 5));   // expect 243
console.log(pow(2, -2));  // expect 0.25
console.log(pow(2, 0));   // expect 1
