/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    let freq  = {};
    for(let char of nums){
        freq[char] = (freq[char] || 0) +1
    }
    let values = Object.values(freq);
    let max = Math.max(...values)
 let val  = values.filter((val) => val === max)
    return val.reduce((val ,u )=> u +=val,0)
};
console.log(maxFrequencyElements([1,2,2,3,1,4]))