# Given an array of strictly the characters 'R', 'G', and 'B', segregate the values of the array so that all the Rs come first, the Gs come second, and the Bs come last. You can only swap elements of the array.

# Do this in linear time and in-place.

# For example, given the array ['G', 'B', 'R', 'R', 'B', 'R', 'G'], it should become ['R', 'R', 'R', 'G', 'G', 'B', 'B'].

def segregate_rgb(arr):
    red_index = 0
    blue_index = len(arr) - 1
    i = 0

    while i <= blue_index:
        if arr[i] == 'R':
            arr[i], arr[red_index] = arr[red_index], arr[i]
            red_index += 1
            i += 1
        elif arr[i] == 'B':
            arr[i], arr[blue_index] = arr[blue_index], arr[i]
            blue_index -= 1
        else: i += 1

    return arr

# test cases
arr1 = ['G', 'B', 'R', 'R', 'B', 'R', 'G']
arr2 = ['G', 'R', 'B', 'R', 'G', 'R', 'G']

print(segregate_rgb(arr1)) # expect ['R', 'R', 'R', 'G', 'G', 'B', 'B']
print(segregate_rgb(arr2)) # expect ['R', 'R', 'R', 'G', 'G', 'G', 'B']
