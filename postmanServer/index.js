import express from "express"

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//APIs
app.get("/", (req, res) => res.send("Hello World!"));

app.post("/data", (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

app.post("/urlData", (req, res) => {
    console.log(req.body)
    res.send(req.body)
})

//routes
const productsRouter = express.Router() //declaration

app.use("/product", productsRouter) //use the router as middleware

//product router APIs
productsRouter.get("/", (req, res) => { //http://localhost:4000/product/
    res.send({ msg: "Products Router is working" })
})

productsRouter.post("/add", (req, res) => { //http://localhost:4000/product/add
    console.log(req.body)
    res.send(req.body)
})


app.listen(4000, "localhost", () => {
    console.log("Server is running on http://localhost:4000")
})