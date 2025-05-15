/**
 * @param {number[][]} points
 * @return {number}
 */
var maxWidthOfVerticalArea = function(points) {
    // Step 1: Extract only x-coordinates
    let xCoords = points.map(point => point[0]);
    // Step 2: Sort the x-coordinates
    xCoords.sort((a, b) => a - b);

    // Step 3: Find the maximum gap between consecutive x-coordinates
    let maxGap = 0;
    for (let i = 1; i < xCoords.length; i++) {
        maxGap = Math.max(maxGap, xCoords[i] - xCoords[i - 1]);
    }

    return maxGap;
};
console.log(maxWidthOfVerticalArea([[8,7],[9,9],[7,4],[9,7]]))