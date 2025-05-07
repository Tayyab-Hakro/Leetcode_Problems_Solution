/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let flat = grid.flat();
    let n = flat.length;
    let count = new Array(n + 1).fill(0);
    
    for (let num of flat) {
        count[num]++;
    }
    let repeated, missing;
    for (let i = 1; i <= n; i++) {
        if (count[i] === 2) repeated = i;
        if (count[i] === 0) missing = i;
    }
    
    return [repeated, missing];
};

console.log(findMissingAndRepeatedValues([[1, 3], [2, 2]])); // Output: [2, 4]
