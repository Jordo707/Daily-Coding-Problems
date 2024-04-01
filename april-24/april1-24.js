// Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

// For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.

const minRooms = (intervals) => {
    // Sort the intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);
    // initialize room counter
    let rooms = 0;
    // create empty array for end times
    let endTimes = [];

    for (let interval of intervals) {
        // Remove rooms that are freed up
        endTimes = endTimes.filter(endTime => endTime > interval[0]);
        // Add the current meeting's end time
        endTimes.push(interval[1]);
        endTimes.sort((a, b) => a - b);
        rooms = Math.max(rooms, endTimes.length);
    }

    return rooms;
};

// test cases
const arr1 = [[30, 75], [0,50], [60,150]];

const arr2 = [[0,60], [30,90], [55,115]];

const arr3 = [[0,10], [20,30], [40,50]]

console.log(minRooms(arr1)); // expect 2

console.log(minRooms(arr2)); // expect 3

console.log(minRooms(arr3)); // expect 1
