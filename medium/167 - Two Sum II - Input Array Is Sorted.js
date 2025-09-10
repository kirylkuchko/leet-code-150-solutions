/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let total = numbers[left] + numbers[right];

        if (total === target) {
            return [left + 1, right + 1];
        }
        
        total > target ? right-- : left++;
    } 
};

let twoSumN2 = function(numbers, target) {
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (target === numbers[i] + numbers[j]) {
                return [i + 1, j + 1]
            }
        }
    } 
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([2,3,4], 6));
console.log(twoSum([-1,0], -1));

console.log(twoSumN2([2,7,11,15], 9));
console.log(twoSumN2([2,3,4], 6));
console.log(twoSumN2([-1,0], -1));