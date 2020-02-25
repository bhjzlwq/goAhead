/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let len = s.length;
  let maxLen = 0;
  let str = '';
  for(let i =0; i<len; i++){
    let index = str.indexOf(s[i]);
    if(index > -1){
      str = str.slice(index+1)+s[i];
    }else{
      str = str+s[i];
    }
    if(str.length > maxLen){
      maxLen = str.length;
    }
  }
  return maxLen;
};
// @lc code=end

