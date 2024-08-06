/*

Gray code is a binary code where each successive value differ in only one bit, as well as when wrapping around. Gray code is common in hardware so that we don't see temporary spurious values during transitions.

Given a number of bits n, generate a possible gray code for it.

For example, for n = 2, one gray code would be [00, 01, 11, 10].

*/

const generateGrayCode = n => {
    // account for zero iterations
    if (n <= 0) return [];

    // start with the base case for n = 1
    let grayCode = ['0','1'];

    // iterate to generate gray code for n bits
    for (let i = 2; i <= n; i++) {
        // create new array to hold the gray code sequence
        let newGrayCode = [];

        // add '0' to the beginning of each code in the current sequence
        grayCode.forEach(code => newGrayCode.push('0' + code));

        // add 1 to the beginning of each code in the current sequence in reverse order
        grayCode.slice().reverse().forEach(code => newGrayCode.push('1' + code));

        // update graycode
        grayCode = newGrayCode;
    }
    return grayCode;
}

// convert binary string to integer
const binaryStringToIntArray = grayCode => grayCode.map(code => parseInt(code, 2));

// Test Case
const code1 = generateGrayCode(2);
console.log(code1); // expect ['00', '01', '11', '10']
console.log(binaryStringToIntArray(code1)); // expect [0, 1 ,3, 2]
