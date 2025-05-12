const nums = [2, 4, 6, 8];
const prefixSum = [];

prefixSum[0] = nums[0];
for (let i = 1; i < nums.length; i++) {
  prefixSum[i] = prefixSum[i - 1] + nums[i];
}

console.log(prefixSum); // [2, 6, 12, 20]
