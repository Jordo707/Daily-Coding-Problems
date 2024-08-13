/*

Given a list of elements, find the majority element, which appears more than half the time (> floor(len(lst) / 2.0)).

You can assume that such element exists.

For example, given [1, 2, 1, 1, 3, 4, 0], return 1.

*/

const majorityElement = arr => {
    const len = arr.length;
    const obj = {};

    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if(obj[el]) {
            obj[el]++;
        }
        else {
            obj[el] = 1;
        }
    }
    for (let key of Object.keys(obj)) {
        if (obj[key] > Math.floor(len/2)) {
            return Number(key);
        }
    }
}

// Test Cases
console.log(majorityElement([2, 3, 2, 4, 2, 3, 2, 4, 2, 2])); // 2
console.log(majorityElement([1, 5, 5, 4, 3, 5, 5])); // 5
