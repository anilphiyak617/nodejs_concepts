
// ** variable declarations are moved at top i.e we can use variables before declaring
// ********** variable hoisting
const testFunction = function () {
    a = 9;
    var a;
    // undeclared varibales are declared as global variables by interpreter
    console.log(globalVar)
    var globalVar = 10;
    console.log(a)
}
testFunction();


// ********** function  hoisting
// ***** function declarations
// #### whole declaration is moved to the top
hoistedFunction();
function hoistedFunction() { 
    console.log("this is hoisted function")
}

// **** function expressions
console.log(functionExpression)
// var functionExpression = function(){ 
//     console.log("this is arrow function");
// }
// var functionExpression = () => {
//   console.log("this is arrow function");
// };

var functionExpression = function() {
  console.log("this is arrow function");
};



// ********************************
///  no error var a = 10; ===> var a; a = 10
///  or no error a = 10; ===> var a; a = 10 declared globally
a = 10;
console.log(a)
// var a = 10;
//  .undefined
// REFERENCE ERROR not defined
temp = 9;
console.log(temp)
