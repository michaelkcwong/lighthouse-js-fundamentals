// Basic While Loop that includes all three parts
var start = 0; // when to start
while (start < 10) { //when to stop
console.log(start);
start = start + 2; // how to get to the item
}

//JuliaJames Mixing Loops with If and else if statements
var x = 1;
while (x <= 20) {
  if (x % 3 === 0 && x % 5 === 0) {
    console.log("JuliaJames");
  } else if (x % 5 === 0) {
    console.log("James");
  } else if (x % 3 === 0) {
    console.log("Julia");
  }
  else {
    console.log(x);
  }
  //increment x at the end of each loop
  x = x + 1 ;
}

// 99 Bottles of Juice
var num = 99;
while (num >=1) { //Last iteration. Note occurances of bottle, bottle, bottleS
  if (num === 1) {
    console.log(num + " bottle of juice on the wall! "
    + num + "bottle of juice! Take one down, pass it around..." 
    + (num-1) + "bottles of juice on the wall!");
  }
  else if (num === 2) { //Second iteration. Note occurances of bottleS, bottleS, bottle
    console.log(num + " bottles of juice on the wall!" 
    + num + "bottles of juice! Take one down, pass it around..." 
    + (num-1) + "bottle of juice on the wall");
  }
  else { // All other iterations. Note occurances of bottleS, bottleS, bottleS
    console.log(num + "bottles of juice on the wall " 
    + num + "bottles of juice! Take one down, pass it around..."
    + (num-1) + "bottles of juice on the wall"); {
    }
    num = num - 1;
  }
//num = num - 1 --> num--;
//num = num + 1 --> num++;

//2nd way
// var isNinetyNine = false;
// var bottle = 99;

// while (isNinetyNine === false){
//   if (bottle==0){
//     isNinetyNine = true;
//   } else {
//     if (bottle==1){
//             console.log(bottle + " bottle of juice on the wall! "
//     + bottle + "bottle of juice! Take one down, pass it around..." 
//     + (bottle-1) + " bottle of juice on the wall!");
//     } else if (bottle==2) {
//                     console.log(bottle + " bottles of juice on the wall! "
//     + bottle + "bottles of juice! Take one down, pass it around..." 
//     + (bottle-1) + " bottle of juice on the wall!");
//     }
//     else{
//             console.log(bottle + " bottles of juice on the wall! "
//     + bottle + "bottles of juice! Take one down, pass it around..." 
//     + (bottle-1) + " bottles of juice on the wall!");
//     }

//   }

//   bottle--;
// }

//Countdown, Liftoff!
var x = 60;
while (x >= 0) {
  if (x === 50) {
    console.log("Orbiter transfers from ground to internal power");
  }
  else if (x === 31) {
    console.log("Ground launch sequencer is go from auto sequence start");
  }
  else if (x === 16) {
    console.log("Activate launch pad sound suppression system");
  }
  else if (x === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  }
  else if (x === 6) {
    console.log("Main engine start");
  }
  else if (x === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  }
  else {
    console.log("T-"+x+" seconds");
  }
  x--;
}

