/**
 * @param {number[]} nums
 * @return {number}
 */
let longestConsecutive = function(nums) {
    const numSet = new Set(nums);
    let longest = 0;

    for (let number of numSet) {
        if (!numSet.has(number - 1)) {
            let currentSequence = 1;

            while (numSet.has(number + currentSequence)) {
                currentSequence++;
            }

            longest = Math.max(longest, currentSequence);
        }
    }

    return longest;    
};

console.log(longestConsecutive([100,4,200,1,3,2]));
console.log(longestConsecutive([0,3,7,2,5,8,4,6,0,1]));
console.log(longestConsecutive([1,0,1,2]));