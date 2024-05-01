/*

Given a function that generates perfectly random numbers between 1 and k (inclusive), where k is an input, write a function that shuffles a deck of cards represented as an array using only swaps.

It should run in O(N) time.

* Hint: Make sure each one of the 52! permutations of the deck is equally likely.

*/

// helper function to create random int between any two numbers
const randomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate a standard deck of cards
type Suit = 'Hearts' | 'Diamonds' | 'Clubs' | 'Spades';
type Rank = 'Ace' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'Jack' | 'Queen' | 'King';

const generateDeck = (): string[] => {
    const suits: Suit[] = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
    const ranks: Rank[] = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];

    let deck: string[] = [];

    for (let suit of suits) {
        for (let rank of ranks) {
            deck.push(`${rank} of ${suit}`);
        }
    }

    return deck;
}

const shuffleDeck = (deck: string[]): void => {
    for(let i = deck.length - 1; i > 0; i--) {
        const j = randomInt(0,i);

        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
}

//* Test cases
const deckOfCards = generateDeck();
console.log(deckOfCards);
shuffleDeck(deckOfCards);
console.log(deckOfCards);
