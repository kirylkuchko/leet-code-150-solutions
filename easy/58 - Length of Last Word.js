/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function(s) {
    let lastWordLength = 0;
    let isSpace = false;
    for (let char of s) {
        if (char !== ' ') {
            if (isSpace) {
                lastWordLength = 0;
                isSpace = false;
            }

            lastWordLength++;
        } else {
            isSpace = true;
        }
    }

    return lastWordLength;
};

let lengthOfLastWordWithRegExp = function(s) {
    const match = s.match(/(\S+)\s*$/);
    return match ? match[1].length : 0;
};

let lengthOfLastWordOptimized = function(s) {
    let end = s.length - 1;

    while (end >= 0 && s[end] === ' ') {
        end--;
    }

    let start = end;
    while (start >= 0 && s[start] !== ' ') {
        start--;
    }

    return end - start;    
};

console.log(lengthOfLastWord('Hello World'));
console.log(lengthOfLastWord('   fly me   to   the moon  '));
console.log(lengthOfLastWord('luffy is still joyboy'));

console.log(lengthOfLastWordWithRegExp('Hello World'));
console.log(lengthOfLastWordWithRegExp('   fly me   to   the moon  '));
console.log(lengthOfLastWordWithRegExp('luffy is still joyboy'));

console.log(lengthOfLastWordOptimized('Hello World'));
console.log(lengthOfLastWordOptimized('   fly me   to   the moon  '));
console.log(lengthOfLastWordOptimized('luffy is still joyboy'));