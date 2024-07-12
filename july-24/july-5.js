/*

Generate a finite, but an arbitrarily large binary tree quickly in O(1).

That is, generate() should return a tree whose size is unbounded but finite.

*/

class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

const generate = () => {
    let currentId = 1;

    const generateNode = () => {
        if (Math.random() < 0.5) return null;
        const node = new TreeNode(currentId++);
        node.left = generateNode();
        node.right = generateNode();
        return node;
    };

    return generateNode();
};

// Test case
const tree = generate();
console.log(tree);
