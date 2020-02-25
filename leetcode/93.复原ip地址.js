/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function(s) {
    // 暴力法 TODO 回溯法+剪枝
    if(s.length<4||s.length>12){return []}
    function checkNum(str) {
      return str ==='' || str - 255>0 || (str.length>1 && str[0]==='0')
    }
    var ans=[];
    var str0,str1,str2,str3;
    for(let i=1;i<4;i++){
      str0 = s.substr(0, i);
      if(checkNum(str0)){
        continue;
      }
      for(let j=1;j<4;j++){
        str1 = s.substr(i, j);
        if(checkNum(str1)){
          continue;
        }
        for(let k=1;k<4;k++){
          str2 = s.substr(i+j, k);
          if(checkNum(str2)){
            continue;
          }
          str3 = s.substr(i+j+k);
          if(checkNum(str3)){
            continue;
          }
          ans.push(`${str0}.${str1}.${str2}.${str3}`)
        }
      }
    }
    return ans
};
// @lc code=end

