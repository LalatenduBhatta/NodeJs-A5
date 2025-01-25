import express from "express"

const app = express()

//set the template engine
app.set("view engine", "ejs")  //declaring ejs as the template engine

app.set("views", "./pages") //setting template files folder (default views)

//middlewares
app.use(express.json()) //json parser
app.use(express.static("./pages")) //serving static files


//APIs

app.get("/", (req, res) => {
    res.render("Home.ejs", { name: "Salman", age: 30, address: "Mumbai" })
})
app.get("/about", (req, res) => {
    res.render("About.ejs", { fruits: ["Apple", "Banana", "Mango", "Grapes"] })
})
app.get("/login", (req, res) => {
    res.render("Login.ejs", { title: "Login Page" })
})

app.listen(3333, "localhost", () => {
    console.log("server started at http://localhost:3333");
})