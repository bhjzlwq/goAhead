// 假如这里有 n 个台阶，每次你可以跨 1 个台阶或者 2 个台阶，请问走这 n 个台阶有多少种走法？
// 如果有 7 个台阶，你可以 2，2，2，1 这样子上去，也可以 1，2，1，1，2 总共有多少种走法呢？
function steps(num){
  if(num===1){return 1}
  if(num===2){return 2}
  return steps(num-1)+steps(num-2)
}

// 递归需要警惕两个问题
// 1、堆栈溢出 （简单处理方法是限制调用深度）
// 2、重复计算 （将已经求结果的值保存起来）

const temp = [0, 1, 2];
function stepsX(num){
  if(!temp[num]){
    temp[num] =  stepsX(num - 1) + stepsX(num - 2);
  }
  return temp[num];
}

module.exports ={
  steps,
  stepsX
}
