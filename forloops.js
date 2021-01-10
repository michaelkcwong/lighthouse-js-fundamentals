/*Parts of a forloop
for ( start; stop; step) {
  //do this thing
} */


//example 
for (var i = 0; i < 6; i = i +1) {
  console.log("Printing out i = ' + i");
}

//Nested Loops
for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}

//Changing the loop (While loop to for loop)
var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}

for (var x = 9; x>=1; x--) {
    console.log("hello " + x);
}

//Print numbers 5 through 9
for (var x = 5; x < 10; x++) {
  console.log(x);
}

//factorial of number 12
let solution = 1;

for (let i = 1; i <= 12; i++) {
  solution *= i;
}

console.log(solution);

//Find my seat (25 rows and 100 seats)
for (var x = 0; x <= 25; x++) {
  for (var y = 0; y <= 99; y++) {
    console.log(x + "-" + y);
  }
}

var row = 0;  // initial value of the row
var seat = 0; // initial value of the seat within a row

// One loop inside another is called Nested loop.
// Outer `for` loop, to iterate over the rows
for (row = 0; row <= 25; row++){

    // Inner `for` loop, to iterate over the seats within a row
    // In this loop, the value of `row` variable would change only after 100 iterations
    for(seat = 0; seat <= 99; seat++){
        console.log(row+"-"+seat);
    }
  }

  