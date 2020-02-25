/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  function sort(left=0,right=nums.length-1){
    if(left>=right){return nums[left];}
    let i = left;
    let j = right;
    let pivot = nums[j];
    while (i<j) {
      while (i<j && nums[i]>=pivot) {
        i++;
      }
      nums[j] = nums[i];
      while (i<j && nums[j]<= pivot) {
        j--;
      }
      nums[i] = nums[j];
    }
    nums[j]=pivot;
    if(j+1===k){
      return nums[j];
    }else if(j+1>k){
      return sort(left,j-1);
    }else {
      return sort(j+1,right);
    }
  }
  return sort();
};
// @lc code=end

