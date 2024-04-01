// There exists a staircase with N steps, and you can climb up either 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

// For example, if N is 4, then there are 5 unique ways:

// 1, 1, 1, 1
// 2, 1, 1
// 1, 2, 1
// 1, 1, 2
// 2, 2
// What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time.

const step2Ways = (N) => {
    // Get trivial results out of the way immediately
    if (N === 0 || N === 1) return 1;
    // Initialize previous and current values
    let prev = 1, curr = 1;
    // Calculate the sum of ways to get to to N-1 and N-2
    for (let i = 2; i <= N; i++) {
        let temp = curr;
        curr += prev;
        prev = temp;
    }
    return curr;
}

const stepXWays = (N, X) => {
    // initialize empty array of length N + 1
    let dp = Array(N + 1).fill(0);
    // set first value of array to 1, because there is only one way to stay at the bottom
    dp[0] = 1;
    for (let i = 1; i <= N; i++) {
        for (let x of X) {
            if (i - x >= 0) {
                dp[i] += dp[i - x];
            }
        }
    }
    return dp[N];
}

//test cases

console.log(step2Ways(4)) // Expect 5

console.log(step2Ways(1)) // Expect 1

console.log(step2Ways(3)) // Expect 3

console.log(stepXWays(4,[1,3,5])) // Expect 3
