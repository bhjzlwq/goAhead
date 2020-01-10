function genIp(num,hasher) {
  for(let i = 0; i<num;i++){
    ip = `${random()}.${random()}.${random()}.${random()}`
    hasher.add(ip)
  }
  function random() {
    return Math.floor(Math.random() * 255);
  }
}
class IpHasher{
  constructor(){
    this.hashMap = new Array(256*256*256);
  }
  hash(ip){
    let arr = ip.split('.');
    let index = arr[0]*255*255 + arr[1]*255 + arr[2]*1;
    return index;
  }
  add(ip){
    let index = this.hash(ip);
    let el = this.hashMap[index];
    if(el){
      while(el.next){
        el = el.next;
      }
      el.next ={
        value: ip,
        next: null
      }
    }else{
      this.hashMap[index] = {
        value: ip,
        next: null
      }
    }
  }
  find(ip){
    let index = this.hash(ip);
    let el = this.hashMap[index];
    if(el){
      while(el.value!==ip){
        if(el.next){
          el = el.next;
        }else{
          return false;
        }
      }
      return true;
    }else{
      return false;
    }
  }
}
let ipHasher = new IpHasher();
console.time('ip');
genIp(10000000,ipHasher);
console.timeEnd('ip')
