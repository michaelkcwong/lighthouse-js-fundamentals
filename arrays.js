// Splice array
//Colors of the rainbow
var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];
// From index position 2, remove 1 element. Afterwards, add all the elements mentioned in the argument.
rainbow.splice(2, 1, "Yellow", "Green");

// From index position 5, remove 0 elements. This means, no removal of any element. 
// Afterwards, add all the elements mentioned in the argument.
rainbow.splice(5, 0, "Purple");

// Did you noticed that the above method call is equivalent to adding an element at a specific index in the array?

//Print
console.log(rainbow);

//Quidditch Cup
var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
function hasEnoughPlayers(arrayInstance) {
  if (arrayInstance.length >= 7)
    return true; // true is a boolean value. Do not return a string "true"
  else 
    return false; // false is also a boolean value. Do not return a string "false"
}
console.log(hasEnoughPlayers(team));

//Joining the crew

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";
crew.push(doctor); // "Simon" gets added at the end of the array
// We have intentionally not captured the return of the push() method

crew.push(sister); // "River" gets added at the end of the array
crew.push(shepherd); // "Book" gets added at the end of the array

console.log(crew);

//Array loop donut
var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

// the variable `i` is used to step through each element in the array
for (var i = 0; i < donuts.length; i++) {
    donuts[i] += " hole";
    donuts[i] = donuts[i].toUpperCase();
}
//donuts array: ["JELLY DONUT HOLE", "CHOCOLATE DONUT HOLE", "GLAZED DONUT HOLE"]

//Another type of loop (forEach() method)
var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
  19, 300, 3775, 299, 36, 209, 148, 169, 299,
  6, 109, 20, 58, 139, 59, 3, 1, 139
];

test.forEach(function(item, index){
  if(item%3===0){
      // The commented statements below would not be able to change the value of item
      // because the `item` is a COPY of actual element, while actual is test[index]
      // item = item + 100;
      // console.log("The updated element is "+item+" and actual is "+test[index]);
      test[index]=test[index]+100;
  }
  //else 
  //    console.log("Element "+item+" is not divisible by 3");
});
console.log(test);

//I got bills .map function
var bills = [50.23, 19.12, 34.01,
  100.11, 12.15, 9.90, 29.11, 12.99,
  10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];
var totals = bills.map(function (element) {
  element *= 1.15;
  element = element.toFixed(2);
  element = Number(element);

  return element;
});

/*
// Method 2
var totals = bills.map(function(element) {
  element *= 1.15;
  return Number(element.toFixed(2));
});
*/
console.log(totals);

//Nested Numbers
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

// Let i represents a sub-array
for(var i=0; i<numbers.length; i++){

  // Let j represents the length of a sub-array 
  for(var j=0; j<numbers[i].length; j++){
      if(numbers[i][j]%2===0)
          numbers[i][j]="even";
      else
          numbers[i][j]="odd";
  }
}

// Print the final array
console.log(numbers);