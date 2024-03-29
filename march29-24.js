// Given an array of integers and a number k, where 1 <= k <= length of the array, compute the maximum values of each subarray of length k.

// For example, given array = [10, 5, 2, 7, 8, 7] and k = 3, we should get: [10, 7, 8, 8], since:

// 10 = max(10, 5, 2)
// 7 = max(5, 2, 7)
// 8 = max(2, 7, 8)
// 8 = max(7, 8, 7)
// Do this in O(n) time and O(k) space. You can modify the input array in-place and you do not need to store the results. You can simply print them out as you compute them.

const subArrayMax = (k, arr) => {
    // create deque array to store indeces
    let deque = [];
    for (let i = 0; i< arr.length; i++) {
        // Remove indeces outside of current window
        while (deque.length > 0 && deque[0] < i-k + 1) {
            deque.shift();
        }
        // Remove all elements smaller than the current element from deque
        while (deque.length > 0 && arr[deque[deque.length - 1]] < arr[i]) {
            deque.pop();
        }
        // Add the current index deque
        deque.push(i);
        // Once the first window is traversed, print the max of each window
        if (i >= k-1) {
            console.log(arr[deque[0]]);
        }
    }
}

// Test cases
subArrayMax(3, [10, 5, 2, 7, 8, 7]) // Expect 10, 7, 8, 8
console.log('--------------------------')
subArrayMax(2, [3, 6, 8, 2, 5]) // Expect 6, 8, 8, 5
console.log('--------------------------')
subArrayMax(4, [8, 3, 5, 4, 2, 9, 8]) // Expect 9, 5, 9, 9
