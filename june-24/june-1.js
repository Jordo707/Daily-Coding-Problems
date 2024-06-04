/*
Using a read7() method that returns 7 characters from a file, implement readN(n) which reads n characters.

For example, given a file with the content “Hello world”, three read7() returns “Hello w”, “orld” and then “”.
*/

// Mock implementation of read7, which would be provided in the real use case
let fileContent = "Hello world";
let filePointer = 0;

const read7 = () => {
    const chunk = fileContent.substring(filePointer, filePointer + 7);
    filePointer += 7;
    return chunk;
};

const readN = (n) => {
    let result = "";
    let remaining = n;

    while (remaining > 0) {
        const chunk = read7();
        if (chunk.length === 0) {
            break; // End of file reached
        }
        result += chunk.substring(0, remaining);
        remaining -= chunk.length;
    }

    return result;
};

// Test Cases:
console.log(readN(5));  // Output: "Hello"
console.log(readN(7));  // Output: " worl"
console.log(readN(5));  // Output: "d"
console.log(readN(5));  // Output: ""
