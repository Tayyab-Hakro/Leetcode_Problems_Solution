/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let half = s.length /2
    let res = []
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
    let first  = []
    for(let i = 0 ; i<s.length ;i+=half){
        if(vowels.includes(s[i])){
            res.push(s[i])
        }
        if(vowels.includes(s[i+half])){
     first.push(s[i+half])
        }

    }
return fi
};
console.log(halvesAreAlike("book"))
console.log(halvesAreAlike("textbook"))