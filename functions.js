//reverse function example
function reverseString(reverseMe) {
  var reversed = "";
  for (var i = reverseMe.length - 1; i >=0; i--) {
    reversed += reverseMe[i];
  }
  return reversed;
}

console.log(reverseString("Julia"));

//Simple function example
// declares the sayHello function
function sayHello() {
  var message = "Hello!"
  return message; // returns value instead of printing it
}

// function returns "Hello!" and console.log prints the return value
console.log(sayHello());

//find avg function
function findAverage(x, y) {
  var answer = (x + y) / 2;
  return answer;
}

var avg = findAverage(5, 9);
console.log(avg);

//laughing function
function laugh() {
  var message = "hahahahahahahahahaha!"
  return message;
}
console.log(laugh());

// function definition
function laugh() {
  // Take a variable with any name of your choice
  var sound = "hahahahahahahahahaha!"
  return sound;
}

// function calling
// Don't forget to put a pair of `( )` along with the function name, while calling
console.log(laugh());

//Write a function called laugh() that takes one parameter, num that represents the number of "ha"s to return.
//Laugh it off function with loop
var sound = "";
function laugh(num) {
  for (var x = 0 ; x < num ; x++) {
    sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
}

console.log(laugh(3));

//Difference b/w log and return
/*function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
  return "Returning: I am returning this string!";
}

isThisWorking(3);
Prints: "Printing: isThisWorking was called and 3 was passed in as an argument"
Returns: "Returning: I am returning this string!"*/

/*function isThisWorking(input) {
  console.log("Printing: isThisWorking was called and " + input + " was passed in as an argument.");
}

isThisWorking(3);
Prints: "Printing: isThisWorking was called and 3 was passed in as an argument"
Returns: undefined*/

//Using multiple return values
function addTen(x) {
  return x + 10;
}

function divideByThree(y) {
  return y / 3;
}

var result = addTen(2);
console.log(divideByThree(result));

//Shadowing
/*var x = 1;

function addTwo() {
  x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);
Outputs 4 */

/*
var x = 1;

function addTwo() {
  var x = x + 2;
}

addTwo();
x = x + 1;
console.log(x);
Outputs 2 */

// Laugh Function Expression Quiz
var sound = ""; //Declare an empty string
//An anonymous function expression stored in the variable 'laugh'
var laugh = function(num) { 
//Iterate
for (var x = 0; x < num ; x++) {
  sound = sound + "ha";
}
sound = sound + "!";
return sound;
}
//It is essntial that the funciton must return a string
console.log(laugh(3));

// Cry function Expression Quiz
var cry = function myFunction() {
  var sound = "boohoo";
  return sound;
};
//Call the function using the variable name, not the function name
console.log(cry());


//Inline Quiz
//emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}
//Call the emotions() function with two arguments
//Argument 1 - "happy" string
//Argument 2 - an inline funciton expression

emotions("happy", function(num) {
  var sound = ""; //Local variable
  //Iterate
  for (var x = 0: x < num ; x++) {
    sound = sound + "ha" ;
  }
  sound = sound + "!";
  return sound;
});
