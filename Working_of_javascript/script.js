/*1. Write a function called "addNumbers" that takes two numbers as arguments and returns their sum. call the
function before it is declared to demonstrate hoisting */

console.log(addNumbers(1, 2)); //output 3

function addNumbers(a, b) {
  return a + b;
}

/*2.Write a function called "multiplyNumbers" that takes two numbers as arguments and returns their
product. Use function expressions to define the function and call the function before it is declared to
demonstrate hoisting. */

//console.log(multiplyNumbers(1, 2)); // Reference Error Cannot access 'multiplyNumbers' before initialization

const multiplyNumbers = function (a, b) {
  return a * b;
};

/*3.Write a function that takes two numbers as arguments and returns their sum. Declare a variable inside
the function using the var keyword and log its value to the console before it is assigned a value to
demonstrate variable hoisting. */

function addNum(a, b) {
  console.log(sum); //undefined
  var sum = a + b;
  return sum;
}
console.log(addNum(2, 4)); //prints 6

/*4.Declare three variables, one using let, one using var, and one using const, all inside a block scope. Assign
them values and log their values to the console before and after they are declared to demonstrate variable
hoisting. */

{
  console.log(fname); //undefined
  console.log(age); // reference error
  console.log(lname); // reference error
  var fname = "bg";
  let age = 25;
  const lname = "g";
  console.log(fname);
  console.log(age);
  console.log(lname);
}

/*5. Declare a variable using let inside a block scope and attempt to log its value to the console before it is
assigned a value to demonstrate the temporal dead zone.*/
{
  console.log(age); // reference error

  let age = 25;

  console.log(age);
}
