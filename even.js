const isEven = function (num) {
  return num % 2 === 0;
}

console.log(isEven(10));

const isEven  = function (num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);