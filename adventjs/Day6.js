/**
 * Cube 3
  /\_\_\_\
 /\/\_\_\_\
/\/\/\_\_\_\
\/\/\/_/_/_/
 \/\/_/_/_/
  \/_/_/_/ 
 */

function createCube(size) {
  let cube = '', cubeWidth = size*3, pair = size % 2 === 0
  for(let x = 1; x <= size; x++) {
    for(let y = 1; y <= cubeWidth + x; y++) {
      if(y < size+x) { // top left
        if(y < size+1-x) cube += ' '
        else if(Math.abs(x-y) % 2 === 0) cube += pair ? '\\' : '/'
        else cube += pair ? '/' : '\\'
      } else { //top right
        if(Math.abs(x-y) % 2 !== 0) cube += pair ? '_' : '\\'
        else cube += pair ? '\\' : '_'
      }
    }
    cube += '\n'
  }
  // bottom
  for(let x = size; x >= 1; x--) {
    for(let y = 1; y <= cubeWidth + x; y++) {
      if(y < size+1+x) { // bottom left
        if(y < size+1-x) cube += ' '
        else if(Math.abs(x-y) % 2 === 0) cube += pair ? '/' : '\\'
        else cube += pair ? '\\' : '/'
      } else { //bottom right
        if(Math.abs(x-y) % 2 !== 0) cube += pair ? '_' : '/'
        else cube += pair ? '/' : '_'
      }
    }
    cube += x === 1 ? '' : '\n'
  }
  return cube
}

console.log(createCube(1))
console.log('------------')
console.log(createCube(2))
// console.log('------------')
// console.log(createCube(3))
// console.log('------------')
// console.log(createCube(4))
// console.log('------------')
// console.log(createCube(5))