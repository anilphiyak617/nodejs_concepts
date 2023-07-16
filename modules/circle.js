const { PI } = Math;

console.log("circle module is loaded")
console.log("Module" , module)
const area = (r) => PI * r ** 2;
const circumference = (r) => 2 * PI * r;

console.log("Current:",require.main === module )



// Approach : 3
// module.exports = exports ={
//     area, circumference
// }
// exports= {} is not bound to module.exports 



// Approach : 2
// module.exports ={
//     area,
//     circumference
// }


// Approach :1
// exports.area = area;
// exports.circumference =  circumference;


const main = require.main;
if (main === module) {
  console.log('The current module is the main module.');
} else {
  console.log('The current module is not the main module.');
}
// This snippet will print The current module is the main module. 
// if the file is run from the command line, and 
// The current module is not the main module. 
// if it is required from another module.

