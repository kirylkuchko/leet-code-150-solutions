/**
 * @param {string[]} strs
 * @return {string}
 */
let longestCommonPrefix = function(strs) {
    let commonPrefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        if (commonPrefix === '') {
            break;
        }

        let j = 0;
        while (j < commonPrefix.length && j < strs[i].length && commonPrefix[j] === strs[i][j]) {
            j++;
        }

        commonPrefix = strs[i].slice(0, j);
    }

    return commonPrefix;
};

let longestCommonPrefixRevert = function(strs) {
    let commonPrefix = strs[0];
    let commonPrefixLength = commonPrefix.length;

    for (let i = 1; i < strs.length; i++) {
        if (commonPrefix === '') {
            break;
        }

        while (commonPrefix !== strs[i].substring(0, commonPrefixLength)) {
            commonPrefixLength--;
            commonPrefix = commonPrefix.substring(0, commonPrefixLength);
        }
    }

    return commonPrefix;    
};

console.log(longestCommonPrefix(["flower","flow","flight"]));
console.log(longestCommonPrefix(["dog","racecar","car"]));

console.log(longestCommonPrefixRevert(["flower","flow","flight"]));
console.log(longestCommonPrefixRevert(["dog","racecar","car"]));