/**
 * @param {number[]} nums
 * @return {number}
 */
let removeDuplicates = function(nums) {
    if (!nums || nums.length < 1) {
        return nums.length;
    }

    let k = 1;

    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[k - 1]) { // search first element which not dublicate with current element on (k-1) index and insert them next
            nums[k] = nums[j];
            k++;
        }
    }

    return k;  
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));