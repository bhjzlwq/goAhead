// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
// 给定一个代表每个房屋存放金额的非负整数数组，计算你在不触动警报装置的情况下，能够偷窃到的最高金额。

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  let temp =[];
  if(nums.length){
    return f(nums.length-1);
  } else {
    return 0;
  }
  function f(n){
    if(temp[n]){
      return temp[n];
    }
    if(n===0){
      return temp[0]=nums[0];
    }
    if(n===1){
      return temp[1]=Math.max(nums[0],nums[1]);
    }
    if(n===2){
      return temp[2]=Math.max(nums[0]+nums[2],nums[1]);
    }
    temp[n] = Math.max(f(n-2)+nums[n],f(n-1),f(n-3)+nums[n]);
    return temp[n];
  }
};
// console.log(rob([2,1,1,2,3,4,1,2,6,5,4,1,6]))

// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
// 注意：给定 n 是一个正整数。
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  var temp =[0,1,2];
  return f(n);
  function f(n) {
    if(temp[n]!==undefined){
      return temp[n];
    }
    if(n===1 || n===2){
      return n
    }
    var res = f(n-1)+f(n-2);
    temp[n]=res;
    return res;
  }
};
// console.log(climbStairs(4))

// 给定一个数组，它的第 i 个元素是一支给定股票第 i 天的价格。
// 如果你最多只允许完成一笔交易（即买入和卖出一支股票），设计一个算法来计算你所能获取的最大利润。
// 注意你不能在买入股票前卖出股票。
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

};

// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
//  [-2,1,-3,4,-1,2,1,-5,4],
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const sumArr=[nums[0]];
  let sum = 0;
  f(0);
  function f(n){
    for(let i=n; i<nums.length; i++){
        sum+=nums[i]
      if(sum<=0){
        sumArr.push(sum)
        sum=0;
        return f(n+1)
      }else{
        sumArr.push(sum)
      }
    }
  }
  return Math.max(...sumArr)
};
console.log(maxSubArray([-2,-1]))
