/*

Given a string, split it into as few strings as possible such that each string is a palindrome.

For example, given the input string racecarannakayak, return ["racecar", "anna", "kayak"].

Given the input string abc, return ["a", "b", "c"].

*/

// Helper function to detect palindromes
const isPalindrome = (str, left, right) => {
    while (left < right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
};

const fewestPalindromes = str => {
    const result = [];
    const n = str.length;

    const dfs = (start, current) => {
        if (start === n) {
            if (!result.length || current.length < result.length) {
                result.length = 0;
                result.push(...current);
            }
            return;
        }

        for (let end = start; end < n; end++) {
            if (isPalindrome(str, start, end)) {
                current.push(str.slice(start, end + 1));
                dfs(end + 1, current);
                current.pop();
            }
        }
    };

    dfs(0, []);
    return result;
}

console.log(fewestPalindromes('racecarannakayak')); //["racecar","anna","kayak"]
console.log(fewestPalindromes('abc')); // ["a","b","c"]
