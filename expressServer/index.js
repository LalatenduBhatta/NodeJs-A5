import express from "express"

const app = express()

//API // routings
app.get("/", (req, res) => {
    // // getting the information from request object
    // console.log(req.method) //to get the http method
    // console.log(req.url) //for getting the end point of url
    // console.log(req.baseUrl) //original url
    // console.log(req.hostname) //name of the domain
    // console.log(req.body) //data coming in request body (if parsed)
    // console.log(req.headers) //data coming in request headers
    // console.log(req.cookies) //cookies data (if parsed)
    // console.log(req.ip) //ip address of the client system
    // console.log(req.params)// key value pairs of parameter values from url
    // console.log(req.query) //key value pairs of queries from request url

    //// giving the response using response object
    // res.write("HELLO") //sending chunk of data (need to end)
    // res.end(" hi") //end of the response(can't send response once end)
    // res.send("HELLO WORLD") //sends response body data (can take any data types)
    // res.json({ name: "Rocky", age: 20 }) //sends json body response
    //res.sendFile("absolute path of the file") //sends a file from server
    // res.header({ msg: "HI" }) //atttach headers with response
    // res.status(200) //sends status code of the response
    // res.download("file path to download in client") //giving file download response
    // res.cookie() //to send a cookie to client's browser
})

app.post("/", (req, res) => {
    res.end("this is the post method")
})

app.get("/about", (req, res) => {
    res.end("ABOUT PAGE")
})



//app listen
app.listen(5000, "localhost", () => {
    console.log("server running in http://localhost:5000")
})