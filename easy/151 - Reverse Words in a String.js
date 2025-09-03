/**
 * @param {string} s
 * @return {string}
 */
let reverseWords = function(s) {
    const regExp = /\w+/gm;
    let result = s.match(regExp);
    return result.reverse().join(' ');
};

console.log(reverseWords('the sky is blue'));
console.log(reverseWords('  hello world  '));
console.log(reverseWords('a good   example'));