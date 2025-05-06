function isAnagram (word1 , word2){
word1 = word1.split("").sort()
word2 = word2.split("").sort()
return  word1.includes(word2) ? true : false
}
console.log(isAnagram("anagram", "nagaram" ))