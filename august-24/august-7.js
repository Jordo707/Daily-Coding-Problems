/*

Given a list of numbers L, implement a method sum(i, j) which returns the sum from the sublist L[i:j] (including i, excluding j).

For example, given L = [1, 2, 3, 4, 5], sum(1, 3) should return sum([2, 3]), which is 5.

You can assume that you can do some pre-processing. sum() should be optimized over the pre-processing step.

*/

class SublistSum {
    constructor(L) {
        this.prefixSums = [0];
        for (let num of L) {
            this.prefixSums.push(this.prefixSums[this.prefixSums.length - 1] + num);
        }
    }

    sum(i, j) {
        return this.prefixSums[j] - this.prefixSums[i];
    }
}

// Test Cases
const L = [1, 2, 3, 4, 5];
const sublistSum = new SublistSum(L);
console.log(sublistSum.sum(1, 3));  // Expect 5
console.log(sublistSum.sum(0, 5));  // Expect 15
console.log(sublistSum.sum(2, 4));  // Expect 7
