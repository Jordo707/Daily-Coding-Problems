/*
Given a string of parentheses, write a function to compute the minimum number of parentheses to be removed to make the string valid (i.e. each open parenthesis is eventually closed).

For example, given the string "()())()", you should return 1. Given the string ")(", you should return 2, since we must remove all of them.
*/

const remover = str => {
    let openCount = 0;
    let closeCount = 0;

    for(let char of str) {
        if(char == '(') {
            openCount++;
        } else if(char == ')') {
            if(openCount > 0) {
                openCount--;
            } else {
                closeCount++;
            }
        }
    }
    return openCount + closeCount;
}

// Test Cases
console.log(remover('()())()')); // Expect 1
console.log(remover(')(')); // Expect 2
console.log(remover(')))(((')); // Expect 6
