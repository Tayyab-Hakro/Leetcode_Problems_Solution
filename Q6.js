function moveZeros(arr) {
    let nonZero = arr.filter(n => n !== 0);
    let zeroCount = arr.length - nonZero.length;
    return [...nonZero, ...Array(zeroCount).fill(0)];
  }
  
console.log(moveZeros([1,2,0,3,4]))  