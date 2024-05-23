// Given the head of a singly linked list, reverse it in-place.

class ListNode {
    value: number;
    next: ListNode | null;
    constructor(value?: number, next?: ListNode | null) {
        this.value = value === undefined ? 0 : value;
        this.next = next === undefined ? null : next;
    }
}

const reverseLinkedList = (head: ListNode | null): ListNode | null => {
    let prev: ListNode | null = null;
    let current: ListNode | null = head;
    while (current !== null) {
        const next: ListNode | null = current.next; // Save the next node
        current.next = prev; // Reverse the link
        prev = current; // Move prev to current
        current = next; // Move current to next
    }
    return prev; // Prev will be the new head after the loop
};

// Helper function to create a linked list from an array
const createLinkedList = (arr: number[]): ListNode | null => {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

// Helper function to print the linked list
const printLinkedList = (head: ListNode | null): void => {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.value.toString() + " -> ");
        current = current.next;
    }
    console.log("null");
}

// Example usage:
let head = createLinkedList([1, 2, 3, 4, 5]);
console.log("Original List:");
printLinkedList(head);

head = reverseLinkedList(head);
console.log("Reversed List:");
printLinkedList(head);

