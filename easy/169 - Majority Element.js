/**
 * @param {number[]} nums
 * @return {number}
 */
let majorityElement = function(nums) {
    let majorityElement = 0;
    let majorityElementAppears = 0;
        
    for (let number of nums) {
        if (majorityElementAppears === 0) {
            majorityElement = number;
        }
        
        majorityElementAppears += (number === majorityElement) ? 1 : -1;
    }
        
    return majorityElement;
};

console.log(majorityElement([6,5,5]));