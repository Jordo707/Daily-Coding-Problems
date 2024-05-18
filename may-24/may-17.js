class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.minFreq = 0;
        this.keyMap = new Map();
        this.freqMap = new Map();
    }

    _updateFreqMap(node) {
        let freq = node.freq;
        let list = this.freqMap.get(freq);
        list.delete(node.key);

        if (list.size === 0) {
            this.freqMap.delete(freq);
            if (this.minFreq === freq) {
                this.minFreq++;
            }
        }

        node.freq++;
        freq = node.freq;
        if (!this.freqMap.has(freq)) {
            this.freqMap.set(freq, new Map());
        }
        this.freqMap.get(freq).set(node.key, node);
    }

    get = (key) => {
        if (!this.keyMap.has(key)) {
            return null;
        }
        let node = this.keyMap.get(key);
        this._updateFreqMap(node);
        return node.value;
    }

    set = (key, value) => {
        if (this.capacity === 0) {
            return;
        }

        if (this.keyMap.has(key)) {
            let node = this.keyMap.get(key);
            node.value = value;
            this._updateFreqMap(node);
        } else {
            if (this.keyMap.size >= this.capacity) {
                let list = this.freqMap.get(this.minFreq);
                let oldestKey = list.keys().next().value;
                list.delete(oldestKey);
                if (list.size === 0) {
                    this.freqMap.delete(this.minFreq);
                }
                this.keyMap.delete(oldestKey);
            }
            let newNode = {
                key: key,
                value: value,
                freq: 1
            };
            this.keyMap.set(key, newNode);
            if (!this.freqMap.has(1)) {
                this.freqMap.set(1, new Map());
            }
            this.freqMap.get(1).set(key, newNode);
            this.minFreq = 1;
        }
    }
}

// Example usage
const cache = new LFUCache(2);
cache.set(1, 1); // cache = {1=1}
cache.set(2, 2); // cache = {1=1, 2=2}
console.log(cache.get(1)); // returns 1
cache.set(3, 3); // removes key 2 and inserts key 3, cache = {1=1, 3=3}
console.log(cache.get(2)); // returns null (not found)
console.log(cache.get(3)); // returns 3
cache.set(4, 4); // removes key 1 and inserts key 4, cache = {4=4, 3=3}
console.log(cache.get(1)); // returns null (not found)
console.log(cache.get(3)); // returns 3
console.log(cache.get(4)); // returns 4
