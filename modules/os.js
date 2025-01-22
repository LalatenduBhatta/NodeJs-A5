// import os from "os"
const os = require("os")

console.log(os.totalmem()); //provides the total memory of the RAM(bytes)
console.log(os.freemem()); //provides the free memory of the RAM(bytes)
console.log(os.arch()); //type of windows architecture
console.log(os.hostname()); //name of the system host
console.log(os.platform()); //os platform
console.log(os.cpus().length); //no of cpus presents
console.log(os.type()); //type of the os
console.log(os.version()); //version of the os
