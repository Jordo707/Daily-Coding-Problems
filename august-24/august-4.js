/*

Given a binary tree where all nodes are either 0 or 1, prune the tree so that subtrees containing all 0s are removed.

For example, given the following tree:

   0
  / \
 1   0
    / \
   1   0
  / \
 0   0
should be pruned to:

   0
  / \
 1   0
    /
   1
We do not remove the tree at the root or its left child because it still has a 1 as a descendant.

*/

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const pruneTree = root => {
    if (root == null) return null;

    root.left = pruneTree(root.left);
    root.right = pruneTree(root.right);

    if (root.val === 0 && root.left === null && root.right === null) return null;

    return root;
}

// Test Cases
const tree1 = new TreeNode(0,
    new TreeNode(1),
    new TreeNode(0,
        new TreeNode(1,
            new TreeNode(0),
            new TreeNode(0)
        ),
        new TreeNode(0)
    )
);

const prunedTree = pruneTree(tree1);
console.log(JSON.stringify(prunedTree, null, 2));
