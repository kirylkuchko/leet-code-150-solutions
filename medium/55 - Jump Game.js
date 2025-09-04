/**
 * @param {number[]} nums
 * @return {boolean}
 */
let canJump = function(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (i === nums.length - 1) {
            return true;
        }

        if (nums[i] === 0 && !canJumpOverZero(nums, i)) {
            return false;
        }
    }

    return true;
};

let canJumpOverZero = function(nums, indexOfZero) {
    for (let i = indexOfZero - 1; i >= 0; i--) {
        if (i + nums[i] > indexOfZero) {
            return true
        }
    }

    return false;
}

console.log(canJump([2,3,1,1,4]));
console.log(canJump([3,2,1,0,4]));
console.log(canJump([2,0,0]));

let canJumpV2 = function(nums) {
    let jumpReachability = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (jumpReachability === 0) {
            return false;
        }

        jumpReachability = Math.max(nums[i], --jumpReachability);

        if (jumpReachability + i >= nums.length - 1) {
            return true;
        }
    }

    return true;
}

console.log(canJumpV2([2,3,1,1,4]));
console.log(canJumpV2([3,2,1,0,4]));
console.log(canJumpV2([2,0,0]));