## 二叉树遍历

::: tip
数组形式存储的二叉树的前、中、后序遍历
:::

``` javascript
function preOrder(arr,index){
  if(arr[index]===undefined){
    return;
  }
  console.log(arr[index]);
  preOrder(arr, index*2);
  preOrder(arr, index*2+1);
}
function inOrder(arr,index){
  if(arr[index]===undefined){
    return;
  }
  inOrder(arr, index*2);
  console.log(arr[index]);
  inOrder(arr, index*2+1);
}
function postOrder(arr,index){
  if(arr[index]===undefined){
    return;
  }
  postOrder(arr, index*2);
  postOrder(arr, index*2+1);
  console.log(arr[index]);
}


```
