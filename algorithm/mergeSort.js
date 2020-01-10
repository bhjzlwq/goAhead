// mergeSort(p,,,r) = merge(mergeSort(p,,,,q)+mergeSort(q+1,,,,r))
// p >= r

function mergeSort(arr) {
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    console.log('param is not an array');
    return;
  }
  if(arr.length<2){
    return arr;
  }
  return sort(arr);
}
function sort(array) {
  if(array.length<2){
    return array
  }
  const middle = Math.floor(array.length / 2);
  const left = array.slice(0,middle);
  const right = array.slice(middle);
  return merge(sort(left),sort(right));
}

function merge(left , right){
  let result = [];
  while(left.length && right.length){
    if(left[0]<right[0]){
      result.push(left.shift());
    }else{
      result.push(right.shift());
    }
  }
  return result.concat(left,right);
}

module.exports ={
  sort: mergeSort
}
