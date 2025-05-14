var countNegatives = function(grid) {
    let count = 0;
    let rows = grid.length;
    let cols = grid[0].length;
    console.log(cols)
    for (let i = 0; i < rows; i++) {
        let low = 0;
        let high = cols - 1;
        
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            
            if (grid[i][mid] < 0) {
                high = mid - 1; // look in the left half
            } else {
                low = mid + 1;  // look in the right half
            }
        }
        
        // all elements from index `low` to end are negative
        count += (cols - low);
    }
    
    return count;
};
console.log(countNegatives([
  [4, 3, 2, -1],
  [3, 2, 1, -1],
  [1, 1, -1, -2],
  [-1, -1, -2, -3]
]));
