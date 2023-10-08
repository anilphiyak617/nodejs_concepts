// Import the 'http' module for creating HTTP servers.
const http = require("node:http");
const fs = require("node:fs");

// Create an HTTP server.
const server = http.createServer((req, res) => {
    // Set response status code to 200 (OK) and content type to html
  res.writeHead(200, { "Content-Type": "text/plain" });
  const readStream = fs.createReadStream(__dirname + "/file.txt", {
    highWaterMark: 4
  })
  
  readStream.pipe(res);
  
  readStream.on("data", (chunk) => { 
    console.log("data event received")
  })

});

// Start the server on port 3000.
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});