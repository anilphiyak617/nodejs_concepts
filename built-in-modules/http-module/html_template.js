// Import the 'http' module for creating HTTP servers.
const http = require("node:http");
const fs = require("node:fs");

// Create an HTTP server.
const server = http.createServer((req, res) => {
    // Set response status code to 200 (OK) and content type to html
    res.writeHead(200, { "Content-Type": "text/html" });
    let htmlContent = fs.readFileSync(__dirname + "/index.html");

    // replacing the html content with dyanmic values
    htmlContent = htmlContent.toLocaleString().replace('{{name}}',"ANIL");
    res.write(htmlContent);
    res.end();
});

// Start the server on port 3000.
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
