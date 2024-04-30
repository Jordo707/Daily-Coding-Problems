/*

Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

Given the root to such a tree, write a function to evaluate it.

For example, given the following tree:

    *
   / \
  +    +
 / \  / \
3  2  4  5
You should return 45, as it is (3 + 2) * (4 + 5).

*/

class TreeNode {
   value: number | string;
   left: TreeNode | null;
   right: TreeNode | null;

   constructor(value: number | string, left: TreeNode | null = null, right: TreeNode | null = null) {
    this.value = value;
    this.left = left;
    this.right = right;
   }
}

const evaluateExpression = (root: TreeNode | null): number => {
    if (root === null) {
        throw new Error("The root of the expression tree is null");
    }

    if (typeof root.value === "number") {
        return root.value;
    }

    const leftValue = evaluateExpression(root.left);
    const rightValue = evaluateExpression(root.right);

    switch (root.value) {
        case '+':
            return leftValue + rightValue;
        case '-':
            return leftValue - rightValue;
        case '*':
            return leftValue * rightValue;
        case '/':
            // Check for division by zero
            if (rightValue === 0) {
                throw new Error("Division by zero error");
            }
            return leftValue / rightValue;
        default:
            throw new Error("Invalid operator");
    }
}

// test cases

const root = new TreeNode('+',
    new TreeNode('*',
        new TreeNode(5),
        new TreeNode(4)
    ),
    new TreeNode('/',
        new TreeNode(20),
        new TreeNode(2)
    )
);

console.log(evaluateExpression(root)); // expect 30 (5*4 + 20/2)
