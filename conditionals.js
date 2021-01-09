//Temperature conditional example
var temperature = 30;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

//Checking if citizen is eligible to vote with logical operators (&&)
const isCitizen = true;
const age = 26;

if (isCitizen && age > 18) {
  console.log("You are eligible to vote.");
}

//Temperature check with logical operators(||)
var temperature = 50
if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}

//Raining example with logical operator (!)
var raining = false
if (!raining) {
  console.log("Leave your umbrella at home!");
}