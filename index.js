// // functions
// console.log("working");
// // in order to execute lines of code repetiitvely we can allocate them into a function which can then be called again and again as required. this prevents us writing a peice of code multiple times


// function multiply(parameter1,parameter2){
//     console.log("inside multiply function");
// // the function body can have more than one line of code
// }
// multiply(argument1,argument2);
// // calling a function name of a function followed by open and close paranthesis
// // function defination line 6-9
// // while we call a function we pass arguments inside the paranthesis if we have to pass any value otherwise not neccessary to pass arguments.
// // the arguments passed can be one or many separated by commas.
// // we need to have n no of parameters for n number of arguments passed while calling the function
// // parameter catch the arguments in the sequence they are passed
// // // Functions - In order to execute a particular lines of code repetitively, we can allocate them into a function, which can then be called again and again as required. This prevents us writing a piece of code mulitple times. 
// // ----------------------------------------------------------------
// // sir writing
// //function definition from lines 6-8
// //we need to have n no of parameters for n number of arguments passed while calling the functions, so parameters catch the arguments in the sequence they are passed
// // function multiply(parameter1, parameter2){
// //     console.log("Inside multiply function");
//     //the function body can have more than one line of code.
// // }

// //function calling on line 11
// // multiply(arg1,arg2);//name of a function followed by open and close parenthesis.
// //while we call a function we pass arguments inside the parenthesis, if we have to pass any values otherwise not necessary to pass arguments. The arguments passed can be one or many separated by commas.




// // regular function is like writing function followed by its name.


// // arrow function
// const addition = (parameter1 , parameter2) => {
// console.log("i am in addition function");
// }
// addition(argument1,argument2);

// // function expression
// const subtraction = function(){
//     console.log("i am in subtraction function")
// }
// subtraction(argument1 , argument2);



// function without parameters
function sayHi(){
    console.log("hi");
    let a=3;
    let b=5;
    let result= a+b;
    console.log(result);
}
sayHi();
 
// passing argument to function

function addition(num1, num2){

    let result = num1+num2;
    console.log(result);
}
addition(3,4);

function multiply(num1 , num2){
    let result = num1*num2;
    return result;
}
// let returnedResult = multiply(7,9);
// console.log(returnedResult);
console.log(multiply(7,9));

// inside the console.log we can call a function if our function reurns some value then that returned value will also be 
// printed in our console.log
// ----------------------------------------------------------------



// lexical environment and scope chain

// let i = 5;

// function one(){
//     // let i = 5;
// // console.log(i);
// two();

// function two(){
//     let i = 5;
// console.log(i);
// // console.log(z);
// }
// }

// one();
let f=2;
const g=2;
var h=2;
console.log(f);
console.log(g);
console.log(h);
{
    let f=3;
    let g=3;
    var h=3;
    console.log(f);
    console.log(g);
    console.log(h);
    // this is shadowing the values
}

    console.log(f);
    console.log(g);
    console.log(h);
    // let and const are block scoped but not var(globally scoped)
// var manipulating the values new value will come

