import http from "http"
import { readFileSync } from "fs"

const app = http.createServer((req, res) => {
    const { url, method } = req
    if (method == "GET") {
        if (url == "/") {
            const data = readFileSync("./pages/index.html")
            res.end(data)
        }
        else if (url == "/about") {
            const data = readFileSync("./pages/about.html")
            res.end(data)
        }
        else if (url == "/contact") {
            const data = readFileSync("./pages/contact.html")
            res.end(data)
        }
        else if (url == "/login") {
            const data = readFileSync("./pages/login.html")
            res.end(data)
        }
        else if (url == "/css/navbar.css") {
            const data = readFileSync("./css/navbar.css")
            res.end(data)
        }
        else if (url == "/getdata") {
            let user = { name: "Ramesh", age: 24, address: "Hydrabad" }
            res.end(JSON.stringify(user))
        }
        else {
            res.end("<h1>Page not found !!!</h1>")
        }
    }
    else if (method == "POST") {
        if (url == "/sendData") {
            //collectiong the data from request object by adding a listener
            req.on("data", (data) => {
                const student = JSON.parse(data.toString())
                console.log(student);
                res.end(JSON.stringify({ message: "Data Recieved" }))
            })
        }
    }
})


app.listen(3000, "localhost", () => {
    console.log("server is running at http://localhost:3000");
})