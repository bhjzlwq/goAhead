function heapSort(arr) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    console.log('param is not an array');
    return;
  }
  function swap(i ,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  function heapify(start,end) {
    let dad = start;
    let son = dad * 2 + 1;
    if(son >= end){
      return;
    }
    if(son + 1 < end && arr[son] < arr[son+1]){
      son++;
    }
    if(arr[dad] <= arr[son]){
      swap(dad , son);
      heapify(son, end);
    }
  }
  let len = arr.length;
  for (let i = Math.floor(len/2) -1; i >= 0;i--){
    heapify(i,len);
  }
  for (let i = len-1; i > 0;i--){
    swap(0,i);
    heapify(0,i);
    console.log(arr)
  }
  return arr;
}

module.exports ={
  sort: heapSort
}
