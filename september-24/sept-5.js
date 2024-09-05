/*

Alice wants to join her school's Probability Student Club. Membership dues are computed via one of two simple probabilistic games.

The first game: roll a die repeatedly. Stop rolling once you get a five followed by a six. Your number of rolls is the amount you pay, in dollars.

The second game: same, except that the stopping condition is a five followed by a five.

Which of the two games should Alice elect to play? Does it even matter? Write a program to simulate the two games and calculate their expected value.

*/

const game1 = trials => {
    let totalRolls = 0;
    for (let i = 0; i < trials; i++) {
        let rolls = 0;
        while (true) {
            rolls++;
            let firstRoll = Math.floor(Math.random() * 6) + 1;
            if (firstRoll === 5) {
                rolls ++;
                let secondRoll = Math.floor(Math.random() * 6) + 1;
                if (secondRoll === 6) {
                    break;
                }
            }
        }
        totalRolls += rolls
    }
    return totalRolls / trials
}

const game2 = trials => {
    let totalRolls = 0;
    for (let i = 0; i < trials; i++) {
        let rolls = 0;
        while (true) {
            rolls++;
            let firstRoll = Math.floor(Math.random() * 6) + 1;
            if (firstRoll === 5) {
                let secondRoll = Math.floor(Math.random() * 6) + 1;
                rolls++;
                if (secondRoll === 5) {
                    break;
                }
            }
        }
        totalRolls += rolls;
    }
    return totalRolls / trials;
}

const trials = 1000000;

const expectedValueGame1 = game1(trials);
const expectedValueGame2 = game2(trials);

console.log(`Expected value for Game 1 (5 followed by 6): ${expectedValueGame1.toFixed(2)} rolls`);
console.log(`Expected value for Game 2 (5 followed by 5): ${expectedValueGame2.toFixed(2)} rolls`);
