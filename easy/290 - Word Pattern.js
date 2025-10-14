/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
let wordPattern = function (pattern, s) {
    let hash1 = {};
    let hash2 = {};
    let arr = s.split(" ");

    if (arr.length != pattern.length) { 
        return false 
    }

    for (let i = 0; i < pattern.length; i++) {
        let word2 = arr[i];
        if (!hash1[pattern[i]] && !hash2.hasOwnProperty(arr[i])){
            hash1[pattern[i]] = arr[i];
            hash2[arr[i]] = pattern[i];
        } else {
            if (hash1[pattern[i]] != arr[i] || hash2[arr[i]] != pattern[i]) {
                return false;
            }
        }
    }

    return true;
}

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("aaaa", "dog cat cat dog"));