/**
 * @param {string[]} strs
 * @return {string[][]}
 */
let groupAnagrams = function(strs) {
    let groupedAnagrams = {};

    for (let string of strs) {
        let key = string.split('').sort().join('');
        if (!groupedAnagrams[key]) {
            groupedAnagrams[key] = [];
        }

        groupedAnagrams[key].push(string);
    }

    return Object.values(groupedAnagrams);
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));
console.log(groupAnagrams([""]));
console.log(groupAnagrams(["a"]));
