// import fs from "fs"
const fs = require("fs")

// // --------------createfile---------------
// // async
// fs.writeFile("./a.txt", "HELLO WORLD", "utf-8", (error) => {
//     if (error) console.log(error)
//     else console.log("file created");
// })

// //sync
// fs.writeFileSync("b.txt", "CREATING A FILE IN NODE", "utf-8")

// //----------------------readFile------------
// //async
// fs.readFile("./a.txt", "utf-8", (error, data) => {
//     if (error) console.log(error)
//     else console.log(data);
// })

// // async
// let result = fs.readFileSync("./b.txt", "utf-8")
// console.log(result);

// // ------------------updateFile------------
// //async
// fs.appendFile("./a.txt", " HELLO JSPIDERS.........", (error) => {
//     if (error) console.log(error)
//     else console.log("file updated");
// })

// // async
// fs.appendFileSync("./b.txt", " NEW TEXT. ")

// //--------------deleteFile--------------
// //async
// fs.unlink("./a.txt", (error) => {
//     if (error) console.log(error)
//     else console.log("file deleted");
// })
