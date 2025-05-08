/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function(nums) {
let totalSum = nums.reduce((val , ind) => val +=ind ,0)
nums = nums.sort((a,b) => b-a)
let selected = []
let sum = 0
for(let num of nums){
    sum+=num
    selected.push(num)
    if(sum >totalSum-sum){
        break
    }
}
return selected
};
console.log(minSubsequence([4,3,10,9,8]))