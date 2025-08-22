/**
 * @param {string} s
 * @return {number}
 */
let romanToInt = function(s) {
    const romanNumeralsDictionary = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let result = 0;

    for (let i = 0; i < s.length - 1; i++) {
        if (romanNumeralsDictionary[s[i]] < romanNumeralsDictionary[s[i + 1]]) {
            result -= romanNumeralsDictionary[s[i]];
        } else {
            result += romanNumeralsDictionary[s[i]];
        }
    }

    result += romanNumeralsDictionary[s[s.length - 1]];
    return result;
};

console.log(romanToInt('III'));
console.log(romanToInt('LVIII'));
console.log(romanToInt('MCMXCIV'));