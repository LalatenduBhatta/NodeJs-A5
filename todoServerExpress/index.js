import express from "express"
import fs from "fs"

const app = express()

//middleware
app.use(express.json()) //parse json data

app.get("/", (req, res) => {
    res.sendFile("C:/Users/HP/OneDrive/Desktop/NODEA5/todoServerExpress/public/index.html")
})

//API
app.post("/todo/add", (req, res) => {
    const task = req.body
    const todos = JSON.parse(fs.readFileSync("./public/todos.json", "utf-8"))
    todos.push(task)
    fs.writeFileSync("./public/todos.json", JSON.stringify(todos))
    res.status(201).send(todos)
})

app.get("/todo/get", (req, res) => {
    const todos = JSON.parse(fs.readFileSync("./public/todos.json", "utf-8"))
    res.status(200).send(todos)
})


app.listen(4000, "localhost", () => {
    console.log("server is running on http://localhost:4000")
})