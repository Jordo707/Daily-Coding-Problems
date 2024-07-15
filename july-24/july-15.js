/*

Write a function that rotates a list by k elements. For example, [1, 2, 3, 4, 5, 6] rotated by two becomes [3, 4, 5, 6, 1, 2]. Try solving this without creating a copy of the list. How many swap or move operations do you need?

*/

const rotate = (arr, swaps) => {
    for(let i = 0;i < swaps; i++) {
        let el = arr.shift()
        arr.push(el)
    }

    return arr
}

// Test case
const arr1 = [1,2,3,4,5,6]
console.log(rotate(arr1,2)) // expect [3,4,5,6,1,2]
