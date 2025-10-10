/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
let rotate = function(matrix) {
    const edgeLength = matrix.length;

    let top = 0;
    let bottom = edgeLength - 1;

    while (top < bottom) {
        for (let col = 0; col < edgeLength; col++) {
            let temp = matrix[top][col];
            matrix[top][col] = matrix[bottom][col];
            matrix[bottom][col] = temp;
        }
        top++;
        bottom--;
    }

    for (let row = 0; row < edgeLength; row++) {
        for (let col = row + 1; col < edgeLength; col++) {
            let temp = matrix[row][col];
            matrix[row][col] = matrix[col][row];
            matrix[col][row] = temp;
        }
    }
};

let matrix1 = [[1,2,3],[4,5,6],[7,8,9]];
let matrix2 = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];

rotate(matrix1);
rotate(matrix2);
console.log(matrix1);
console.log(matrix2);