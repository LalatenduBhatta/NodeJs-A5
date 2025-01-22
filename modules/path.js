// const path = require("path")
import path from "path";

let filePath = "/myfolder/project/index.js"

console.log(path.dirname(filePath)); //  /myfolder/project
console.log(path.basename(filePath));//  index.js
console.log(path.extname(filePath));//   .js
console.log(path.sep); //  \

const dynamicPath = path.join("Node", filePath)
console.log(dynamicPath); //   Node\myfolder\project\index.js


