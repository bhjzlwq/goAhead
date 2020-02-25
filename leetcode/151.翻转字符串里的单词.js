/*
 * @lc app=leetcode.cn id=151 lang=javascript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
  let w = '';
  let str = '';
  for(let i =s.length; i>0; i--){
    if(s[i]===' '){
      if(str && str[str.length-1]!==' '){
        str = str +' '+w;
        w='';
      }
    } else {
      w = s[i]+w;
    }
  }
  if(w){
    str += w;
  }
  return str;
};
// @lc code=end

