/*

Given a binary tree, return the level of the tree with the minimum sum.

*/

const { Route53RecoveryCluster } = require("aws-sdk");

class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

const minLevelSum = root => {
    if(!root) return 0;

    let minSum = Infinity;
    let minLevel = 0;
    let currentLevel = 0;

    const queue = [root];

    while(queue.length) {
        let levelSize = queue.length;
        let levelSum = 0;
        currentLevel++;

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            levelSum += node.val;

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        if (levelSum < minSum) {
            minSum = levelSum;
            minLevel = currentLevel;
        }
    }

    return minLevel;
}

// Test Case

// Example Tree "root":
//       1
//      / \
//     2   3
//    / \   \
//   4   5   8
//          / \
//         6   7

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.right = new TreeNode(8);
root.right.right.left = new TreeNode(6);
root.right.right.right = new TreeNode(7);

console.log(minLevelSum(root)) // Expect 1
