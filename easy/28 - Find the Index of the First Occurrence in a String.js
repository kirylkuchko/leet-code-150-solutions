/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
let strStrIndexOf = function(haystack, needle) {
    return haystack.indexOf(needle);
};

let strStr2Pointers = function(haystack, needle) {
    let startIndex = -1;
    let i = 0;
    while (i < haystack.length) {
        if (haystack[i] === needle[0]) {
            startIndex = i;
            let j = 0;
            while (j < needle.length && startIndex !== -1) {
                if (haystack[i + j] !== needle[j]) {
                    startIndex = -1;
                }

                j++;
            }

            if (startIndex !== -1) {
                return startIndex;
            }
        }

        i++;
    }

    return startIndex;
};

console.log(strStrIndexOf('sadbutsad', 'sad'));
console.log(strStrIndexOf('leetcode', 'leeto'));

console.log(strStr2Pointers('sadbutsad', 'sad'));
console.log(strStr2Pointers('leetcode', 'leeto'));
