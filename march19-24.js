// A unival tree (which stands for "universal value") is a tree where all nodes under it have the same value.

// Given the root to a binary tree, count the number of unival subtrees.

// For example, the following tree has 5 unival subtrees:

//    0
//   / \
//  1   0
//     / \
//    1   0
//   / \
//  1   1

function TreeNode(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
}

function countUnivalSubtrees(root) {
    let count = 0;

    function isUnival(root) {
        if (!root) return [true, null];

        if (!root.left && !root.right) {
            count++; // A leaf node is always a unival subtree.
            return [true, root.val];
        }

        let left = isUnival(root.left),
            right = isUnival(root.right);

        if (left[0] && right[0]) {
            if ((root.left && root.val !== root.left.val) || (root.right && root.val !== root.right.val)) {
                return [false, root.val];
            }
            count++;
            return [true, root.val];
        }

        return [false, root.val];
    }

    isUnival(root);
    return count;
}

// Example usage:
const tree = new TreeNode(0);
tree.left = new TreeNode(1);
tree.right = new TreeNode(0);
tree.right.left = new TreeNode(1, new TreeNode(1), new TreeNode(1));
tree.right.right = new TreeNode(0);

console.log(countUnivalSubtrees(tree)); // Should output 5
