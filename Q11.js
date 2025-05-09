function buildArray(target, n) {
    const result = [];  // This will hold the final list of operations
    let current = 1;     // Start reading numbers from 1
  
    for (let i = 0; i < target.length; i++) {
      const num = target[i];
  
      // While current number is less than the target number
      while (current < num) {
        result.push("Push"); // Push the number (we must simulate reading it)
        result.push("Pop");  // But it's not in target, so remove it
        current++;           // Move to next number
      }
  
      // Now current == num, so we need it in the stack
      result.push("Push");  // Keep this one
      current++;            // Move to next number
    }
  
    return result;
  }
  console.log(buildArray([1, 3], 3));
  // Output: ['Push', 'Push', 'Pop', 'Push']
    