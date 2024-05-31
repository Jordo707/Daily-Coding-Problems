/*
Given a list of possibly overlapping intervals, return a new list of intervals where all overlapping intervals have been merged.

The input list is not necessarily ordered in any way.

For example, given [(1, 3), (5, 8), (4, 10), (20, 25)], you should return [(1, 3), (4, 10), (20, 25)].
*/
const mergeIntervals = (intervals) => {
    if (intervals.length === 0) return [];

    // Sort the intervals by their starting points
    intervals.sort((a, b) => a[0] - b[0]);

    const merged = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const lastMerged = merged[merged.length - 1];
        const current = intervals[i];

        // Check if there is an overlap
        if (current[0] <= lastMerged[1]) {
            // Merge the intervals
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            // No overlap, add the current interval to the merged list
            merged.push(current);
        }
    }

    return merged;
};

// Example usage:
const intervals = [[1, 3], [5, 8], [4, 10], [20, 25]];
console.log(mergeIntervals(intervals)); // Output: [[1, 3], [4, 10], [20, 25]]

