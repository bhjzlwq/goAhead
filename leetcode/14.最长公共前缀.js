/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
  if(!strs.length){return ''}
  let len = strs[0].length;
  let str = '';
  for(let i = 0; i < len; i++){
    let flag = false;
    for(let j = 0;j<strs.length;j++){
      if(strs[j][i]!==strs[0][i]){
        flag = true;
        break;
      }
    }
    if(flag){
      return str;
    }
    str +=strs[0][i];
  }
  return str;
};
// var longestCommonPrefix = function(strs) {
//   if(!strs.length){return ''}
//   let str = '';
//   for(let i = 0; i<strs[0].length;i++){
//     if(strs.every((item)=>{ return item[i] ===strs[0][i]})){
//       str += strs[0][i];
//     }else{
//       break;
//     }
//   }
//   return str;
// };
// @lc code=end

