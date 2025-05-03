/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack = [];
    for(let char of s){
        if(isNaN(char)){
            console.log(stack.push(char))
        }else{
            char.length >0
            stack.pop()

        }
    }
    return stack.join("")
};

console.log(clearDigits("cb34"))
console.log(clearDigits("abc"))

var clearDigits = function(s) {
    let res = "";
    for (let c of s) {
        if (/[0-9]/.test(c)) {
            if (res.length > 0) {
                res = res.slice(0, -1); // Remove last char
            }
        } else {
            res += c;
        }
    }
    return res;
};