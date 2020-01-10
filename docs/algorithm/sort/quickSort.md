## 快速排序

``` js
// quickSort(p,,,r) = quickSort(p,,,,q)+quickSort(q+1,,,,r)
// p >= r

function quickSort(arr) {
  if(arr.length<2){
    return arr;
  }
  return sort(arr);
}
/**
 * @description 递归函数
 * @param {Array} arr
 * @param {Number} p 起始下标
 * @param {Number} r 结束下标
 * @returns
 */
function sort(arr,left = 0,right = arr.length-1) {
  if( left >= right ){ return }
  let i = left;
  let j = right;
  let pivot = arr[j]; // 取无序数组最后一个值为基准值
  while( i < j ){ // 把所有比基准值小的数放在左边，大的数放在右边
    while( i < j && arr[i] <= pivot){
      i++;
    }
    arr[j] = arr[i];
    while( j > i && arr[j] >= pivot){
      j--;
    }
    arr[i] = arr[j];
  }
  arr[j] = pivot;
  sort(arr,left,j-1);
  sort(arr,j+1,right);
  return arr;
}
```
