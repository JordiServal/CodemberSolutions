const fitsInOneBox = (boxes) => {
  boxes = boxes.sort((a, b) => {
    if(a.l < b.l) return -1
    if(a.w < b.w) return -1
    if(a.h < b.h) return -1 
    return 1
  })
  return !!boxes.reduce((prev, curr) => {
    if(prev.l < curr.l && prev.w < curr.w && prev.h < curr.h) return curr
    return false
  })
}




console.log(fitsInOneBox([
  { l: 2, w: 2, h: 2 },
  { l: 1, w: 1, h: 1 }
]))

console.log(fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 3, w: 1, h: 3 }
]))
console.log(fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 2, w: 2, h: 2 },
  { l: 2, w: 10, h: 2}
]))
console.log(fitsInOneBox([
  { l: 1, w: 1, h: 1 },
  { l: 3, w: 3, h: 3 },
  { l: 2, w: 2, h: 2 }
]))
