/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
let minSubArrayLen = function(target, nums) {
    let [sum, length, startIndex] = [0, nums.length + 1, 0];
    for (let endIndex = 0; endIndex < nums.length; endIndex++) {
        sum += nums[endIndex];

        while (sum >= target) {
            if (endIndex - startIndex + 1 < length) {
                length = endIndex - startIndex + 1;
            }

            sum -= nums[startIndex];
            startIndex++;
        }
    }

    return length !== nums.length + 1 ? length : 0;
};

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));
console.log(minSubArrayLen(4, [1,4,4]));
console.log(minSubArrayLen(11, [1,1,1,1,1,1,1,1]));
console.log(minSubArrayLen(213, [12,28,83,4,25,26,25,2,25,25,25,12]));