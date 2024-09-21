/*

You are given an array of nonnegative integers. Let's say you start at the beginning of the array and are trying to advance to the end. You can advance at most, the number of steps that you're currently on. Determine whether you can get to the end of the array.

*/

const stepsToEnd = arr => {
    let farthest = 0;

    for (let i = 0; i < arr.length; i++) {
        // If current index exceeds the farthest reachable index, return false
        if (i > farthest) {
            return false;
        }
        // Update the farthest reachable index
        farthest = Math.max(farthest, i + arr[i]);

        // If we can reach or surpass the last index, return true
        if (farthest >= arr.length - 1) {
            return true;
        }
    }

    return false;
}

// Test Cases
console.log(stepsToEnd([1, 3, 1, 2, 0, 1])); // True
console.log(stepsToEnd([1, 2, 1, 0, 0])); // False
