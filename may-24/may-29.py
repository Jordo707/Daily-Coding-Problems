# Given an array of integers, write a function to determine whether the array could become non-decreasing by modifying at most 1 element.

# For example, given the array [10, 5, 7], you should return true, since we can modify the 10 into a 1 to make the array non-decreasing.

# Given the array [10, 5, 1], you should return false, since we can't modify any one element to get a non-decreasing array.

def can_be_non_decreasing(nums):
    count = 0  # to keep track of modifications needed
    for i in range(1, len(nums)):
        if nums[i] < nums[i - 1]:
            if count == 1:
                return False
            count += 1
            if i == 1 or nums[i - 2] <= nums[i]:
                nums[i - 1] = nums[i]
            else:
                nums[i] = nums[i - 1]
    return True

# Example usage:
print(can_be_non_decreasing([10, 5, 7]))  # Output: True
print(can_be_non_decreasing([10, 5, 1]))  # Output: False
