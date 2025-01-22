import { readFileSync, writeFileSync } from "fs"
import http from "http"

const app = http.createServer((req, res) => {
    const { url, method } = req
    if (method == "GET" && url == "/") {
        let data = readFileSync("./pages/index.html")
        res.end(data)
    }
    else if (method == "POST" && url == "/addtask") {
        req.on("data", (data) => {
            const { task } = JSON.parse(data.toString())
            const todoData = JSON.parse(readFileSync("./json/todo.json", "utf-8"))
            todoData.push({
                task,
                id: Math.trunc(Math.random() * 10000)
            })
            writeFileSync("./json/todo.json", JSON.stringify(todoData))
            res.writeHead(200)
            res.end(JSON.stringify({ message: "Task stored successfully" }))
        })
    }
})



app.listen(7000, "localhost", () => {
    console.log("server running in http://localhost:7000");
})