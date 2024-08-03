/*

Given the head of a singly linked list, swap every two nodes and return its head.

For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.

*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

function swapPairs(head) {
    if (!head || !head.next) return head;

    let dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (head && head.next) {
        let firstNode = head;
        let secondNode = head.next;

        // Swapping
        firstNode.next = secondNode.next;
        secondNode.next = firstNode;
        prev.next = secondNode;

        // Reinitializing the pointers for the next swap
        prev = firstNode;
        head = firstNode.next; // move head to the next pair
    }

    return dummy.next;
}

// Helper function to create linked list from array
function createLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let val of arr) {
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to print linked list
function printLinkedList(head) {
    let current = head;
    while (current) {
        process.stdout.write(current.val + " -> ");
        current = current.next;
    }
    console.log("null");
}

// Test Case:
let head = createLinkedList([1, 2, 3, 4]);
console.log("Original list:");
printLinkedList(head);
head = swapPairs(head);
console.log("Swapped list:");
printLinkedList(head);
