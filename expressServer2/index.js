import express from "express"
import { readFileSync } from "fs"

const app = express()

//api
app.get("/", (req, res) => {
    // res.send({ name: "Rohan", address: "Bnglr" })
    // res.status(500).send("hi")

    //file sending (node js)
    // let data = readFileSync("./home.html") //relative path
    // res.write(data)
    // res.end()

    res.sendFile("C:/Users/HP/OneDrive/Desktop/NODEA5/expressServer2/home.html") //absolute path
})

app.get("/home.css", (req, res) => {
    res.sendFile("C:/Users/HP/OneDrive/Desktop/NODEA5/expressServer2/home.css") //absolute path
})

app.get("/login", (req, res) => {
    res.sendFile("C:/Users/HP/OneDrive/Desktop/NODEA5/expressServer2/login.html") //absolute path
})


app.listen(4444, "localhost", () => {
    console.log("server started at http://localhost:4444")
})