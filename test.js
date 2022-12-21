const reindeerTypes2 = [
  { type: 'Nuclear', weightCapacity: 50 },
  { type: 'Electric', weightCapacity: 10 },
  { type: 'Gasoline', weightCapacity: 5 },
  { type: 'Diesel', weightCapacity: 1 }
]

const gifts2 = [
  { country: 'Spain', weight: 30 },
  { country: 'France', weight: 17 },
  { country: 'Italy', weight: 50 }
]

// [{
//   country: 'Spain',
//   reindeers: [
//     { type: 'Electric', num: 1 },
//     { type: 'Gasoline', num: 3 },
//     { type: 'Diesel', num: 5 }
//   ]
// }, {
const howManyReindeers = (reindeerTypes, gifts) => {
  return gifts.map(({country, weight}) => {
    let reindeers = []
    // do  {
      let weightLeft = weight
      reindeers = reindeerTypes.map(({type, weightCapacity}, index) => {
        let num = Math.floor(weightLeft / weightCapacity)
        weightLeft = weightLeft % weightCapacity
        return {type, num}
      }).filter(({num}) => num > 0)
    // } while (!!reindeers.reduce((acc, {num}) => acc && acc < num ? num : false))
    return {
      country,
      reindeers
    }
  })
}

console.log(howManyReindeers(reindeerTypes2, gifts2).map(({country, reindeers}) => reindeers))
