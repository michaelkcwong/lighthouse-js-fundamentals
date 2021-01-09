//multiplies to 8
function multiply(a,b) {
  return a * b;
}

const result = multiply(2, 4);

console.log(result);

//prints ASCII value of character
var my_string = "a";
var ASCII_value = my_string.charCodeAt(0);
console.log(ASCII_value);

var my_string = "Udacity";

// Iterate using a Loop
for (var i = 0; i < my_string.length; i++) {
  console.log(my_string.charCodeAt(i));
}

// \n tabs it down
var haiku = "Blowing from the west" + "\nFallen leaves gather" + "\nIn the east."
console.log(haiku);

// string concatentation
var adjective1 = "amazing";
var adjective2 = "fun";
var adjective3 = "entertaining";
var madLib = "The Intro to JavaScript course is "+ adjective1 +". James and Julia are so "+ adjective2 +". I cannot wait to work through the rest of this "+ adjective3 +" content!";
console.log(madLib);

//string concatenation
var firstName = "Julia";
var interest = "cats";
var hobby = "play video games";
var awesomeMessage = "Hi, my name is " + firstName + ". I love " + interest + ". In my spare time, I like to " + hobby + ".";
console.log(awesomeMessage);

//conditionals flowchart to code base if statement
var price = 15.00; //price of our hammer
var money = 20.00; //how much money I have

if(money >= price) {
  console.log("buy the hammer");
} else {
  console.log("don't buy the hammer");
}

//else if statement when you need more then 2 conditionals
var weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}

//even or odd

var number = 2

if (number % 2 === 0) {
  console.log("even");
} else {
  console.log("odd");
}

//Musical Groups
var musicians = 1;

if (musicians <=0) {
  console.log("not a group");
} else if (musicians === 1) {
  console.log("solo");
} else if (musicians === 2) {
  console.log("duet");
} else if (musicians === 3) {
  console.log("trio");
} else if (musicians === 4) {
  console.log("quartet");
} else if (musicians >= 5) {
  console.log("this is a large group");
}

// Murder Mystery

var room = "ballroom"
var suspect = "Mr. Parkes"
var weapon = "Poison"
var solved = false;

if (room === "ballroom") {
  weapon = "poison";
  if (suspect === "Mr. Kalehoff")
  solved = true;
} else if (room === "gallery") {
  weapon = "trophy";
  if (suspect === "Ms. Van Cleve")
  solved = true;
} else if (room === "billiards room") {
  weapon = "pool stick";
  if (suspect === "Mrs. Sparr")
  solved = true;
} else if (room === "dining room") {
  weapon = "knife"
  if (suspect === "Mr. Parkes")
  solved = true;
}

if (solved) {
  console.log(suspect + " did it in the " + room + " with the " + weapon + "!")
} else {
  console.log("wrong suspect");
}

// Checking your Balance 
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = -325;
var checkBalance = true;
var isActive = true;

// Start only if checkBalance === true
if (checkBalance === true) {
    // Cases when account is active. Now, the balance could be <, =, or > zero
    if (isActive === true && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    }
    else if (isActive === true && balance === 0){
        console.log("Your account is empty.");
    } 
    else if (isActive === true && balance < 0){
        console.log("Your balance is negative. Please contact bank.");
    }
    // Case when account is NOT active
    else if (isActive === false) {
        console.log("Your account is no longer active.");
    }  
} 
else {
  console.log("Thank you. Have a nice day!");
}

//Ice Cream 
// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

if ((flavor === "vanilla" || flavor === "chocolate") && (vessel === "cone" || vessel === "bowl") && (toppings === "sprinkles" || toppings === "peanuts")){
        console.log ("I'd like two scoops of " + flavor + "ice cream in a " + vessel + "with " + toppings + ".")
}

//What do I wear
// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 21;
var shirtLength = 99;
var shirtSleeve = 8.40;

var size = "NA";

if ((shirtWidth>=18 && shirtWidth<20) && (shirtLength>=28 && shirtLength<29) && (shirtSleeve>=8.13 && shirtSleeve<8.38) ) {
    size = "S";
}
else if ((shirtWidth>=20 && shirtWidth<22) && (shirtLength>=29 && shirtLength<30) && (shirtSleeve>=8.38 && shirtSleeve<8.63) ) {
    size = "M";
}
else if ((shirtWidth>=22 && shirtWidth<24) && (shirtLength>=30 && shirtLength<31) && (shirtSleeve>=8.63 && shirtSleeve<8.88) ) {
    size = "L";
}
else if ((shirtWidth>=24 && shirtWidth<26) && (shirtLength>=31 && shirtLength<33) && (shirtSleeve>=8.88 && shirtSleeve<9.63) ) {
    size = "XL";
}
else if ((shirtWidth>=26 && shirtWidth<28) && (shirtLength>=33 && shirtLength<34) && (shirtSleeve>=9.63 && shirtSleeve<10.13) ) {
    size = "2XL";
}
else if ((shirtWidth>=28) && (shirtLength>=34) && (shirtSleeve>=10.13) ) {
    size = "3XL";
}
else {
    size = "NA";
}
console.log(size);

//Ternary operator provides you with a shortcut for writing lengthy if...else statements
//Normal
var isGoing = true;
var color;

if (isGoing) {
  color = "green";
} else {
  color = "red";
}

console.log(color);

//Ternary Operator
var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);

//Navigating the food chain
var eatPlants = false;
vae eatsAnimals = true;

var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");
console.log(category);

//Back to School
var education = 'no high school diploma';
var salary = 0;

switch (education) {
  case "no high school diploma":
    salary = 25636;
    break;
  case "a high school diploma":
    salary = 35256;
    break;
  case "an Associate's degree":
    salary = 41496;
    break;
  case "a Bachelor's degree":
    salary = 59124;
    break;
  case "a Master's degree":
    salary = 69732;
    break;
  case "a Professional degree":
    salary = 89960;
    break;
  case "a Doctoral degree":
    salary = 84396;
    break;
}
console.log("In 2015, a person with "+education+" earned an average of $"+salary.toLocaleString("en-US")+"/year.");
