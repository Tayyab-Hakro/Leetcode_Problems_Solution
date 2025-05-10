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

    // Loop over all lowercase letters 'a' to 'z'
    for (let i = 0; i < 26; i++) {
        let ch = String.fromCharCode(97 + i); // 97 is 'a'
        let count1 = freq[ch] || 0;
        let count2 = freq2[ch] || 0;
        count += Math.abs(count1 - count2);
    }

    return count;
};

console.log(minSteps("leetcode", "practice")); // Output: 5

