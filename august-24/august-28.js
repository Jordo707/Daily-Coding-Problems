/*

Given a start word, an end word, and a dictionary of valid words, find the shortest transformation sequence from start to end such that only one letter is changed at each step of the sequence, and each transformed word exists in the dictionary. If there is no possible transformation, return null. Each word in the dictionary have the same length as start and end and is lowercase.

For example, given start = "dog", end = "cat", and dictionary = {"dot", "dop", "dat", "cat"}, return ["dog", "dot", "dat", "cat"].

Given start = "dog", end = "cat", and dictionary = {"dot", "tod", "dat", "dar"}, return null as there is no possible transformation from dog to cat

*/

const shortestTransform = (start, end, dict) => {
    // Convert the dictionary to a Set for O(1) lookup
    const wordSet = new Set(dict);
    if (!wordSet.has(end)) return null;

    // Initialize the queue with the start word and the transformation path
    const queue = [[start, [start]]];
    const visited = new Set();

    while (queue.length > 0) {
        const [currentWord, path] = queue.shift();

        if (currentWord === end) {
            return path;
        }

        for (let i = 0; i < currentWord.length; i++) {
            for (let c = 97; c <= 122; c++) {  // ASCII 'a' to 'z'
                const nextWord = currentWord.slice(0, i) + String.fromCharCode(c) + currentWord.slice(i + 1);

                if (wordSet.has(nextWord) && !visited.has(nextWord)) {
                    visited.add(nextWord);
                    queue.push([nextWord, path.concat(nextWord)]);
                }
            }
        }
    }

    return null;
}

// Test Cases
console.log(shortestTransform('dog','cat',["dot", "dop", "dat", "cat"])); // ["dog", "dot", "dat", "cat"]
console.log(shortestTransform('dog','cat',["dot", "tod", "dat", "dar"])); // null
