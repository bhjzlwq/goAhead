function BubbleSort(arr) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    console.log('param is not an array');
    return;
  }
  let temp;
  for(let i = 0;i<arr.length;i++){
    let flag = false;
    for (let j = 0; j < arr.length-i-1; j++) {
      if(arr[j]>arr[j+1]){
        temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
        flag = true;
      }
    }
    if(!flag){
      break;
    }
  }
}

module.exports = {
  sort:BubbleSort
}
