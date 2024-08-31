/*

You are given a list of data entries that represent entries and exits of groups of people into a building. An entry looks like this:

{"timestamp": 1526579928, count: 3, "type": "enter"}

This means 3 people entered the building. An exit looks like this:

{"timestamp": 1526580382, count: 2, "type": "exit"}

This means that 2 people exited the building. timestamp is in Unix time.

Find the busiest period in the building, that is, the time with the most people in the building. Return it as a pair of (start, end) timestamps. You can assume the building always starts off and ends up empty, i.e. with 0 people inside.

*/

const findBusiestPeriod = entries => {
    entries.sort((a, b) => a.timestamp - b.timestamp);

    let currentCount = 0;
    let maxCount = 0;
    let busiestStart = null;
    let busiestEnd = null;

    for (let i = 0; i < entries.length; i++) {
        let entry = entries[i];

        if (entry.type === 'enter') {
            currentCount += entry.count;
        } else if (entry.type === 'exit') {
            currentCount -= entry.count;
        }

        if (currentCount > maxCount) {
            maxCount = currentCount;
            busiestStart = entry.timestamp;
            if (i + 1 < entries.length) {
                busiestEnd = entries[i + 1].timestamp;
            } else {
                busiestEnd = entry.timestamp;
            }
        } else if (currentCount < maxCount) {
            if (busiestStart !== null && busiestEnd === null) {
                busiestEnd = entry.timestamp;
            }
        }
    }

    return [busiestStart, busiestEnd];
}

// Test Cases
const entries = [
    { "timestamp": 1526579928, "count": 3, "type": "enter" },
    { "timestamp": 1526580382, "count": 2, "type": "exit" },
    { "timestamp": 1526580420, "count": 1, "type": "enter" },
    { "timestamp": 1526580480, "count": 5, "type": "enter" },
    { "timestamp": 1526580540, "count": 3, "type": "exit" }
];

console.log(findBusiestPeriod(entries)); // [ 1526580480, 1526580540 ]
