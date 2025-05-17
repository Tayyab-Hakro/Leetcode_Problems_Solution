function maxSum(arr, k) {
  let max = 0;
  let windowSum = 0;

  // Calculate the first window sum
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  max = windowSum;

  // Slide the window
  for (let i = k; i < arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    max = Math.max(max, windowSum);
  }

  return max;
}

console.log(maxSum([2, 1, 5, 1, 3, 2], 3)); // Output: 9 (5+1+3)
