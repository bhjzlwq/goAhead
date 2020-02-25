/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
  // 双指针法
  var res ="";
  var carry = 0;
  var temp = 0;
  var n1,n2;
  var i = num1.length-1;
  var j = num2.length-1;
  while (i>-1 || j>-1) {
    n1 = i>=0 ? num1[i]:0;
    n2 = j>=0 ? num2[j]:0;
    temp = n1*1+n2*1+carry;
    if(temp>9){
      carry = 1;
      res = (temp-10) + res ;
    } else {
      carry = 0;
      res = temp + res ;
    }
    i--;
    j--;
  }
  return carry ? 1+res : res;
  // 第一遍
  // if(num1.length>num2.length){
  //   return add(num1,num2);
  // }else{
  //   return add(num2,num1);
  // }
  // function add(str1,str2) {
  //   const sums = [];
  //   let n1,n2,sum,flag=0;
  //   for(let i = str1.length-1,j = str2.length-1;i>-1;i--,j--){
  //     n1 = str1[i] || 0;
  //     n2 = str2[j] || 0;
  //     sum = n1*1+n2*1+flag;
  //     if(sum > 9){
  //       flag = 1;
  //       sums.push(sum-10);
  //     }else{
  //       flag = 0;
  //       sums.push(sum);
  //     }
  //   }
  //   if(flag){
  //     sums.push(1);
  //   }
  //   return sums.reverse().join('');
  // }
};
// @lc code=end

