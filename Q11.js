/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
let stack = []
for(let char of operations){
    if(!isNaN(char) ){
        stack.push(parseInt(char))
    }else if(char === "C"){
        stack.pop()
    }else if(char === "D"){
        stack.push(stack[stack.length -1]*2)
    }else if(char === "+"){
        stack.push(stack[stack.length -1]+ stack[stack.length -2])
    }else{
   return     stack
    }
}
return stack.reduce((sum , cur) => sum+=cur ,0)
}
console.log(calPoints(["5","2","C","D","+"]))