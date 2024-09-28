/*

Given a string of parentheses, find the balanced string that can be produced from it using the minimum number of insertions and deletions. If there are multiple solutions, return any of them.

For example, given "(()", you could return "(())". Given "))()(", you could return "()()()()".

*/

const minBalanceParentheses = (s) => {
    let balance = 0;
    let openInsertions = 0;
    let result = '';

    for (const char of s) {
      if (char === '(') {
        balance++;
        result += char;
      } else if (char === ')') {
        if (balance > 0) {
          balance--;
          result += char;
        } else {
          // If we encounter an unmatched closing parenthesis, add an opening before it.
          openInsertions++;
          result = '(' + result + ')';
        }
      }
    }

    // Append the necessary closing parentheses for any unmatched opening ones.
    return result + ')'.repeat(balance);
  };

  // Test cases
  console.log(minBalanceParentheses("(()")); // Output: "(())"
  console.log(minBalanceParentheses("))()(")); // Output: "()()()()"
