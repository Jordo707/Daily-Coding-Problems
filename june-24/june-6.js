/*
A rule looks like this:

A NE B

This means this means point A is located northeast of point B.

A SW C

means that point A is southwest of C.

Given a list of rules, check if the sum of the rules validate. For example:

A N B
B NE C
C N A
does not validate, since A cannot be both north and south of C.

A NW B
A N B
is considered valid.
*/

const validateRules = (rules) => {
    const directionPairs = {
        'N': 'S', 'S': 'N',
        'E': 'W', 'W': 'E',
        'NE': 'SW', 'SW': 'NE',
        'NW': 'SE', 'SE': 'NW'
    };

    const relationships = {};

    for (let rule of rules) {
        const [a, direction, b] = rule.split(' ');

        if (!relationships[a]) relationships[a] = {};
        if (!relationships[b]) relationships[b] = {};

        if (relationships[a][direction] && relationships[a][direction] !== b) {
            return false;
        }
        relationships[a][direction] = b;

        const oppositeDirection = directionPairs[direction];

        if (relationships[b][oppositeDirection] && relationships[b][oppositeDirection] !== a) {
            return false;
        }
        relationships[b][oppositeDirection] = a;
    }

    return true;
};

// Test Cases
console.log(validateRules(["A NE B", "B NE C", "C N A"])); // Expect false
console.log(validateRules(["A NW B", "A N B"])); // Expect true
