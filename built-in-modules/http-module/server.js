// Import the 'http' module for creating HTTP servers.
const http = require("node:http");
const fs = require("node:fs")

// Create an HTTP server.
const server = http.createServer((req, res) => {
  // Set response status code to 200 (OK) and content type to html
  res.writeHead(200, { "Content-Type": "text/plain" });
  // Send the response body and end the response.
  const readStream = fs.createReadStream(__dirname + "/file.txt", {
    highWaterMark: 6
  });

  readStream.on('data', function (chunk) { 
    
    setTimeout(() => { 
      // response is immediately sent on the first callof the callback
      // in subsequent calls res is not connected to the client 
      console.log(chunk.toLocaleString());
      res.write(chunk);
      res.end()
    }, 10000)
    
  })
  // res.write("<h1>Hello World!</h1>");
  // res.write(JSON.stringify({name:"sdfsdf"}));
    // console.log("RES : ", req)
    // res.end();
});

// Start the server on port 3000.
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
