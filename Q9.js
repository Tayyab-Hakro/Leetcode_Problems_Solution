var relativeSortArray = function(arr1, arr2) {
    let countMap = new Map();

    // Count frequency of each number in arr1
    for (let num of arr1) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }

    let result = [];

    // Place elements in arr2 order
    for (let num of arr2) {
        while (countMap.get(num)) {
            result.push(num);
            countMap.set(num, countMap.get(num) - 1);
        }
    }

    // Handle remaining elements not in arr2
    let remaining = [];
    for (let [num, count] of countMap.entries()) {
        while (count > 0) {
            remaining.push(num);
            count--;
        }
    }

    // Sort remaining and append
    remaining.sort((a, b) => a - b);
    return result.concat(remaining);
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19], [2,1,4,3,9,6]));