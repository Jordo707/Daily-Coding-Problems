/*
A number is considered perfect if its digits sum up to exactly 10.

Given a positive integer n, return the n-th perfect number.

For example, given 1, you should return 19. Given 2, you should return 28.
*/

const digitSum = (num) => {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
};

const nthPerfectNumber = (n) => {
    let count = 0;
    let num = 18; // Start checking from 19, since 19 is the first perfect number

    while (count < n) {
        num++;
        if (digitSum(num) === 10) {
            count++;
        }
    }

    return num;
};

// Example usage
console.log(nthPerfectNumber(1)); // Output: 19
console.log(nthPerfectNumber(2)); // Output: 28
console.log(nthPerfectNumber(3)); // Output: 37
console.log(nthPerfectNumber(9)); // Output: 91
