/*

On election day, a voting machine writes data in the form (voter_id, candidate_id) to a text file. Write a program that reads this file as a stream and returns the top 3 candidates at any given time. If you find a voter voting more than once, report this as fraud.

*/

const fs = require('fs');
const readline = require('readline');
const { once } = require('events');

const file = 'votes.txt';
const readInterface = readline.createInterface({
    input
});

const votes = {};

readInterface.on('line', (line) => {
    const [voterId, candidateId] = line.split(',');
    if (votes[voterId]) {
        console.log(`Fraud detected: ${voterId} has already voted.`);
    } else {
        votes[voterId] = candidateId;
    }
});

readInterface.on('close', () => {
    const candidates = {};
    for (const voterId in votes) {
        const candidateId = votes[voterId];
        if (candidates[candidateId]) {
            candidates[candidateId]++;
        } else {
            candidates[candidateId] = 1;
        }
    }
    const sortedCandidates = Object.entries(candidates).sort((a, b) => b[1] - a[1]);
    console.log(sortedCandidates.slice(0, 3));
});


