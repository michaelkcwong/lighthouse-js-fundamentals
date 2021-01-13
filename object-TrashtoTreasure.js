const smartGarbage = function(trash, bins) {
  const binNames = Object.keys(bins);
  for (let i of binNames) {
    if (i === trash) {
      bins[i] += 1;
    }
  }
  return bins;
  };
  
  console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 }));