// The power set of a set is the set of all its subsets. Write a function that, given a set, generates its power set.

// For example, given the set [1, 2, 3}, it should return [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]]

const powerSet = (set) => {
    // The number of subsets of a set with n elements is 2^n.
    const totalSubsets = 2 ** set.length
    const powerSet = [];

    for (let i = 0; i < totalSubsets; i++) {
        const subset = [];
        for (let j = 0; j < set.length; j++) {
        // Check if the j-th bit of i is set
            if (i & (1 << j)) {
                subset.push(set[j]);
            }
        }
        // Add the subset to the power set
        powerSet.push(subset);
    }
  return powerSet;
}


console.log(powerSet([1,2,3]))
