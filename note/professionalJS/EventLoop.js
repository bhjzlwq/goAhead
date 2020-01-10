const macroTaskQueue=[];
const microTaskQueue=[];

function EventLoop(){
  while(true){
    while(microTaskQueue.length){
      let task = microTaskQueue.shift();
      execute(task);
    }
    let task = macroTaskQueue.shift();
    if(task){
      execute(task);
    }
  }
}
