/*

Given a sorted list of integers, square the elements and give the output in sorted order.

For example, given [-9, -2, 0, 2, 3], return [0, 4, 4, 9, 81].

*/

const squareSort = arr => {
    for(let i = 0; i < arr.length; i++) {
        arr[i]*=arr[i]
    }
    arr = arr.sort((a, b) => a-b)
    return arr;
}

// Test case
const arr1 = [-9, -2, 0, 2, 3];

console.log(squareSort(arr1)) // expect [0, 4, 4, 9, 81]
