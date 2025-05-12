/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {

    let prefixSum = []
    

 prefixSum[0] = nums[0];
 for(let i = 1;i<nums.length ;i++){
        prefixSum[i] = prefixSum[i-1] + nums[i]
        
}
return prefixSum
};
console.log(runningSum([1,2,3,4]))