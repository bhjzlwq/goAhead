/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
  let map ={};
  let res =1;
  for(let i =0;i<nums.length;i++){
    if(map[nums[i]]===undefined&&nums[i]>0){
      map[nums[i]] =1;
    }
  }
};
// @lc code=end

