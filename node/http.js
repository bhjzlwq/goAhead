let express = require("express");
let app = express();
app.get('/say/',function(req,res){
  let {wd,callback} = req.query;
  console.log(wd,callback);
  res.end(`${callback}('I hate You')`)
})
app.listen(3000);
console.log('listen at : localhost:3000')
