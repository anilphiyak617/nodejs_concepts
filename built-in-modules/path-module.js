// node-protocol ro indicate importing built-in modules
const path = require("node:path");

// inbuilt variables with module specific scope
console.log(__filename);
console.log(__dirname);

// provides the baseName
console.log(path.basename(__filename));
console.log(path.basename(__dirname));

// provides the extension of the base file
console.log(path.extname(__filename));

// parses the directory by divding into different parts
console.log(path.parse(__filename));

// returns a path string from the parse object
console.log(path.format(path.parse(__filename)));

// checks if the path is absolute
console.log(path.isAbsolute(__dirname)); // true
console.log(path.isAbsolute("./")); // false

// joins the paths and normalizes
console.log(path.join(__dirname, "../book.js"));

// normalizes the path if new / is encountered somewhere it is set as root
console.log(path.resolve("file", "folder", "book.js"));
//  op: "/home/phiyakanil/Desktop/courses/nodejs_concepts/built-in-modules/file/folder/book.js"
console.log(path.resolve("file", "/folder", "book.js"));
console.log(path.resolve("file", "/folder", "./book.js"));
// "/folder/book.js"
