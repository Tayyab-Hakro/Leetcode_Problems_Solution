/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
   let  freq = {}
    let count  = 0
   for(let char of s){
        freq[char] =  (freq[char] || 0) +1
    }
    for(let [keys, value] of Object.entries(freq) ){
        if(value > t){
            count++
        }
    }
   return count
};
console.log(minSteps("bab",  "aba"))