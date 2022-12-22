const combinations = (set, k) => {
  var i, j, combs, head, tailcombs;
  if (k > set.length || k <= 0) {
    return [];
  }
  if (k == set.length) {
    return [set];
  }
  if (k == 1) {
    combs = [];
    for (i = 0; i < set.length; i++) {
      combs.push([set[i]]);
    }
    return combs;
  }
  combs = [];
  for (i = 0; i < set.length - k + 1; i++) {
    head = set.slice(i, i+1);
    tailcombs = combinations(set.slice(i + 1), k - 1);
    for (j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
}

const powerSet = array => array.reduce((subsets, value) =>
  subsets.concat(
    subsets.map(set => [value,...set])
  )
,[[]])

function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const max = combinations(giftsCities, maxCities).map((gifts) => gifts.reduce((a, b) => a + b)).sort((a, b) => b - a).find((gifts) => gifts <= maxGifts)
  if(!max && maxCities) return getMaxGifts(giftsCities, maxGifts, maxCities - 1)
  return max || 0
}


console.log(getMaxGifts([12, 3, 11, 5, 7], 20, 3) )
console.log(getMaxGifts([50], 15, 1) )
console.log(getMaxGifts([50], 100, 1) )
console.log(getMaxGifts([50, 70], 100, 1) )
console.log(getMaxGifts([50, 70, 30], 100, 2) )
console.log(getMaxGifts([50, 70, 30], 100, 3) )
console.log(getMaxGifts([50, 70, 30], 100, 4) )