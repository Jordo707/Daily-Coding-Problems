# Given the root of a binary tree, return a deepest node.

from collections import deque

class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

def find_deepest_node(root):
    if not root:
        return None

    queue = deque([root])
    deepest_node = None

    while queue:
        current_node = queue.popleft()
        deepest_node = current_node

        if current_node.left:
            queue.append(current_node.left)
        if current_node.right:
            queue.append(current_node.right)

    return deepest_node

# Example usage:
# Constructing a binary tree:
#      1
#     / \
#    2   3
#   / \
#  4   5
#       \
#        6

root = TreeNode(1)
root.left = TreeNode(2)
root.right = TreeNode(3)
root.left.left = TreeNode(4)
root.left.right = TreeNode(5)
root.left.right.right = TreeNode(6)

deepest = find_deepest_node(root)
if deepest:
    print(f"Deepest node value: {deepest.val}")  # Output: Deepest node value: 6
else:
    print("The tree is empty.")
