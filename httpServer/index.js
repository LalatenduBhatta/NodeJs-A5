import http from "http"
import fs from "fs"

const server = http.createServer((req, res) => {
    const { url, method } = req
    if (method == "GET") {
        if (url == "/") {
            // res.write("<h1>THIS IS THE ENTRY PAGE</h1>")
            let data = fs.readFileSync("./pages/index.html")
            res.end(data)
        }
        else if (url == "/about") {
            let data = fs.readFileSync("./pages/about.html")
            res.end(data)
        }
        else if (url == "/contact") {
            res.end("<h1>Contact us page</h1>")
        }
        else if (url == "/login") {
            let data = fs.readFileSync("./pages/login.html")
            res.end(data)
        }
        else if (url == "/css/index.css") {
            let data = fs.readFileSync("./css/index.css")
            res.end(data)
        }
        else if (url == "/blue-flower.jpg") {
            let data = fs.readFileSync("./assets/blue-flower.jpg")
            res.end(data)
        }
        else {
            res.end("<h1 align='center' style='color:red'> Page Not Found ERROR 404!!!! </h1 > ")
        }
    }
})


server.listen(2000, "localhost", () => {
    console.log("server started"); // http://localhost:2000
})