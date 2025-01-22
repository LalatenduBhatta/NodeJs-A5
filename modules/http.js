const http = require("http")

const server = http.createServer((req, res) => {
    // console.log("server is getting a request");
    console.log(req.method, req.url)
    if (req.method == "GET" && req.url === "/") {
        res.write("HELLO WORLD")
        res.end()
    }
    else if (req.method == "GET" && req.url === "/about") {
        res.end("<h1>THIS IS ABOUT PAGE</h1> <a href='/'>HOME</a>")
    }
});


server.listen(4000, "localhost", () => { //http://localhost:4000
    console.log("server started");
})