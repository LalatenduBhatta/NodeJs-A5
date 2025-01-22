import express from "express"

const app = express()
// //Application-level Middlewares

// function printMsg(req, res, next) {
//     console.log("hello from print function")
//     next()
// }

// app.use((req, res, next) => { //common for each request
//     console.log("Top level middleware")
//     next()
// })
// app.get("/", printMsg, (req, res, next) => {
//     console.log("hi1")
//     next()
// })
// app.get("/", (req, res, next) => {
//     console.log("hi2")
//     next()
// })
// app.get("/about", printMsg, (req, res, next) => {
//     console.log("about1")
//     res.write("HELLO ")
//     // res.send("HI")
//     next()
// }, (req, res, next) => {
//     console.log("about2")
//     res.write("WORLD ")
//     res.end()
//     // res.send("HI2")
// })

////Router level Middleware

// //creating router instance
// const users = express.Router()
// const products = express.Router()

// //declaring router middleware for the specific path
// app.use("/users", users)
// app.use("/products", products)

// //router APIs
// users.get("/profile", (req, res, next) => { //http://localhost:8000/users/profile
//     console.log("hello from users router");
// })

// products.get("/info", (req, res, next) => {//http://localhost:8000/products/info
//     console.log("product info router");
// })

////Error Handeling Middleware
// app.get("/", (req, res) => {
//     throw new Error("Error in the request") //manual Errors
//     console.log(a) //Reference Error
// })

// app.use((err, req, res, next) => {
//     console.log(err.message)
//     res.status(500).send("Something Went Worng")
// })




app.listen(8000, "localhost", () => {
    console.log("server running in http://localhost:8000")
})