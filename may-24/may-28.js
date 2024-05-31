/*
Given k sorted singly linked lists, write a function to merge all the lists into one sorted singly linked list.
*/
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class MinHeap {
    constructor() {
        this.heap = [];
    }

    insert(node) {
        this.heap.push(node);
        this.heapifyUp();
    }

    extractMin() {
        if (this.heap.length === 1) {
            return this.heap.pop();
        }
        const min = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return min;
    }

    heapifyUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index].val >= this.heap[parentIndex].val) {
                break;
            }
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]];
            index = parentIndex;
        }
    }

    heapifyDown() {
        let index = 0;
        const length = this.heap.length;
        const element = this.heap[0];

        while (true) {
            let leftChildIndex = 2 * index + 1;
            let rightChildIndex = 2 * index + 2;
            let leftChild, rightChild;
            let swap = null;

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex];
                if (leftChild.val < element.val) {
                    swap = leftChildIndex;
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex];
                if (
                    (swap === null && rightChild.val < element.val) ||
                    (swap !== null && rightChild.val < leftChild.val)
                ) {
                    swap = rightChildIndex;
                }
            }

            if (swap === null) break;
            this.heap[index] = this.heap[swap];
            this.heap[swap] = element;
            index = swap;
        }
    }

    isEmpty() {
        return this.heap.length === 0;
    }
}

const mergeKLists = (lists) => {
    const minHeap = new MinHeap();

    // Insert the first node of each list into the min heap
    for (const list of lists) {
        if (list) {
            minHeap.insert(list);
        }
    }

    const dummy = new ListNode();
    let current = dummy;

    while (!minHeap.isEmpty()) {
        const minNode = minHeap.extractMin();
        current.next = minNode;
        current = current.next;
        if (minNode.next) {
            minHeap.insert(minNode.next);
        }
    }

    return dummy.next;
};

// Example usage:
// Define some sorted linked lists:
const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));

const lists = [list1, list2, list3];

const mergedList = mergeKLists(lists);

// Function to print the merged list:
const printList = (head) => {
    let current = head;
    while (current) {
        console.log(current.val);
        current = current.next;
    }
};

printList(mergedList);
// Output: 1 1 2 3 4 4 5 6
