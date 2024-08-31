/*

Given a string s and a list of words words, where each word is the same length, find all starting indices of substrings in s that is a concatenation of every word in words exactly once.

For example, given s = "dogcatcatcodecatdog" and words = ["cat", "dog"], return [0, 13], since "dogcat" starts at index 0 and "catdog" starts at index 13.

Given s = "barfoobazbitbyte" and words = ["dog", "cat"], return [] since there are no substrings composed of "dog" and "cat" in s.

The order of the indices does not matter.

*/

const startIndeces = (str, list) => {
    if (list.length === 0 || str.length === 0) return [];

    const wordLength = list[0].length;
    const totalLength = wordLength * list.length;
    const result = [];

    const wordCount = {};
    for (const word of list) {
      wordCount[word] = (wordCount[word] || 0) + 1;
    }

    for (let i = 0; i <= str.length - totalLength; i++) {
      const seenWords = {};
      let j = 0;
      while (j < list.length) {
        const wordIndex = i + j * wordLength;
        const word = str.substring(wordIndex, wordIndex + wordLength);
        if (!wordCount[word]) {
          break;
        }
        seenWords[word] = (seenWords[word] || 0) + 1;
        if (seenWords[word] > wordCount[word]) {
          break;
        }
        j++;
      }
      if (j === list.length) {
        result.push(i);
      }
    }

    return result;
  }

  // Test Cases
  let s = "dogcatcatcodecatdog";
  let words = ['cat','dog'];
  console.log(startIndeces(s, words)); // [0,13]

  s = "barfoobazbitbyte";
  words = ["dog", "cat"];
  console.log(startIndeces(s, words)); // []
