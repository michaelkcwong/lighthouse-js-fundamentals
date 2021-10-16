//way 1
const smartGarbage = (trash, bins) => {
  let updatedBins = bins;

  if(trash === 'waste') {
    updatedBins.waste++;
  }
  else if (trash === 'recycling') {
    updatedBins.recycling++;
  } else if (trash === 'compost') {
    updatedBins.compost++;
  }

  return updatedBins;
};

//way 2
function smartGarbage(trash, bins) {
  let updatedBins = {};
  let keys = Object.keys(bins);
  let values = Object.values(bins);
  for (let index = 0; index < keys.length; index++) {
    if (keys[index] === trash) {
      values[index] += 1;
    }
  }
  keys.forEach((key, value) => updatedBins[key] = values[value]);
  return updatedBins;
}