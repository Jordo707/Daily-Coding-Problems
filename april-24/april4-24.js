/*
Implement locking in a binary tree. A binary tree node can be locked or unlocked only if all of its descendants or ancestors are not locked.

Design a binary tree node class with the following methods:

is_locked, which returns whether the node is locked
lock, which attempts to lock the node. If it cannot be locked, then it should return false. Otherwise, it should lock it and return true.
unlock, which unlocks the node. If it cannot be unlocked, then it should return false. Otherwise, it should unlock it and return true.
You may augment the node to add parent pointers or any other property you would like. You may assume the class is used in a single-threaded program, so there is no need for actual locks or mutexes. Each method should run in O(h), where h is the height of the tree.
*/

class TreeNode {
    constructor(value = 0, parent = null) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.parent = parent;
        this.isLocked = false;
        this.lockedDescendantsCount = 0;
    }

    // Check if the node is locked
    is_locked() {
        return this.isLocked;
    }

    // attempt to lock the node
    lock() {
        // check if locking is possible
        if (this.canLockOrUnlock()) {
            this.isLocked = true;
            this.updateAncestorsLockCount(1);
            return true;
        }
        return false;
    }

    // attempt to unlock the node
    unlock() {
        if (this.canLockOrUnlock()) {
            this.isLocked = false;
            this.updateAncestorsLockCount(-1);
            return true;
        }
        return false;
    }

    // helper function to check if a node can be locked or unlocked
    canLockOrUnlock() {
        if (this.lockedDescendantsCount > 0) {
            return false;
        }

        let currentNode = this.parent;
        while (currentNode) {
            if (currentNode.isLocked) return false;
            currentNode = currentNode.parent;
        }

        return true;
    }

    // helper function to update locked descendants count for ancestors
    updateAncestorsLockCount(value) {
        let currentNode = this.parent;
        while (currentNode) {
            currentNode.lockedDescendantsCount += value;
            currentNode = currentNode.parent;
        }
    }
}

// test cases
let root = new TreeNode();
let child1 = new TreeNode(1, root);
let child2 = new TreeNode(2, root);
root.left = child1;
root.right = child2;

console.log(child1.lock()); // should return true, locking the node
console.log(root.is_locked()); // should return false
console.log(child1.is_locked()); // should return true
console.log(child2.lock()); // should return true, locking the node
console.log(child1.unlock()); // should return true, unlocking the node
