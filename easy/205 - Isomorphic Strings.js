/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let isIsomorphic = function(s, t) {
    const letterIndexS = {};
    const letterIndexT = {};
    let i = 0;

    while (i < s.length) {
        if (!(s[i] in letterIndexS)) {
            letterIndexS[s[i]] = i;
        }

        if (!(t[i] in letterIndexT)) {
            letterIndexT[t[i]] = i;
        }

        if (letterIndexS[s[i]] !== letterIndexT[t[i]]) {
            return false;
        }

        i++;
    }

    return true; 
};

console.log(isIsomorphic('egg', 'add'));
console.log(isIsomorphic('foo', 'bar'));
console.log(isIsomorphic('paper', 'title'));
console.log(isIsomorphic('badc', 'baba'));