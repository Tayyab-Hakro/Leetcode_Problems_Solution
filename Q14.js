/**
 * @param {string[]} words
 * @return {string[]}
 */
/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    const result = [];

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[j].includes(words[i])) {
                result.push(words[i]);
                break; // No need to check further once a match is found
            }
        }
    }

    return result;
};

console.log(stringMatching(["mass","as","hero","superhero"]))