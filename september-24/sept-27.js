/*

Let X be a set of n intervals on the real line. We say that a set of points P "stabs" X if every interval in X contains at least one point in P. Compute the smallest set of points that stabs X.

For example, given the intervals [(1, 4), (4, 5), (7, 9), (9, 12)], you should return [4, 9].

*/

const findStabbingPoints = (intervals) => {
    if (!intervals || intervals.length === 0) return [];

    // Sort the intervals by their ending points (second value of each pair)
    intervals.sort((a, b) => a[1] - b[1]);

    let stabbingPoints = [];
    let lastPoint = null;

    // Iterate through each interval
    intervals.forEach(([start, end]) => {
      // If the last chosen point doesn't "stab" this interval
      if (lastPoint === null || lastPoint < start) {
        // Choose the end point of this interval as the new stabbing point
        lastPoint = end;
        stabbingPoints.push(lastPoint);
      }
    });

    return stabbingPoints;
  };

  // Test Cases
  const intervals = [[1, 4], [4, 5], [7, 9], [9, 12]];
  console.log(findStabbingPoints(intervals)); //[4, 9]
