var minSteps = function(s, t) {
    let countS = new Array(26).fill(0);
    let countT = new Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        countS[s.charCodeAt(i) - 97]++;
    }

    for (let i = 0; i < t.length; i++) {
        countT[t.charCodeAt(i) - 97]++;
    }

    let steps = 0;
    for (let i = 0; i < 26; i++) {
        steps += Math.abs(countS[i] - countT[i]);
    }

    return steps / 2; // since each mismatch affects both strings
};

console.log(minSteps("bab", "aba")); // Output: 0
