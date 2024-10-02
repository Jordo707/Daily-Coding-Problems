/*

Given an integer, find the next permutation of it in absolute order. For example, given 48975, the next permutation would be 49578.

*/

const nextPerm = num => {
    // Step 1: Convert the number to an array of digits
    const digits = num.toString().split('').map(Number);

    // Step 2: Find the first decreasing element from the end
    let i = digits.length - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--;
    }

    // If there is no such element, it means we are at the last permutation
    if (i < 0) return num;

    // Step 3: Find the element just larger than the element at index i
    let j = digits.length - 1;
    while (digits[j] <= digits[i]) {
        j--;
    }

    // Step 4: Swap the elements at index i and j
    [digits[i], digits[j]] = [digits[j], digits[i]];

    // Step 5: Reverse the elements after index i
    const left = digits.slice(0, i + 1);
    const right = digits.slice(i + 1).reverse();

    // Combine and convert back to a number
    return parseInt([...left, ...right].join(''), 10);
}

// Test Case
console.log(nextPerm(48975)); // 49578
