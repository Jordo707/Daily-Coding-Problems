/*

Write a function that rotates a list by k elements. For example, [1, 2, 3, 4, 5, 6] rotated by two becomes [3, 4, 5, 6, 1, 2]. Try solving this without creating a copy of the list. How many swap or move operations do you need?

*/

// const rotate = (arr, swaps) => {
//     for(let i = 0;i < swaps; i++) {
//         let el = arr.shift()
//         arr.push(el)
//     }

//     return arr
// }

// // Test case
// const arr1 = [1,2,3,4,5,6]
// console.log(rotate(arr1,2)) // expect [3,4,5,6,1,2]

const rotateInPlace = (arr, k) => {
    k = k % arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, arr.length - k - 1);
    reverse(arr, arr.length - k, arr.length - 1);
}

const reverse = (arr, start, end) => {
    while (start < end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}

// Test case
arr1 = [1,2,3,4,5,6]
rotateInPlace(arr1, 2)
console.log(arr1) // expect [3,4,5,6,1,2]
