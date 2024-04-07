/*
Given a string of round, curly, and square open and closing brackets, return whether the brackets are balanced (well-formed).

For example, given the string "([])[]({})", you should return true.

Given the string "([)]" or "((()", you should return false.
*/

const isBalanced = s => {
    // create empty stack array and define opening and closing brackets
    const stack = [];
    const open = ['(','{','['];
    const close = [')','}',']'];

    for(let char of s) {
        if(open.includes(char)) {
            stack.push(char);
        } else {
            let closeIndex = close.indexOf(char);
            if(closeIndex !== -1) {
                if(!stack.length || open[closeIndex] !== stack.pop()) {
                    return false;
                }
            }
        }
    }
    return stack.length == 0;
}

// test cases
console.log(isBalanced("([])[]({})")); // expect true
console.log(isBalanced("([)]"));       // expect false
console.log(isBalanced("((()"));       // expect false
