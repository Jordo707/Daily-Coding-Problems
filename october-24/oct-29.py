# Implement a PrefixMapSum class with the following methods:

# insert(key: str, value: int): Set a given key's value in the map. If the key already exists, overwrite the value.
# sum(prefix: str): Return the sum of all values of keys that begin with a given prefix.
# For example, you should be able to run the following code:

# mapsum.insert("columnar", 3)
# assert mapsum.sum("col") == 3

# mapsum.insert("column", 2)
# assert mapsum.sum("col") == 5

class PrefixMapSum:
    def __init__(self):
        self.map = {}
        self.prefix_sum = {}

    def insert(self, key: str, value: int):
        # Calculate the difference if the key already exists
        difference = value - self.map.get(key, 0)
        self.map[key] = value

        # Update all prefixes of the key in prefix_sum
        for i in range(1, len(key) + 1):
            prefix = key[:i]
            if prefix in self.prefix_sum:
                self.prefix_sum[prefix] += difference
            else:
                self.prefix_sum[prefix] = value

    def sum(self, prefix: str) -> int:
        return self.prefix_sum.get(prefix, 0)

mapsum = PrefixMapSum()
mapsum.insert("columnar", 3)
assert mapsum.sum("col") == 3

mapsum.insert("column", 2)
assert mapsum.sum("col") == 5
