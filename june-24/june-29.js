/*

*/

// Define the TreeNode class
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

// Function to find all paths from root to leaves
const binaryTreePaths = (root) => {
    const result = [];
    if (!root) return result;

    // Helper function to perform DFS
    const dfs = (node, path) => {
        if (!node) return;
        path.push(node.val);

        // If it's a leaf node, add the path to the result
        if (!node.left && !node.right) {
            result.push([...path]);
        } else {
            // Continue the search in the left and right subtrees
            dfs(node.left, path);
            dfs(node.right, path);
        }

        // Backtrack: remove the last element added
        path.pop();
    }

    dfs(root, []);
    return result;
}

// Example usage:
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(4);
root.right.right = new TreeNode(5);

console.log(binaryTreePaths(root)); // Output: [[1, 2], [1, 3, 4], [1, 3, 5]]
