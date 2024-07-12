/*

Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

*/

class TreeNode {
    constructor(val, left = null, right = null) {
      this.val = val;
      this.left = left;
      this.right = right;
    }
  }

  function isSameTree(s, t) {
    if (!s && !t) return true; // Both are null
    if (!s || !t) return false; // One is null, the other is not
    if (s.val !== t.val) return false; // Values do not match

    // Recursively check left and right subtrees
    return isSameTree(s.left, t.left) && isSameTree(s.right, t.right);
  }

  function isSubtree(s, t) {
    if (!s) return false; // If s is null, t cannot be a subtree
    if (isSameTree(s, t)) return true; // Check if the current trees are the same

    // Recursively check left and right subtrees of s
    return isSubtree(s.left, t) || isSubtree(s.right, t);
  }

  // Test Case:
  let s = new TreeNode(3, new TreeNode(4, new TreeNode(1), new TreeNode(2)), new TreeNode(5));
  let t = new TreeNode(4, new TreeNode(1), new TreeNode(2));

  console.log(isSubtree(s, t)); // Expect true
