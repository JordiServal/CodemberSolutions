const howManyReindeers = (reindeerTypes, gifts) => {
  reindeerTypes = reindeerTypes.sort((a, b) => b.weightCapacity - a.weightCapacity)
  return gifts.map(({country, weight}) => {
    let reindeers = JSON.parse(JSON.stringify(reindeerTypes))
    do {
      let weightLeft = weight, check = false
      reindeers = reindeers.map(({type, weightCapacity, num}, index) => {
        if(num !== undefined) {
          if(index < reindeers.length - 1 && num > reindeers[index + 1].num) {
            num -= 1
            check = true
          } else if(check){
            num = Math.floor(weightLeft / weightCapacity)
          }
        } else {
          num = Math.floor(weightLeft / weightCapacity)
        }
        if(index !== reindeers.length - 1 && weightLeft === num * weightCapacity && weightLeft > 0) {
          num -= 1
        }
        weightLeft = weightLeft - num * weightCapacity
        return {type, num, weightCapacity}
      })
    } while (!reindeers.reduce((acc, {num}) => acc !== false && acc <= num ? num : false, 0))
    return {
      country,
      reindeers: reindeers.map(({type, num}) => ({type, num})).filter(({num}) => num > 0)
    }
  })
}

console.log(
  howManyReindeers(
    [
      { type: 'Diesel', weightCapacity: 1 },
      { type: 'Gasoline', weightCapacity: 8 }
    ],
    [
      { country: 'Colombia', weight: 50 },
      { country: 'España', weight: 20 }
    ])
.map(({country, reindeers}) => reindeers))
