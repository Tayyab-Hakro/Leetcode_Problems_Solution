/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
   let stack = []
    for(let char of s){
        if(stack.length > 0 && stack[stack.length  -1] === char){
            stack.pop()
        }else{
            stack.push(char)
        }
    }
    return stack
};
console.log(removeDuplicates("abbaca"))