/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
let merge = function(nums1, m, nums2, n) {
    let [i,j] = [m,n];

    while (j > 0) {
        let k = i+j-1;
        if (i == 0 || nums1[i-1] < nums2[j-1]) {
            nums1[k] = nums2[--j];
        } else {
            nums1[k] = nums1[--i];
        }
    }

    return nums1;
};

alert(`${merge([1,2,3,0,0,0],3, [2,5,6], 3)}\n${merge([1], 1, [], 0)}\n${merge([0], 0, [4], 1)}`); 

