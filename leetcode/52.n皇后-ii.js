/*
 * @lc app=leetcode.cn id=52 lang=javascript
 *
 * [52] N皇后 II
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function(n) {
  let res = 0;
  let deal = (row, temp) => {
    if (row === n) {
      res++;
      return;
    }
    for (let col = 0; col < n; col++) {
      if (temp.some((co, ro) =>co === col || ro + co === row + col || ro - co === row - col)) continue;
      deal(row + 1, [...temp, col]);
    }
  };
  deal(0, []);
  return res;
};
// @lc code=end

