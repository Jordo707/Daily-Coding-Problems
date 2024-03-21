// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?

const largestNASum = (arr) => {
    let includePrev = 0; // Max sum including the previous element
    let excludePrev = 0; // Max sum excluding the previous element

    for (let num of arr) {
        // New max excluding the current number is either the previous max including it
        // or the previous max excluding it, whichever is larger.
        let newExclude = Math.max(excludePrev, includePrev);

        // New max including the current number is the previous max excluding the
        // current number plus the current number itself.
        includePrev = excludePrev + num;

        // Update the excludePrev to the new max exclude value.
        excludePrev = newExclude;
    }

    // The maximum sum is the max of includePrev and excludePrev.
    return Math.max(includePrev, excludePrev);
}

// Test cases
console.log(largestNASum([2, 4, 6, 2, 5])); // expect 13
console.log(largestNASum([5, 1, 1, 5])); // expect 10
