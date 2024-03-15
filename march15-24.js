/*
Given an array of integers, find the first missing positive integer in linear time and constant space. In other words, find the lowest positive integer that does not exist in the array. The array can contain duplicates and negative numbers as well.

For example, the input [3, 4, -1, 1] should give 2. The input [1, 2, 0] should give 3.

You can modify the input array in-place.
*/

const lowestMissing = (arr) => {
    const swap = (i, j) => {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      };

      let n = arr.length;
      for (let i = 0; i < n; ++i) {
        // Swap elements arr[i] and arr[arr[i] - 1] only if the current element is in the range [1, n]
        // and it's not already in the correct position
        while (arr[i] > 0 && arr[i] <= n && arr[arr[i] - 1] !== arr[i]) {
          swap(i, arr[i] - 1);
        }
      }

      for (let i = 0; i < n; ++i) {
        if (arr[i] !== i + 1) {
          return i + 1;
        }
      }

      // If the array contains all elements from 1 to n, then the missing number is n + 1
      return n + 1;
}

arr1 = [3, 4, -1, 1];

arr2 = [1, 2, 0];

console.log(lowestMissing(arr1));
// expect 2

console.log(lowestMissing(arr2));
// expect 3
