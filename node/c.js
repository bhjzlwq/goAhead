import { a } from "./a";
let b = require('./b.js')

console.log('c.js-1', '执行完毕', a.done, b.done)
