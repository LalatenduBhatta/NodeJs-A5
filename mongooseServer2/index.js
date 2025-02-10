import express from "express"
import connectDb from "./config/db.js"
import userRoutes from "./routes/userRoutes.js"

const app = express()

//middlewares
app.use(express.json()) //json parser

//APIs
app.get("/", (req, res) => res.send("Server At Work"))

//routes
app.use("/user", userRoutes) //user routes


//database connection
connectDb()

//listen
app.listen(1000, "localhost", () => {
    console.log("server running in http://localhost:1000");
})