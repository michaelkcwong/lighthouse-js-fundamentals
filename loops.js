//While Loops
/*var x = 1;
while (x <= 10) {
  console.log(x + " mississippi!");
  x = x + 1;
} */

/*var start = 0; // when to start
while (start < 10) { // when to stop
  console.log(start);
  start = start + 2; // how to get to the next item
}
*/

/*
var x = 10;
while (x <= 25) {
  console.log('Printing out x = ' + x);
  x = x + 2;
}
*/

/*
let x = 1
while (x <= 20) {
  if (x % 3 === 0 && x % 5 ===0){
    console.log("JuliaJames");
  } else if (x % 3 === 0) {
    console.log("Julia");
  } else if (x % 5 === 0) {
    console.log("James");
  } else {
    console.log(x);
  }
    x = x + 1;
  }
  */
/*
  let num = 99;
  while (num >= 1) {
    //Last iteration. Note occurances of bottle, bottle, bottleS
    if (num === 1) {
      console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around.. " + (num-1) + " bottles of juice on the wall!");
    }
    //Second-last iteration. Note occurances of bottleS, bottleS, bottle
    else if (num === 2) {
      console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around. " + (num-1) + " bottle of juice on the wall!");
    }
    //All other iterations. Note occurances of bottleS, bottleS, bottleS
    else {
      console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around.  " + (num-1) + " bottles of juice on the wall!");
    }
    num = num - 1;
  }
  */
/*
  let x = 60;
  while (x >= 0) {
    //T-x sequences
    if(x === 50) {
      console.log("Orbiter transfers from ground to internal power (T-50 seconds)")
    } else if (x === 31) {
      console.log("Ground launch sequencer is go for auto sequence start (T-31 seconds)")
    } else if (x === 16) {
      console.log("Activate launch pad sound suppression system (T-16 seconds)")
    } else if (x === 10) {
      console.log("Activate main engine hydrogen burnoff system (T-10 seconds)")
    } else if (x === 6) {
      console.log("Main engine start (T-6 seconds)")
    } else if (x === 0) {
      console.log("Solid rocket booster ignition and liftoff! (T-0 seconds)")
    } else {
      console.log("T-" + x + " seconds " )
    }
    x = x - 1;
  }
*/

//For loops

//for (start; stop; step) {
  //do this thing
//}

/*for (var i = 0; i < 6; i = i + 1) {
  console.log("Printing out i = " + i);
}
*/

/*Nested Loops
for (var x = 0; x < 5; x = x + 1) {
  for (var y = 0; y < 3; y = y + 1) {
    console.log(x + "," + y);
  }
}
*/

/*while to for loop
var x = 9;
while (x >= 1) {
  console.log("hello " + x);
  x = x - 1
}
*/

/*
for (var x = 9; x >= 1; x--) {
console.log("hello " + x);
}
*/

/*
for (x = 5; x <10; x++) {
  console.log(x);
}
*/

/*
for (var k = 0; k < 200; k++) {
  console.log(k);
}
*/

/*
let solution = 1
for (let i = 1; i <= 12; i++) {
  solution *= i;
}
console.log(solution);
*/

/*
for (var x = 0; x <= 25; x++) {
  for (var y = 0; y <= 99; y++) {
    console.log(x + "," + y);
  }
}
*/

/*
let x = 100;
while (x <= 200) {
  if(x % 3 === 0 && x % 4 === 0) {
    console.log("LoopyLighthouse")
  } else if (x % 4 === 0) {
    console.log("Lighthouse")
  } else if (x % 3 === 0) {
    console.log("Loopy")
  } else {
    console.log(x);
  }
  x++
}


var x = 100
for (var x = 100; x <= 200; x++) {
	if (x % 3 === 0 && x % 4 === 0) {
		console.log("LoopyLighthouse"); 
	} else if (x % 3 === 0) {
		console.log("Loopy");  
	} else if (x % 4 === 0) {
		console.log("Lighthouse"); 
	} else console.log(x); 

	x++ }
  */

