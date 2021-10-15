let sum = 3 + 2;

const doubleSum = function(a, b) {
  let sum = a + b;
  return sum * 2;
}

doubleSum(5, 4);

console.log(sum);

const areMultiples  = function (bigNumber, smallNumber) {
  return bigNumber % smallNumber === 0;
}

console.log(areMultiples(15, 4));

const countdown = [3,2,1];
console.log(countdown[1]);

const seasons = ["spring", "summer", "fall"];
const length = seasons.length;

seasons.push("winter");

console.log(length);
console.log(seasons.length);

const vacationDays = 2 + 3;

if (vacationDays <= 5) {
  console.log("Not enough for a long vacation.");
} else if (vacationDays === 5) {
  console.log("We can take a whole week off, not bad.");
} else {
  console.log("We're gonna have a great time!");
}