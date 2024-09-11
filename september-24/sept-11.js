/*

Given n numbers, find the greatest common denominator between them

*/

const gcd = (a, b) => {
    while (b !== 0) {
      [a, b] = [b, a % b];
    }
    return a;
  };

  const findGCD = (arr) => arr.reduce((acc, num) => gcd(acc, num));

// Test Cases
console.log(findGCD([42, 56, 14])); // 14
