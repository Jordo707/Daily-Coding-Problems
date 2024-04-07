# Given a singly linked list and an integer k, remove the kth last element from the list. k is guaranteed to be smaller than the length of the list.

# The list is very long, so making more than one pass is prohibitively expensive.

# Do this in constant space and in one pass.

class ListNode:
    def __init__(self,value=0,next=None):
        self.value=value
        self.next=next

def remove_kth_last(head, k):
    # create a dummy node to handle edge cases
    dummy = ListNode(0)
    dummy.next = head
    fast = slow = dummy

    # move fast k+1 steps to ensura a gap between fast and slow
    for _ in range(k+1):
        fast = fast.next

    # move fast to the end
    while fast:
        slow = slow.next
        fast = fast.next

    # remove the kth last element
    slow.next = slow.next.next

    return dummy.next

