class Dep {
  constructor(){
    this.subs = [];
  }
  addSub(sub){
    this.subs.push(sub);
  }
  removeSub(sub){
    remove(this.subs,sub);
  }
  notify(){
    const subs = this.subs.slice();
    for(let i = 0, len = subs.length; i<len;i++){
      subs[i].update();
    }
  }
}
function remove(arr,item) {
  if(arr.length){
    const index = arr.indexOf(item);
    if(index > -1){
      return arr.splice(index,1);
    }
  }
}

export default Dep;
