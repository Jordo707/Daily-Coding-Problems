# We say a number is sparse if there are no adjacent ones in its binary representation. For example, 21 (10101) is sparse, but 22 (10110) is not. For a given input N, find the smallest sparse number greater than or equal to N.

# Do this in faster than O(N log N) time.

def next_sparse(N):
    # Convert the number to binary and store the binary digits in a list
    bin_list = list(bin(N)[2:])  # Binary representation of N as a list of characters
    n = len(bin_list)

    # Add an extra bit at the front to avoid overflow issues
    bin_list = ['0'] + bin_list
    n += 1  # Increment length because of the added '0'

    # Array to mark positions to be modified
    result = bin_list[:]

    # Traverse the bits to check for consecutive 1s
    for i in range(n - 1):
        if result[i] == '1' and result[i + 1] == '1':
            # We found consecutive 1s, modify the first '11' to '10'
            j = i
            while j >= 0 and result[j] == '1':
                result[j] = '0'
                j -= 1
            result[j] = '1'

            # Set all bits after i+1 to '0' to get the smallest number
            for k in range(i + 1, n):
                result[k] = '0'

    # Convert the list of characters back to a number
    sparse_num = int("".join(result), 2)

    return sparse_num

# Example usage:
print(next_sparse(22))  # Output should be 32 (100000 in binary)
