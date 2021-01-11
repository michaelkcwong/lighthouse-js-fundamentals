var numberCount = 100;

for (var i = 100; i <= 200; i++) {

  if (numberCount % 3 === 0 && numberCount % 4 === 0) {
    console.log("LoopyLighthouse");
  } else if (numberCount % 3 === 0) {
    console.log("Loopy");
  } else if (numberCount % 4 === 0) {
    console.log("Lighthouse");
  } else {
    console.log(numberCount);
  }

 numberCount++;
}