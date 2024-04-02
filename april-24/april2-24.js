// Given a dictionary of words and a string made up of those words (no spaces), return the original sentence in a list. If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

// For example, given the set of words 'quick', 'brown', 'the', 'fox', and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

// Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", return either ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].

const stringSplitter = (str, set) => {
    // initialize return array and set tempStr variable
    let ret = [];
    let tempStr = str

    // While tempStr has length, iterate through the set of words, if tempStr starts with a given word in the set, cut it out of tempStr and push it to ret
    while(tempStr.length) {
        let found = false;
        for (let word of set) {
            if (tempStr.startsWith(word)) {
                ret.push(word);
                tempStr = tempStr.slice(word.length);
                found = true;
                break;
            }
        }
        if (!found) return null;
    }
    return ret.length ? ret : null;
}

// test cases
console.log(stringSplitter('bedbathandbeyond', ['bed', 'bath','and', 'beyond', 'bedbath']));

console.log(stringSplitter('thequickbrownfox', ['quick', 'brown', 'the', 'fox']));
