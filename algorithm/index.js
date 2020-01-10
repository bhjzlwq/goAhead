const BubbleSort = require("./bubbleSort");
const mergeSort = require("./mergeSort");
const quickSort = require("./quickSort");
const heapSort = require("./heapSort");

const recursion = require("./recursion")

// 排序测试
let arr =[4,3,2,1,3,5,2,6,5,8,43,752,56,2,5,735,8,58];
console.log('hello world');
console.log(heapSort.sort(arr));
console.log('hello world');
// 递归测试
// console.time("stepsX")
// console.log(recursion.stepsX(200));
// console.timeEnd("stepsX")
// console.time("steps")
// console.log(recursion.steps(50));
// console.timeEnd("steps")

