/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function(groupSizes) {
    // Create a Map to keep track of people based on group sizes.
    // key = group size, value = array of person indices needing that group size
    const map = new Map();  

    // This will store the final result (list of groups)
    const result = [];

    // Loop through each person (index represents person ID)
    for (let i = 0; i < groupSizes.length; i++) {
        const size = groupSizes[i]; // The group size that person i belongs to

        // If there's no existing group of this size yet, create an empty array for it
        if (!map.has(size)) map.set(size, []);

        // Add the current person (i) to the appropriate group array
        map.get(size).push(i);

        // If the group has reached the required size, we consider it complete
        if (map.get(size).length === size) {
            // Add the full group to the result list
            result.push(map.get(size));

            // Reset the group array for this size to start forming the next group
            map.set(size, []);
        }
    }

    // Return the list of grouped people
    return result;
};

console.log(groupThePeople( [3,3,3,3,3,1,3]))