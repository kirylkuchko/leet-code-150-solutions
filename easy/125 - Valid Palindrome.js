/**
 * @param {string} s
 * @return {boolean}
 */
let isPalindrome = function(s) {
    const alphanumericRegExp = new RegExp(/[^a-z0-9]/, "gm");
    const cleanString = s.toLowerCase().replace(alphanumericRegExp, '');
    for (let i = 0; i < cleanString.length / 2; i++) {
        if (cleanString[i] !== cleanString[cleanString.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
};

console.log(isPalindrome('A man, a plan, a canal: Panama'));
console.log(isPalindrome('race a car'));
console.log(isPalindrome(' '));
console.log(isPalindrome('ab_a'));