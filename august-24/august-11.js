/*

Find an efficient algorithm to find the smallest distance (measured in number of words) between any two given words in a string.

For example, given words "hello", and "world" and a text content of "dog cat hello cat dog dog hello cat world", return 1 because there's only one word "cat" in between the two words.

*/

const wordDistance = (start, end, context) => {
    const words = context.split(" ");
    let minDistance = Infinity;
    let prevIndex = -1;

    for (let i = 0; i < words.length; i++) {
        if (words[i] === start || words[i] === end) {
            if (prevIndex !== -1 && words[i] !== words[prevIndex]) {
                minDistance = Math.min(minDistance, i - prevIndex - 1);
            }
            prevIndex = i;
        }
    }

    return minDistance;
}

// Test Case
console.log(wordDistance('hello', 'world', 'dog cat hello cat dog dog hello cat world')); // Expect 1
console.log(wordDistance('the', 'frog', 'the quick gray fox jumped over the lazy frog')); // Expect 1
console.log(wordDistance('she', 'shore', 'she sells sea shells by the sea shore')) // Expect 6
console.log(wordDistance('she', 'shore', 'she sells sea shells by the sea shore she sells sea shells by the sea shore')) // Expect 0
