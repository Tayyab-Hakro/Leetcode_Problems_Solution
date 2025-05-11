/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
 let freq ={}
 for(let char of arr){
    freq[char] =(freq[char] || 0) +1
 }
 let val = Object.values(freq)
 let uique = new Set(val)
return uique.size  === val.length
}
console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]))
console.log(uniqueOccurrences([1,2]))