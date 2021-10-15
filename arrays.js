/*let udaciFamily = ["Julia", "James", "Mike"];
console.log(udaciFamily); */

/*
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

let crew = [captain, second, pilot, companion, mercenary, mechanic];

console.log(crew);
*/

/*
var prices = [1.23, 48.11, 90.11, 8.50, 9.99, 1.00, 1.10, 67.00];
prices[0] = 5
prices[2] = 9
prices[6] = 2
console.log(prices);
*/

/*
var inventory = [
  ["gold pieces", 25],
  ["belt", 4],
  ["ring", 1],
  ["shoes", 2]
];

console.log(inventory.length);
*/

/*
var rainbow = ["Red", "Orange", "Blackberry", "Blue"];
rainbow.splice(2,1, "Yellow", "Green");
rainbow.splice(5,0, "Purple");
console.log(rainbow);
*/

/*
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(team) {
if (team.length >= 7) {
  return true
} else {
  return false
}
}
console.log(hasEnoughPlayers(team));
*/
/*
var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";
var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

var crew = [captain, second, pilot, companion, mercenary, mechanic];
crew.push(doctor)
crew.push(sister)
crew.push(shepherd)
console.log(crew);
*/

/*
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4, 19, 300, 3775, 299, 36, 209, 148, 169, 299, 6, 109, 20, 58, 139, 59, 3, 1, 139];
test.forEach(function(value, index) {
  if(value%3 === 0) {
    test[index] = test[index] + 100;
  } else {
    console.log("Element " + value + " is not divisible by 3");
  }
});
console.log(test);
*/

/*
//for loops
var myArray = [1, 2, 3, 4, 5];
for (var i = 0; i <= myArray.length; i = i + 2) {
  console.log(myArray[i]);
  if (i === 2) {
    break;
  }
}
*/

/*
//forEach(func)
var myArray = [1, 2, 3, 4, 5];
myArray.forEach(function(elem) {
  console.log(elem);
});
*/

/*
//map(func)
var myArray = [1, 2, 3, 4, 5];
var newArray = myArray.map(function(elem) {
  elem = elem + 100;
  return elem;
});
*/

/*
var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90, 29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

var totals = bills.map(function(element) {
  element *= 1.15;
  element = element.toFixed(2);
  element = Number(element);

  return element;
});

console.log(totals);
*/

/*
var numbers = [
  [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
  [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
  [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
  [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
  [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
  [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
  [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
  [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
  [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
  [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

for(var i = 0; i < numbers.length; i++) {
  for (var j = 0; j < numbers[i].length; j++) {
    if(numbers[i][j] %2 === 0)
    numbers[i][j] = "even";
    else
    numbers[i][j] = "odd";
  }
}

console.log(numbers);
*/

const director = "Steven Spielberg";
const films = ["Jaws", "Raiders of the Lost Ark", "A.I."];
films[2] = "Jurassic Park";
films;
films.push("A.I.");
films;