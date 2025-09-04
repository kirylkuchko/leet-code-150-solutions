/**
 * @param {number[]} nums
 * @return {number}
 */
let jump = function(nums) {
    let currentJumpLength = nums[0];
    let usedJumpLength = 0;
    let minNumberOfJumps = 1;

    if (nums.length === 1) {
        return 0;
    }

    for (let i = 1; i < nums.length; i++) {
        usedJumpLength++;
        if (nums[i] + usedJumpLength > currentJumpLength || usedJumpLength === currentJumpLength) {
            currentJumpLength = nums[i];
            usedJumpLength = 0;
            minNumberOfJumps++;
        }

        if (currentJumpLength + i >= nums.length - 1) {
            break;
        }
    }

    return minNumberOfJumps;
};

/* console.log(jump([2,3,1,1,4]));
console.log(jump([2,3,0,1,4])); */
console.log(jump([1,2]));