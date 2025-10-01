/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
let canConstruct = function(ransomNote, magazine) {
    let magazineDict = {};

    for (let i = 0; i < magazine.length; i++) { // For loop instead of for-of loop, because of performance
        let currentLetter = magazine[i];
        magazineDict[currentLetter] = magazineDict[currentLetter] ? magazineDict[currentLetter] + 1 : 1;
    }

    for (let j = 0; j < ransomNote.length; j++) {
        if (!magazineDict[ransomNote[j]]) {
            return false
        }
        
        magazineDict[ransomNote[j]] -= 1 
    }

    return true;
};

console.log(canConstruct('a', 'b'));
console.log(canConstruct('aa', 'ab'));
console.log(canConstruct('aa', 'aab'));