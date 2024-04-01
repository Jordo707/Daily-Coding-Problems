// Given the mapping a = 1, b = 2, ... z = 26, and an encoded message, count the number of ways it can be decoded.

// For example, the message '111' would give 3, since it could be decoded as 'aaa', 'ka', and 'ak'.

// You can assume that the messages are decodable. For example, '001' is not allowed.

const numDecodings = (message) => {
    // ensure message exists and is decodable
    if(message == null || message.length == 0 || message[0] == 0) return 0;

    //
    let ways = new Array(message.length + 1).fill(0);

    ways[0] = 1; // Empty string can be decoded in one way
    ways[1] = message.charAt(0) != '0' ? 1 : 0; // First character can only be decoded in one way if it's not '0'

    for(let i = 2; i <= message.length; i++) {
        let oneDigit = parseInt(message.substring(i-1, i)); // Last digit
        let twoDigits = parseInt(message.substring(i-2, i)); // Last two digits

        if(oneDigit >= 1) {
            ways[i] += ways[i-1]; // If the last digit forms a valid number by itself
        }

        if(twoDigits >= 10 && twoDigits <= 26) {
            ways[i] += ways[i-2]; // If the last two digits form a valid number
        }
    }

    return ways[message.length];
}

console.log(numDecodings('111'))
// expect 3

console.log(numDecodings(''))
// expect 0

console.log(numDecodings('02'))
// expect 0

console.log(numDecodings('26'))
// expect 2
