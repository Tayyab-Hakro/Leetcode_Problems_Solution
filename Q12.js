var minSteps = function(s, t) {
    let freq = {};
    let freq2 = {};

    // Count frequency of each character in s
    for (let char of s) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Count frequency of each character in t
    for (let char of t) {
        freq2[char] = (freq2[char] || 0) + 1;
    }

    let count = 0;

    // Calculate differences for all characters a-z
    for (let i = 0; i < 26; i++) {
        let ch = String.fromCharCode(97 + i); // 'a' to 'z'
        let count1 = freq[ch] || 0;
        let count2 = freq2[ch] || 0;
        count += Math.abs(count1 - count2);
    }

    return count;
};

console.log(minSteps("leetcode", "practice")); // Output: 5
// console.log(minSteps("bab", "aba"));        // Output: 1
