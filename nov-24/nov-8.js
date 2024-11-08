/*

In academia, the h-index is a metric used to calculate the impact of a researcher's papers. It is calculated as follows:

A researcher has index h if at least h of her N papers have h citations each. If there are multiple h satisfying this formula, the maximum is chosen.

For example, suppose N = 5, and the respective citations of each paper are [4, 3, 0, 1, 5]. Then the h-index would be 3, since the researcher has 3 papers with at least 3 citations.

Given a list of paper citations of a researcher, calculate their h-index.

*/

const hIndex = citations => {
  citations.sort((a, b) => b - a);
  let h = 0;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] >= i + 1) {
      h = i + 1;
    }
  }
  return h;
}

// Test cases
console.log(hIndex([4, 3, 0, 1, 5])); // 3
console.log(hIndex([6, 5, 3, 1, 0])); // 3
console.log(hIndex([100])); // 1
console.log(hIndex([0, 0, 0, 0, 0])); // 0

