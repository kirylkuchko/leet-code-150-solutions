/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
let rotate = function(nums, k) {
    const shiftIndex = () => {
       return nums.length - (k % nums.length);
    };

    let shiftedValues = nums.splice(shiftIndex());
    nums.unshift(...shiftedValues);

    return nums;
};

console.log(rotate([1,2,3,4,5,6,7], 3));
console.log(rotate([1,2], 7));