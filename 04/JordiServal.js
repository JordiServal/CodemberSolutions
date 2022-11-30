
const initial = 11098
const final = 98123

const checkPassword = (password) => {
  if(password.length !== 5) return false
  if(password.filter((c) => c === '5').length < 2) return false
  return !!password.reduce((acc, c) => acc && parseInt(c) >= parseInt(acc) ? c : false)
}

let cont = 0
let pos = 0
for(let i = initial; i <= final; i++) {
  if(checkPassword(i.toString().split(''))) {
    cont ++
    if(cont === 56) pos = i
  } 
}
console.log(cont + "-" + pos)