/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  const len = nums.length;
  const res = [];
  if(len<3){return res}
  nums.sort((a,b)=>a-b);
  for (let i=0;i<len-1;i++){
    if(nums[i]>0){
      return res;
    }
    if(i>0&&nums[i]===nums[i-1]){
      continue;
    }
    let left = i+1;
    let right = len-1;
    while (left<right){
      let sum = nums[left]+nums[i]+nums[right];
      if(sum===0){
        res.push([nums[i],nums[left],nums[right]]);
        while (nums[left]===nums[left+1]) {
          left++;
        }
        while (nums[right]===nums[right-1]) {
          right--;
        }
        left++;
        right--;
      }else if(sum>0){
        right--;
      }else{
        left++;
      }
    }
  }
  return res
};
// 第一遍指针搞错了
// var threeSum = function(nums) {
//   const len = nums.length;
//   const res = [];
//   if(len<3){return res}
//   nums.sort((a,b)=>a-b);
//   for (let i=1;i<len-1;i++){
//     let start = 0;
//     let end = len-1;
//     while (start<i && end>i && nums[start]<=0 && nums[end]>=0 ) {
//       let sum = nums[start]+nums[end]+nums[i]
//       if(sum===0){
//         res.push([nums[start],nums[i],nums[end]].join(","));
//         if(nums[start]===nums[end]){
//           break;
//         }
//         start++;
//         end--;
//       }else if(sum>0){
//         end--;
//       }else{
//         start++;
//       }
//     }
//   }
//   return [...new Set(res)].map(item=>item.split(','))
// };
// @lc code=end

