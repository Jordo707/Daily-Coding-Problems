# Given a 2D matrix of characters and a target word, write a function that returns whether the word can be found in the matrix by going left-to-right, or up-to-down.

# For example, given the following matrix:

# [['F', 'A', 'C', 'I'],
#  ['O', 'B', 'Q', 'P'],
#  ['A', 'N', 'O', 'B'],
#  ['M', 'A', 'S', 'S']]
# and the target word 'FOAM', you should return true, since it's the leftmost column. Similarly, given the target word 'MASS', you should return true, since it's the last row.

def find_word_in_matrix(matrix, word):
    if not matrix or not matrix[0]:
        return False

    num_rows = len(matrix)
    num_cols = len(matrix[0])

    # Check each row
    for r in range(num_rows):
        row_string = ''.join(matrix[r])
        if word in row_string:
            return True

    # Check each column
    for c in range(num_cols):
        col_string = ''.join(matrix[r][c] for r in range(num_rows))
        if word in col_string:
            return True

    return False

# Example usage
matrix = [
    ['F', 'A', 'C', 'I'],
    ['O', 'B', 'Q', 'P'],
    ['A', 'N', 'O', 'B'],
    ['M', 'A', 'S', 'S']
]

print(find_word_in_matrix(matrix, 'FOAM'))  # True
print(find_word_in_matrix(matrix, 'MASS'))  # True
print(find_word_in_matrix(matrix, 'FACE'))  # False
