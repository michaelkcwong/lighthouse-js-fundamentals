function howManyHundreds(number) {
  let x = number;
  let y = number % 100;
  let z = x - y;
  return z / 100;
}

console.log(howManyHundreds(1000), "=?", 10);