// # global object represents the global scopr
// # methods and properties of the global object  is accesiblie throught the node js application
// # it includes objects like  "console" "setTimeout" "setInterval" .. etc
// # global variables part of the global object
mybook = 9;
// #
global.customLog = (val) => console.log("Output:", val);

const moduleB = require("./part-2");
console.log(moduleB.count);
