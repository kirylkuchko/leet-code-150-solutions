/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLongestSubstring = function(s) {
    let maxSubstringLangth = 0;
    let substring = '';
    for (let i = 0; i < s.length; i++) {
        let currentLetterSubstringIndex = substring.indexOf(s[i]);
        if (currentLetterSubstringIndex !== -1) { // includes
            maxSubstringLangth = Math.max(maxSubstringLangth, substring.length);
            substring = currentLetterSubstringIndex === substring.langth - 1 
                ? ''
                : substring.slice(substring.indexOf(s[i]) + 1);
        }

        substring += s[i];
    }

    return Math.max(maxSubstringLangth, substring.length);
};

console.log(lengthOfLongestSubstring('abcabcbb'));
console.log(lengthOfLongestSubstring('bbbbb'));
console.log(lengthOfLongestSubstring('pwwkew'));
console.log(lengthOfLongestSubstring(' '));
