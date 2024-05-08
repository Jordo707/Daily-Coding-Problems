const findIndexInRotatedArray = (array: number[], target: number): number | null => {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (array[mid] === target) {
            return mid;
        }

        // Check if the left half is sorted
        if (array[left] <= array[mid]) {
            // Target is in the left sorted part
            if (array[left] <= target && target < array[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else { // Right half is sorted
            // Target is in the right sorted part
            if (array[mid] < target && target <= array[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return null;
}

//test cases

const array = [13, 18, 25, 2, 8, 10];

console.log(findIndexInRotatedArray(array, 8));  // expect 4
console.log(findIndexInRotatedArray(array, 2));  // expect 3
console.log(findIndexInRotatedArray(array, 20));  // expect null
