/*
This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].
*/

const arr1 = [1,2,3,4,5]
const arr2 = [3,2,1]

const withDiv = (arr) => {
    // initialize empty return array
    const returnArr = [];

    // find product of all array elements
    let product = 1;
    for(let i=0;i<arr.length;i++) {
        product = product * arr[i]
    }

    // loop through the array, dividing the product by each element before entering it into the return array
    for(let i=0;i<arr.length;i++) {
        el = product/arr[i];
        returnArr.push(el)
    }

    // return the return array
    return returnArr
}

console.log("With Division")

console.log(withDiv(arr1))
// expect [120, 60, 40, 30, 24]

console.log(withDiv(arr2))
// expect [2, 3, 6]

// Follow-up; what if you can't use division?

const withoutDiv = (arr) => {
    // initialize two arrays filled with 1s and an empty return array
    const leftProducts = new Array(arr.length).fill(1);
    const rightProducts = new Array(arr.length).fill(1);
    const returnArr = new Array(arr.length);

    // Populate leftProducts
    for (let i = 1; i < arr.length; i++) {
        leftProducts[i] = arr[i - 1] * leftProducts[i - 1];
    }

    // Populate rightProducts
    for (let i = arr.length - 2; i >= 0; i--) {
        rightProducts[i] = arr[i + 1] * rightProducts[i + 1];
    }

    // Multiply left and right products for the final result
    for (let i = 0; i < arr.length; i++) {
        returnArr[i] = leftProducts[i] * rightProducts[i];
    }

    return returnArr;
}

console.log('Without Division')

console.log(withoutDiv(arr1))
// expect [120, 60, 40, 30, 24]

console.log(withoutDiv(arr2))
// expect [2, 3, 6]
