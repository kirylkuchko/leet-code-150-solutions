/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function(nums, target) {
    const valueIndexPairs = {};
    for (let i = 0; i < nums.length; i++) {
        if (valueIndexPairs.hasOwnProperty(target-nums[i])) {
            return [i, valueIndexPairs[target-nums[i]]];
        }

        valueIndexPairs[nums[i]] = i;
    }
};

console.log(twoSum([2,7,11,15], 9));
console.log(twoSum([3,2,4], 6));
console.log(twoSum([3,3], 6));
