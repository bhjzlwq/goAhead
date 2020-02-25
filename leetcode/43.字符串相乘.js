/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  if(num1==='0'||num2==='0'){return '0'}
  var len1 = num1.length;
  var len2 = num2.length;
  var store = new Array(len1+len2-1).fill(0);
  var carry=0,r='',sum=0;
  for(let i=0; i<len1;i++){
    for(let j=0; j<len2; j++){
      store[i+j] += num1[i]*num2[j];
    }
  }
  let k = store.length;
  while(k--){
    sum = carry+store[k];
    carry = sum / 10 | 0;
    r = sum%10 + r;
  }
  return carry ? carry+r:r;
}
// @lc code=end

