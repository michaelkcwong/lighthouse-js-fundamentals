/*function multiply(a, b) {
  return a * b;
}

const result = multiply(2 ,4);

console.log(result);

If...Else Statements
var weather = "sunny";

if (weather === "snow") {
  console.log("Bring a coat.");
} else if (weather === "rain") {
  console.log("Bring a rain jacket.");
} else {
  console.log("Wear what you have on.");
}

var money = 100.50;
var price = 100.50;

if (money > price) {
  console.log("You paid extra, here's your change.");
} else if (money === price) {
  console.log("You paid the exact amount, have a nice day!");
} else {
  console.log("That's not enough, you still owe money.");
}

var runner = "Kendyll";
var position = 2;
var medal;

if(position === 1) {
  medal = "gold";
} else if(position === 2) {
  medal = "silver";
} else if (position === 3) {
  medal = "bronze";
} else {
  medal = "pat on the back";
}

console.log(runner + " received a " + medal + "medal.");

var number = 11;
if (0 === number % 2) {
    console.log("even");
} else {
    console.log("odd");
}

let musicians = 1;
if (musicians <= 0) {
  console.log("not a group");
} else if (musicians === 1) {
  console.log("solo");
} else if (musicians === 2) {
  console.log("duet");
} else if (musicians === 3) {
  console.log("trio");
} else if (musicians === 4) {
  console.log("quartet");
} else if (musicians >= 5); {
  console.log("this is a large group");
}

Logical AND and OR
let rooms = 'gallery';
let weapons = 'poison';
let suspects = 'Mr. Kalehoff';
let solved = false;

if (rooms === 'ballroom' && suspects === 'Mr. Kalehoff') {
  weapons = 'poison';
  solved = true;
} else if (rooms === 'gallery' && suspects === 'Ms. Van Cleve') {
  weapons = 'trophy';
  solved = true;
} else if (rooms === 'billiards room' && suspects === 'Mrs. Sparr') {
  weapons = 'pool stick';
  solved = true;
} else if (rooms === 'dining room' && suspects === 'Mr. Parkes') {
  weapons = 'knife';
  solved = true;
}

if (solved) {
  console.log(suspects + " did it in the " + rooms + " with the " + weapons + "!");
} else {
  console.log("wrong suspect");
}


let rooms = 'ballroom';
let weapons = 'poison';
let suspects = 'Mr. Kalehoff';
let solved = true;

if (rooms === 'ballroom' && suspects === 'Mr. Kalehoff' && weapons === 'poison') {
  solved = true;
} else if (rooms === 'gallery' && suspects === 'Ms. Van Cleve' && weapons === 'trophy') {
  solved = true;
} else if (rooms === 'billiards room' && suspects === 'Mrs. Sparr' && weapons === 'pool stick') {
  solved = true;
} else if (rooms === 'dining room' && suspects === 'Mr. Parkes' && weapons === 'knife') {
  solved = true;
}

if (solved) {
  console.log(suspects + " did it in the " + rooms + " with the " + weapons + "!");
} else {
  console.log("wrong suspect");
}


let balance = 2340.10394;
let isActive = true;
let checkBalance = false;

if (balance > 0 && isActive === true && checkBalance === true) {
  console.log("Your balance is " + "$" + balance.toFixed(2) + ".");
} else if (isActive === false) {
  console.log("Your account is no longer active.");
} else if (balance === 0) {
  console.log("Your account is empty."); 
} else if (balance < 0) {
  console.log("Your balance is negative, Please contact bank.");
} else if (checkBalance === false) {
  console.log("Thank you. Have a nice day!")
}

var balance = 325;
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

let flavor = 'vanilla';
let vessel = 'cone';
let toppings = 'sprinkles';

if (flavor === 'vanilla' || flavor === 'chocolate' && vessel === 'cone' || vessel === 'bowl' && toppings === 'sprinkles' || toppings === 'peanuts') {
  console.log(" I'd like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + '.');
}


let shirtWidth = 23; 
let shirtLength = 30;
let shirtSleeve = 8.71;
let size = "NA";

if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
  size = "S";
}
else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
  size = "M";
}
else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
  size = "L";
}
else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8,88 && shirtSleeve < 9.63)) {
  size = "XL";
}
else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
  size = "2XL";
}  
else if ((shirtWidth >= 28) && (shirtLength >= 34) && (shirtSleeve >= 10.13)) {
    size = "3XL";
} 
else {
  size = "NA";
}
console.log(size);

Ternarary Operator
var isGoing = true;
var color;

if (isGoing) {
  color = "green";
} else {
  color = "red";
}

console.log(color);


var isGoing = true;
var color = isGoing ? "green" : "red";
console.log(color);

let eatsPlants = true;
let eatsAnimals = true;

let category = eatsPlants ? (eatsAnimals ? "Omnivore" : "Herbivore") : (eatsAnimals ? "Carnivore" : "Undefined");
console.log(category);

Switch Statements 

let salary = 41496
let education = 'an Associate\'s degree'

switch(education) {
  case 'no high school diploma':
    salary = 25636;
    break;

  case 'a high school diploma':
    salary = 35256;
    break;

  case 'an Associate\'s degree':
    salary = 41496;
    break;

  case "a Bachelor's Degree":
    salary = 59124;
    break;

  case "a Master's Degree":
    salary = 69732;
    break;
  
  case 'a Professional Degree':
    salary = 89960;
    break;
  
  case 'a Doctoral Degree':
    salary = 84396;
    break;
}

console.log("In 2015, a person with " + education + " earned an average of " + salary.toLocaleString() + '.');


const whichSchool  = function (age) {
  if (age < 13) {
    return "Elementary School";
  } else if (age >= 13 && age <= 18) {
    return "Seconary School";
  } else {
    return "Lighthouse Labs";
  }
}

console.log(whichSchool(20));
*/