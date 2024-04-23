# Implement a stack that has the following methods:

# push(val), which pushes an element onto the stack
# pop(), which pops off and returns the topmost element of the stack. If there are no elements in the stack, then it should throw an error or return null.
# max(), which returns the maximum value in the stack currently. If there are no elements in the stack, then it should throw an error or return null.
# Each method should run in constant time.

class MaxStack:
    def __init__(self):
        self.stack = []
        self.max_stack = []

    def push(self, val):
        self.stack.append(val)
        if not self.max_stack or val >= self.max_stack[-1]:
            self.max_stack.append(val)
        else:
            self.max_stack.append(self.max_stack[-1])

    def pop(self):
        if not self.stack:
            raise IndexError("pop from an empty stack")
        self.max_stack.pop()
        return self.stack.pop()

    def max(self):
        if not self.stack:
            raise IndexError("max from an empty stack")
        return self.max_stack[-1]

# test cases
s = MaxStack()
s.push(3)
s.push(5)
s.push(2)
print(s.max())  # expect 5
print(s.pop())  # expect 2
print(s.max())  # expect 5
