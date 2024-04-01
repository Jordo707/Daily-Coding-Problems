// Implement an autocomplete system. That is, given a query string s and a set of all possible query strings, return all strings in the set that have s as a prefix.

// For example, given the query string de and the set of strings [dog, deer, deal], return [deer, deal].

// Hint: Try preprocessing the dictionary into a more efficient data structure to speed up queries.

const autoComplete = (s, arr) => {
    // create empty return array
    const retArr = [];

    // cycle through arr, if arr[i] is a string with a prefix of s, push it into retArr
    for (let i=0;i<arr.length;i++) {
        if (arr[i].startsWith(s)) {
            retArr.push(arr[i])
        }
    }

    // return retArr
    return retArr
}

// test cases
const arr1 = ['dog', 'deer', 'deal']

console.log(autoComplete('de', arr1)) // expect ['deer', 'deal']
