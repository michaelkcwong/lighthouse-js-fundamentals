//concat function
function concat (array1, array2) {
  let array3 = [];
  array3 = array1.concat(array2);
  return array3;
}

//use for loop
function concat (array1, array2) {
  for (var i = 0; i < array2.length; i++) {
    array1.push(array2[i]);
  }
  return array1;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);