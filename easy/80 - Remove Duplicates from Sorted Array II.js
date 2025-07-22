/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    if (!nums || nums.length < 2) {
        return nums.length;
    }

    let k = 2;
    let isTwice = nums[k - 1] === nums[k - 2];

    for (let j = 2; j < nums.length; j++) {
        if (nums[j] === nums[k - 1] && !isTwice) { // when dublicates appears but first time
            nums[k] = nums[j];
            isTwice = true;
            k++;
            continue;
        }

        if (!isTwice && nums[j] !== nums[k - 1] && nums[k - 1] !== nums[k - 2]
            || isTwice && nums[j] !== nums[k - 1]) { // search first element which not dublicate with current element on (k-1) index
            nums[k] = nums[j];
            isTwice = false;
            k++;
        }
    }

    return k;   
};

console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]));