/*

Invert a binary tree.

For example, given the following tree:

    a
   / \
  b   c
 / \  /
d   e f
should become:

  a
 / \
 c  b
 \  / \
  f e  d

*/

// Create Tree node class
class TreeNode {
    constructor(val, left=null, right=null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Function to invert tree
const invertTree = (root) => {
    if(!root) return null;

    // Swap the left and right subtrees
    const temp = root.left;
    root.left = root.right;
    root.right = temp;

    return root;
}

// Helper function to visualize tree
const printTree = (node, level=0, label='Root: ') => {
    if( node != null) {
        console.log(' '.repeat(level * 4) + label + node.val);
        printTree(node.left, level + 1, "L: ");
        printTree(node.right, level + 1, "R: ");
    }
}

// Test Case
const tree = new TreeNode('a',
    new TreeNode('b',
        new TreeNode('d'),
        new TreeNode('e')
    ),
    new TreeNode('c',
        null,
        new TreeNode('f')
    )
);

printTree(tree);
/*
Root: a
    L: b
        L: d
        R: e
    R: c
        R: f
*/

const invertedTree = invertTree(tree);

printTree(invertedTree);
/*
Root: a
    L: c
        R: f
    R: b
        L: d
        R: e
*/
