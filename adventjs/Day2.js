function countHours(year, holidays) {
  return holidays.reduce((acc, day) => {
    const weekDay = new Date(`${day}/${year}`).getDay()
    return (weekDay > 0 && weekDay < 6) ? acc + 2 : acc
  }, 0)
}

console.log(countHours(2023, ['01/06', '04/01', '12/25']))
console.log(countHours(2022, ['01/06', '04/01', '12/25']))
console.log(countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']))
console.log(countHours(2000, ['01/01']))