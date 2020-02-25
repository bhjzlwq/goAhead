/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let sumArr =[], map = [[]];
    for(let a = triangle.length-1,b=0;b < triangle.length;b++){
      sumArr.push(getSum(a,b));
    }
    return Math.min(...sumArr);
    function getSum(i,j) {
      if(map[i] && map[i][j]){
        return map[i][j];
      }
      let res;
      if(i===0){
        res = triangle[0][0];
        map[0][0] = res;
        return res
      }
      if(j===0){
        res = getSum(i-1,0)+triangle[i][0];
      }
      if(j===i){
        res = getSum(i-1,j-1)+triangle[i][j];
      }
      if(res===undefined){
        res = Math.min(getSum(i-1,j-1),getSum(i-1,j))+triangle[i][j];
      }
      if(!map[i]){
        map[i] = [];
      }
      map[i][j] = res;
      return res
    }
};
// @lc code=end

