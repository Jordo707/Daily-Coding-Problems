// Given a string of words delimited by spaces, reverse the words in string. For example, given "hello world here", return "here world hello"

// Follow-up: given a mutable string representation, can you perform this operation in-place?

const stringReverser = str => {
    let words = str.split(' ');

    words.reverse()

    return words.join(' ')
}

console.log(stringReverser('hello world here'))
