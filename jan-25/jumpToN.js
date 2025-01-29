/*

Starting from 0 on a number line, you would like to make a series of jumps that lead to the integer N.

On the ith jump, you may move exactly i places to the left or right.

Find a path with the fewest number of jumps required to get from 0 to N.

*/

function jumpToN(N) {
    let left = 0;
    let right = 0;
    let i = 1;

    while (left < N || right < N) {
        if (left < N) {
            left += i;
        }
        if (right < N) {
            right += i;
        }
        i++;
    }

    return i - 1;
}

// Test cases

console.log(jumpToN(3)); // 2
console.log(jumpToN(2)); // 3
console.log(jumpToN(1)); // 1
console.log(jumpToN(4)); // 3
