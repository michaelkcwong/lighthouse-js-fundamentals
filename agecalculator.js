function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth
  return name + ' is ' + age + ' years old.'
}

console.log(ageCalculator("Miranda", 1983, 2015));
