import express from "express"

const app = express()

//static folder(express.static() middleware)
app.use(express.static("C:/Users/HP/OneDrive/Desktop/NODEA5/staticServer/public"))

//middlware to parse json data (express.json() middleware)
app.use(express.json())

//middleware to parse url encoded data (express.urlencoded() middleware)
app.use(express.urlencoded({ extended: true }))


//api/routing
app.get("/", (req, res) => {
    res.sendFile("C:/Users/HP/OneDrive/Desktop/NODEA5/staticServer/index.html")
})

//GET API
app.get("/data", (req, res) => {
    res.status(200).send({ name: "Ram", age: 25 })
})

//POST API
app.post("/data", (req, res) => {
    console.log(req.headers["content-type"])
    console.log(req.body); //payload (need to parse the data)
    res.status(200).send({ message: "Data Recieved" })
})

app.post("/urlData", (req, res) => {
    console.log(req.body); //url payload
    res.send({ message: "form submitted" })
})

app.listen(7000, "localhost", () => {
    console.log("server started at http://localhost:7000");
})