/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
let removeElement = function(nums, val) {
    let k = 0;

    for (let i = nums.length - 1; i >= 0; i--) {
        if (nums[i] == val) {
            [nums[i], nums[nums.length-k-1]] = [nums[nums.length-k-1], nums[i]];
            k++;
        }
    }
    
    return nums.length - k;
};

alert(`${removeElement([3,2,2,3], 3)}\n${removeElement([0,1,2,2,3,0,4,2], 2)}`); 