/*

Let's represent an integer in a linked list format by having each node represent a digit in the number. The nodes make up the number in reversed order.

For example, the following linked list:

1 -> 2 -> 3 -> 4 -> 5
is the number 54321.

Given two linked lists in this format, return their sum in the same linked list format.

For example, given

9 -> 9
5 -> 2
return 124 (99 + 25) as:

4 -> 2 -> 1

*/

class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

const addTwoNumbers = (l1,l2) => {
    let dummyHead = new ListNode();
    let current = dummyHead;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.value;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.value;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        current.next = new ListNode(sum % 10);
        current = current.next;
    }

    return dummyHead.next;
}

const createLinkedList = arr => {
    let dummyHead = new ListNode();
    let current = dummyHead;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next
    }
    return dummyHead.next;
}

const printLinkedList = node => {
    let list = [];
    while (node !== null) {
        list.push(node.value);
        node = node.next;
    }
    console.log(list.join(` -> `));
}

// Test Case
let l1 = createLinkedList([9, 9]);
let l2 = createLinkedList([5, 2]);

let res = addTwoNumbers(l1, l2);
printLinkedList(res) // Expect '4 -> 2 -> 1'
