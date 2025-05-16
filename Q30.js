/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
let divide = x % 10
let check  = Math.floor(x / 10)
    divide = divide.toString()
    check = check.toString()
let joined = divide +check
joined = parseInt(joined)
return joined.sort()
};
console.log(reverse(123))