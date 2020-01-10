const http = require("http");
const fs = require("fs");
const server = http.createServer((req,res) => {
  res.writeHead(200);
  var file = fs.readFile(__dirname,(err,params)=>{
      console.log(res);
    res.end(req);
  });

}).listen(3000,()=>{
  process.title="HELLO WORLD"
  console.log("进程TITLE",process.title)
  console.log("进程ID",process.pid)
})
