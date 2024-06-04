/*
Given three 32-bit integers x, y, and b, return x if b is 1 and y if b is 0, using only mathematical or bit operations. You can assume b can only be 1 or 0.
*/

const select = (x, y, b) => {
    // Create a mask based on the value of b
    // If b is 1, mask is all 1's (binary: 111...111)
    // If b is 0, mask is all 0's (binary: 000...000)
    const mask = -b; // When b is 1, -b is -1 which is all 1's in binary (2's complement)
                     // When b is 0, -b is 0 which is all 0's in binary

    // Use the mask to select between x and y
    // If mask is all 1's, it will select x
    // If mask is all 0's, it will select y
    return (x & mask) | (y & ~mask);
};

// Test Cases
console.log(select(10, 20, 1)); // Expect 10
console.log(select(10, 20, 0)); // Expect 20
