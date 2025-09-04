/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
let convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    const letterInterval = 2 * numRows - 2;
    let result = '';

    for (let row = 0; row < numRows; row++) {
        for (let i = row; i < s.length; i += letterInterval) {
            result += s[i]; // Letter from column

            const zigzagLetterInterval = i + letterInterval - 2 * row;
            const isMiddleRow = row !== 0 && row !== numRows - 1;

            if (isMiddleRow && zigzagLetterInterval < s.length) {
                result += s[zigzagLetterInterval]; // Letter from zigzag transition
            }
        }
    }

    return result;
}

console.log(convert('PAYPALISHIRING', 3));
console.log(convert('PAYPALISHIRING', 4));
console.log(convert('A', 1));