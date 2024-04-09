// Run-length encoding is a fast and simple method of encoding strings. The basic idea is to represent repeated successive characters as a single count and character. For example, the string "AAAABBBCCDAA" would be encoded as "4A3B2C1D2A".

// Implement run-length encoding and decoding. You can assume the string to be encoded have no digits and consists solely of alphabetic characters. You can assume the string to be decoded is valid.

const lengthEncoder = str => {
    // create return string and count, initialized at 1
    let encoded = '';
    let count = 1;

    // loop through str, if the next element of the string matches, increase count, if not, add the count and the element to encoded string and reset count to 1
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            encoded += count + str[i];
            count = 1;
        }
    }
    return encoded;
}

const lengthDecoder = str => {
    // initialize decoded string and count
    let decoded = '';
    let count = '';

    for (let char of str) {
        if (!isNaN(char)) {
            count += char;
        } else {
            decoded += char.repeat(parseInt(count));
            count = '';
        }
    }

    return decoded;
}

console.log(lengthEncoder('AAAABBBCCDAA')); // expect 4A3B2C1D2A
console.log(lengthDecoder('5A2B3C1A')); // expect AAAAABBCCCA
