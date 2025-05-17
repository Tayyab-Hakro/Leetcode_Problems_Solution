/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function(s) {
    let window = []
    let count = 0
    for(let i = 0 ; i<s.length-3  ; i++){
        const win = s.substring(i ,i+3)
        window.push(win)
        if(new Set(window).size === 3){
            count++
        }
    }
    return count
};
console.log(countGoodSubstrings( "xyzzaz"))