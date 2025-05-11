let arr = [1,2,3]
let res = []
for(let i = 0 ;i <arr.length ;i++){
    for(let j = i ; j<arr.length ;j++){
        res.push([arr[j]])
    }
}
console.log(res)