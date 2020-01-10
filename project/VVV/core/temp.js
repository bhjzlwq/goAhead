function cloneDeep(array) {
  let cycle = [array];
  function clone(params) {
    let copy = {};
    Object.keys(params).forEach((key)=>{
      if(typeof params[key] ==='object' && params[key]){
        if(cycle.indexOf(params[key])<0){
          cycle.push(params[key]);
          copy[key] = clone(params[key])
        } else {
          copy[key] = params[key];
        }
      } else {
        copy[key] = params[key];
      }
    })
    return copy;
  }
  return clone(array);
}
