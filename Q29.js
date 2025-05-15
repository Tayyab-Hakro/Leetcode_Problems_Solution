/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    s = s.toLowerCase()
let freq  = {}
let vowels = []
let not = []
for(let char of s){
    freq[char] =  (freq[char] || 0)+1
}
for(let [key , value] of Object.entries(freq)){
        if(key === "e" ||key === "u" || key === "i" || key ==="a" || key ==="o"){
        vowels.push(value)
    }else{
        not.push(value)

}
};
let max = vowels.length ? Math.max(...vowels) : 0;
let max2 = not.length ? Math.max(...not) : 0;
return max +=max2

}
console.log(maxFreqSum("successes"))
console.log(maxFreqSum("aeiaeia"))