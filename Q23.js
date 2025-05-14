function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Found the target
    } else if (arr[mid] < target) {
      low = mid + 1; // Search right half
    } else {
      high = mid - 1; // Search left half
    }
  }

  return -1; // Not found
}
const numbers = [2, 4, 6, 8, 10, 12, 14];
console.log(binarySearch(numbers, 10)); // Output: 4
console.log(binarySearch(numbers, 5));  // Output: -1
