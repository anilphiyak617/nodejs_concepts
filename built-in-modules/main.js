const myModule = require("./test1");

// Using the default export
console.log(myModule);
// Using the named export
const sum = myModule.add(3, 5);
console.log(sum); // Output: 8
