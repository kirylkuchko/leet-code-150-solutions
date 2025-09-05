/**
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = function(nums) {
    const answer = Array(nums.length).fill(1);
    let left = 1;
    let right = 1;

    for (let i = 0; i < nums.length; i++) {
        answer[i] *= left;
        left *= nums[i];
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        answer[i] *= right;
        right *= nums[i];
    }

    return answer; 
};

console.log(productExceptSelf([1,2,3,4]));
console.log(productExceptSelf([-1,1,0,-3,3]));