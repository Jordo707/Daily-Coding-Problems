# Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree. Assume that each node in the tree also has a pointer to its parent.

class TreeNode:
    def __init__(self, val=0, left=None, right=None, parent=None):
        self.val = val
        self.left = left
        self.right = right
        self.parent = parent

def get_depth(node):
    depth = 0
    while node:
        node = node.parent
        depth += 1
    return depth

def lca(node1, node2):
    depth1 = get_depth(node1)
    depth2 = get_depth(node2)

    while depth1 > depth2:
        node1 = node1.parent
        depth1 -= 1

    while depth2 > depth1:
        node2 = node2.parent
        depth2 -= 1

    while node1 != node2:
        node1 = node1.parent
        node2 = node2.parent

    return node1

# test case

root = TreeNode(1)
node2 = TreeNode(2, parent=root)
node3 = TreeNode(3, parent=root)
root.left = node2
root.right = node3
node4 = TreeNode(4, parent=node2)
node5 = TreeNode(5, parent=node2)
node2.left = node4
node2.right = node5

common_ancestor = lca(node4, node5)
print(common_ancestor.val) # expect 2
