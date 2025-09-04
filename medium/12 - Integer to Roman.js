/**
 * @param {number} num
 * @return {string}
 */
let intToRoman = function(num) {
    const romanNumeralsDictionary = new Map([
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ]);
    let result = '';

    romanNumeralsDictionary.forEach((symbol, value) => {
        if (num === 0) {
            return;
        }

        const valueCount = Math.floor(num / value);
        result += symbol.repeat(valueCount);
        num -= count * value;
    });

    return result; 
};

console.log(intToRoman(3749));
console.log(intToRoman(58));
console.log(intToRoman(1994));

