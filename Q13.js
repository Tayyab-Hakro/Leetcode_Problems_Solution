var uncommonFromSentences = function(s1, s2) {
    const allWords = (s1 + " " + s2).split(" ");
    console.log(allWords)
    const freq = {};

    for (let word of allWords) {
        freq[word] = (freq[word] || 0) + 1;
    }

    return Object.keys(freq).filter(word => freq[word] === 1);
};

console.log(uncommonFromSentences("this apple is sweet", "this apple is sour"));
