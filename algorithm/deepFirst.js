const data = [{
    id: '1',
    name: 'test1',
    children: [
        {
            id: '11',
            name: 'test11',
            children: [
                {
                    id: '111',
                    name: 'test111'
                },
                {
                    id: '112',
                    name: 'test112'
                }
            ]

        },
        {
            id: '12',
            name: 'test12',
            children: [
                {
                    id: '121',
                    name: 'test121'
                },
                {
                    id: '122',
                    name: 'test122'
                }
            ]
        }
    ]
}];
const fn = (value, arr) => {
  const idArr = [];
  function recursion(array){
    for(let i = 0 ; i<array.length ; i++){
      if(array[i].id === value){
        idArr.push(array[i].id);
        return true;
      } else if(array[i].children && array[i].children.length){
        idArr.push(array[i].id);
        let flag = recursion(array[i].children);
        if(flag){
          return true;
        }
      }
    }
    idArr.pop();
    return false;
  }
  recursion(arr);
  return idArr;
}
console.log(fn(121,data))
