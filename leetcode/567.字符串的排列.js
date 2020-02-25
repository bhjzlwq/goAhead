/*
 * @lc app=leetcode.cn id=567 lang=javascript
 *
 * [567] 字符串的排列
 */

// @lc code=start
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let len1 = s1.length;
  let len2 = s2.length;
  if(len1>len2){return false}
  let map = {};
  for (let i = 0; i<len1; i++){
    map[s1[i]] = map[s1[i]] ? map[s1[i]]+1 : 1;
  }
  for (let i = 0; i<len2; i++){
    let index = s1.indexOf(s2[i]);
    if(index > -1){
      if(matchS1(s2.substr(i,len1))){
        return true;
      }
    }
  }
  function matchS1(str2) {
    let temp = Object.assign({},map);
    for (let i = 0; i<len1; i++){
      if(temp[str2[i]]){
        temp[str2[i]]-=1;
      }else{
        return false;
      }
    }
    return true;
  }
  return false;
};
// @lc code=end

