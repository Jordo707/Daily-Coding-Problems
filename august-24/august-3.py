# Given the head of a singly linked list, swap every two nodes and return its head.

# For example, given 1 -> 2 -> 3 -> 4, return 2 -> 1 -> 4 -> 3.

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

def swapPairs(head):
    # Create a dummy node to handle edge cases
    dummy = ListNode(0)
    dummy.next = head
    prev = dummy

    # Traverse the list while there are pairs to swap
    while prev.next and prev.next.next:
        first = prev.next
        second = prev.next.next

        # Perform the swap
        first.next = second.next
        second.next = first
        prev.next = second

        # Move to the next pair
        prev = first

    return dummy.next

# Helper function to print the list
def printList(head):
    current = head
    while current:
        print(current.val, end=" -> ")
        current = current.next
    print("None")

# Example usage
head = ListNode(1, ListNode(2, ListNode(3, ListNode(4))))
print("Original list:")
printList(head)

swapped_head = swapPairs(head)
print("Swapped list:")
printList(swapped_head)
