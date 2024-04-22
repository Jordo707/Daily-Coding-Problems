/*

Given a list of integers S and a target number k, write a function that returns a subset of S that adds up to k. If such a subset cannot be made, then return null.

Integers can appear more than once in the list. You may assume all numbers in the list are positive.

For example, given S = [12, 1, 61, 5, 9, 2] and k = 24, return [12, 9, 2, 1] since it sums up to 24.

*/

function findSubsetSum(S, k) {
    // Helper function to explore subsets
    function backtrack(index, current, total) {
        // If the total equals the target, return the current subset
        if (total === k) {
            return current.slice();
        }
        // If total exceeds the target or we have considered all items, return null
        if (total > k || index >= S.length) {
            return null;
        }
        // Include the current number and move to the next index
        current.push(S[index]);
        let result = backtrack(index + 1, current, total + S[index]);
        if (result) return result;
        // Exclude the current number and move to the next index
        current.pop();
        return backtrack(index + 1, current, total);
    }

    // Start backtracking from index 0 with an empty subset and a total of 0
    return backtrack(0, [], 0);
}

// Test case
const S = [12, 1, 61, 5, 9, 2];
const k = 24;
console.log(findSubsetSum(S, k)); // expect [12, 1, 9, 2]
console.log(findSubsetSum(S, 14)) // expect [12, 2]
console.log(findSubsetSum(S, 6)) // expect [1, 5]
