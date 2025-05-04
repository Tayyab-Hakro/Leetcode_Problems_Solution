/**
 * @param {string[]} patterns
 * @param {string} word
 * @return {number}
 */
var numOfStrings = function(patterns, word) {
    let count = 0 ;
    for(let i = 0 ; i<patterns.length ; i++){
        if( word.includes(patterns[i])){
            count++
        }
    }
    return count
    }

console.log(numOfStrings(["a","abc","bc","d" ],  "abc"))
console.log(numOfStrings(["a","b","c"], "aaaaabbbbb"))
console.log(numOfStrings(["a","a","a"], word = "ab"))
var numOfStrings = function(patterns, word) {

    return patterns.filter((item) => word.includes(item)).length
}

console.log(numOfStrings(["a","abc","bc","d" ],  "abc"))
console.log(numOfStrings(["a","b","c"], "aaaaabbbbb"))
console.log(numOfStrings(["a","a","a"], word = "ab"))