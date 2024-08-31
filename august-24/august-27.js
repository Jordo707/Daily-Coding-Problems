/*

Given a linked list, sort it in O(n log n) time and constant space.

For example, the linked list 4 -> 1 -> -3 -> 99 should become -3 -> 1 -> 4 -> 99.

*/

class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// Helper function to merge two sorted linked lists
const mergeTwoLists = (l1, l2) => {
    let dummy = new ListNode(0);
    let current = dummy;

    while (l1 !== null && l2 !== null) {
        if (l1.value < l2.value) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }

    return dummy.next;
};

// Function to find the middle node of the linked list
const findMiddle = (head) => {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
};

// Merge Sort function for linked list
const sortLinkedList = (head) => {
    if (head === null || head.next === null) {
        return head;
    }

    // Find the middle of the linked list
    let middle = findMiddle(head);
    let rightHalf = middle.next;
    middle.next = null;

    // Recursively split and sort the linked list
    let leftSorted = sortLinkedList(head);
    let rightSorted = sortLinkedList(rightHalf);

    // Merge the sorted halves
    return mergeTwoLists(leftSorted, rightSorted);
};

// Test Case
let head = new ListNode(4);
head.next = new ListNode(1);
head.next.next = new ListNode(-3);
head.next.next.next = new ListNode(99);

head = sortLinkedList(head);

let current = head;
while (current !== null) {
    console.log(current.value);
    current = current.next;
} // -3, 1, 4, 99
