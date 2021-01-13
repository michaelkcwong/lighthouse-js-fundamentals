const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]
//characteristic to judge the veggies by
const metric = 'redness';

const judgeVegetable = function(vegetables, metric) {
  let value = 0
  let submitter = "";
  //loop through vegetables array of objects + update redness if it's < than vegetables[i].redness
  //conditionals to check what kind of metric to judge the new vegetable by
  for (let i = 0; i < vegetables.length; i++) {
    if (value < vegetables[i][metric]) {
      value = vegetables[i][metric];
      submitter = vegetables[i].submitter;
    }
  }
  return submitter;
}

//use function and console log the returned submitter with the highest score of that veggie
console.log(judgeVegetable(vegetables, metric));