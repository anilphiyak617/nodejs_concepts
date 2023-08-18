const fs = require("node:fs");

let fileData = "";
// Synchronous read
// waits for the read operation to complete before moving to the next line
const val1 = fs.readFileSync("./file.txt");

// Asynchronous read
const val2 = fs.readFile("./file.txt", (err, data) => {
  fileData = data.toString();
  console.log(fileData);
});

console.log("Hello from fs");

/*  writing to the file */
// Asynchr0nously
fs.writeFile("./file.txt", "this is the changed file", (err) => {
  console.log(err);
  console.log("data:");
});

// Synchronously
// flag is for append contents
fs.writeFileSync("./file.txt", "this is the changed file", { flag: "a" });
