/*function reverseString(reverseMe) {
  var reversed = "";
  for (var i = reverseMe.length - 1; i >= 0; i--) {
    reversed += reverseMe[i];
  }
  return reversed;
}

console.log(reverseString("Julia"));
*/

/*
function laugh() {
  var laughs = "hahahahahahahahahaha!"
  return laughs;
}
console.log(laugh());
*/

/*
var sound = "";
function laugh(num) {
  for (var x = 0; x < num; x++) {
    sound = sound + "ha"
  }
  sound = sound + "!";
  return sound;
}
console.log(laugh(10));
*/

/*
// returns the sum of two numbers
function add(x, y) {
  return x + y;
}
// returns the value of a number divided by 2
function divideByTwo(num) {
  return num / 2;
}

var sum = add(5, 7); // call the "add" function and store the returned value in the "sum" variable
var average = divideByTwo(sum); // call the "divideByTwo" function 

console.log(divideByTwo(sum));
*/

/*
var james = "I'm looking for this book..."; //Global scope

function library() {
  var librarian = "Oh you'll want to look in the classic literature section, follow me!"; //Function scope
  function classicLiterature() {
    var book = "Great expectations"; //Function scope
  }
}
*/

/*
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
      line += "* ";
  }
  return line + "\n";
}

function buildTriangle(length) {
  var line = 1;
  var triangle = "";
  for (line = 1; line <= length; line++) {
    triangle = triangle + makeLine(line);
    }
    return triangle 
}
console.log(buildTriangle(10));

function catSays(max) { //Function Declaration
  //your code here
};

catSays();

var catSays = function(max) { //Function Expression
  //Your code here
};
catSays();
*/
/*
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

catSays;
*/
// function expression catSays
/*
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};

// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}

// pass in catSays as a callback function
helloCat(catSays);
*/

/*
//// anonymous function expression
var sound = "";
var laugh = function(num) {
  for (var x = 0 ; x <num ; x++) {
    sound = sound + "ha";
  }
  sound = sound + "!";
  return sound;
}

console.log(laugh(3));
*/

/*
//function expression
var cry = function myFunction(){ 
  var sound = "boohoo!";
  return sound;
  };

// Call the function using the variable name, not the function name
console.log(cry());

// This statement is also acceptable, but it won't print anything on your console
// cry();
*/

/*
// emotions() function definition
function emotions(myString, myFunc) {
  console.log("I am " + myString + ", " + myFunc(2));
}
/*
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression
emotions ("happy", function(num) {
  var sound = ""; // Local variable
  //Iterate
  for (var i = 0 ; i < num ; i++) {
      sound = sound + "ha" ;  
  }
  sound = sound +"!"; 
  return sound; 
});
*/
/*
const sayHello  = function () {
  console.log("Hello, world");
}

sayHello();
*/

const sayHello = function (name) {
  console.log("Hello, " + name);
}

sayHello("Caliban");
sayHello("Miranda");
sayHello("Ferdinand");