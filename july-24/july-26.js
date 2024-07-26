/*

Implement a bit array.

A bit array is a space efficient array that holds a value of 1 or 0 at each index.

init(size): initialize the array with size
set(i, val): updates index at i with val where val is either 1 or 0.
get(i): gets the value at index i.

*/

class BitArray {
    constructor(size) {
        this.size = size;
        this.array = new Uint8Array(Math.ceil(size / 8)); // Using Uint8Array for space efficiency
    }

    // Helper function to get the index of the byte and the bit position within that byte
    getBitPosition(i) {
        const byteIndex = Math.floor(i / 8);
        const bitPosition = i % 8;
        return { byteIndex, bitPosition };
    }

    init(size) {
        this.size = size;
        this.array = new Uint8Array(Math.ceil(size / 8));
    }

    set(i, val) {
        if (i >= this.size || (val !== 0 && val !== 1)) {
            throw new Error("Index out of bounds or invalid value");
        }
        const { byteIndex, bitPosition } = this.getBitPosition(i);
        if (val === 1) {
            this.array[byteIndex] |= (1 << bitPosition); // Set the bit to 1
        } else {
            this.array[byteIndex] &= ~(1 << bitPosition); // Set the bit to 0
        }
    }

    get(i) {
        if (i >= this.size) {
            throw new Error("Index out of bounds");
        }
        const { byteIndex, bitPosition } = this.getBitPosition(i);
        return (this.array[byteIndex] & (1 << bitPosition)) ? 1 : 0;
    }
}

// Test Case
const bitArray = new BitArray(10);
bitArray.set(2, 1);
console.log(bitArray.get(2)); // Expect 1
bitArray.set(2, 0);
console.log(bitArray.get(2)); // Expect 0
