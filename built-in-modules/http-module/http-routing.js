const { readFileSync } = require('node:fs');
const http = require('node:http');

const server = http.createServer((req, res) => {
    // res.end("This is the server")
    const url = req.url;
    console.log("REQUEST: " + url);
    // ROUTING on based of the URL path
    try {
        if (url == '/') {
            console.log("base route matched")
            res.writeHead(200, {
                "Content-Type": "text/html"
            })
            const homePage = readFileSync(__dirname + '/home.html')
            res.end(homePage);
        }
        if (url == '/books') {
            console.log("books routes matched")
                res.writeHead(200, {
                    "Content-Type": "text/html",
                });
            const booksPage = readFileSync(__dirname + "/books.html");
            res.end(booksPage);
        }
        if (url == "/favicon.ico") {
            console.log("favicons routes matched");
            const favicon = readFileSync(__dirname +"/favicon.ico");
            console.log("This is favicon route")
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            res.end(favicon);
        } 
        
        else { 
                res.writeHead(200, {
                        "Content-Type": "text/html",
                });
                    res.end("ERROR 404 Not Found");
                }
        // execution doesn't stops after calling res.end() 
        console.log("res sent")
    }
    catch (e) { 
        console.log("ERROR: " + e.message)
    }
})


server.listen(5000, () => { 
    console.log('listening on port 5000')
})