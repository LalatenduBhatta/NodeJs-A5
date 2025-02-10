import express from "express"
import mongoose from "mongoose"

const app = express()

//middlewares //routes //apis
app.use(express.json()) //*json parser middleware

//demo
app.get("/", (req, res) => res.send("HELLO WORLD !!"))

//mongodb connection using mongoose
const dbURL = "mongodb://127.0.0.1:27017/myDatabase"

mongoose.connect(dbURL)
    .then(() => console.log("db connected"))
    .catch((err) => console.log("db connection error", err));

//!connecting to a collection
//declaring schema validation for the collection
const userSchema = new mongoose.Schema({
    name: String, //*data type
    email: { type: String, required: true, unique: true }, //*multiple properties
    age: { type: Number },
    gender: { type: String, enum: ["Male", "Female"] },
    address: {
        city: String,
        zip: Number,
        state: String,
        country: String
    }
})

//define the model
const userModel = mongoose.model("users", userSchema) //*users collection bound with userSchema

// async function getData() {
//     const data = await userModel.find()
//     console.log("users data", data)
// }
// getData()

//! APIs for CRUD operations in a mongodb collection

//get all data
app.get("/alldata", async (req, res) => {
    try {
        const response = await userModel.find()
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error)
    }
})

//create document
app.post("/add", async (req, res) => {
    try {
        const data = req.body
        //save data in mongodb
        // const newUser = new userModel(data) //!creating an instance of userModel
        // const response = await newUser.save() //!saving the instance

        const response = await userModel.insertOne(data) //!using insertOne method

        res.status(201).send(response)
    } catch (error) {
        res.status(500).send(error)
    }
})

//
app.post("/user/:name", async (req, res) => {
    try {
        const { name } = req.params
        const data = req.body
        const response = await userModel.updateOne({ name: name }, { $set: { ...data } })
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.delete("/deleteuser", async (req, res) => {
    try {
        const data = req.query
        const response = await userModel.deleteOne({ ...data })
        res.status(200).send(response)
    } catch (error) {
        res.status(500).send(error)
    }
})

// server listen
app.listen(8000, "localhost", () => {
    console.log("server running in http://localhost:8000")
})