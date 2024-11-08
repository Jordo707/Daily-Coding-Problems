/*

There are N couples sitting in a row of length 2 * N. They are currently ordered randomly, but would like to rearrange themselves so that each couple's partners can sit side by side.

What is the minimum number of swaps necessary for this to happen?

*/

const minSwapsCouples = row => {
  const n = row.length;
  const pos = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    pos[row[i]] = i;
  }
  let ans = 0;
  for (let i = 0; i < n; i += 2) {
    const pair = row[i] ^ 1;
    if (row[i + 1] !== pair) {
      ans++;
      const idx = pos[pair];
      pos[row[i + 1]] = idx;
      pos[row[idx]] = i + 1;
      [row[i + 1], row[idx]] = [row[idx], row[i + 1]];
    }
  }
  return ans;
};

// Test case
console.log(minSwapsCouples([0, 2, 1, 3])); // 1
console.log(minSwapsCouples([3, 2, 0, 1])); // 0
console.log(minSwapsCouples([5, 4, 2, 6, 3, 1, 0, 7])); // 2
console.log(minSwapsCouples([0, 2, 4, 6, 7, 1, 3, 5])); // 3
