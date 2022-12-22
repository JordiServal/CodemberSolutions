function decorateTree(base) {
  const pairs = {
    P: { P: 'P', R: 'B', B: 'R' },
    R: { P: 'B', R: 'R', B: 'P' },
    B: { P: 'R', R: 'P', B: 'B' },
  }
  const tree = [base.split(' ')]
  while (tree[0].length > 1) {
    const layer = []
    tree[0].forEach((item, index) => {
      if (index > 0) {
        layer.push(pairs[item][last])
      }
      last = item
    })
    tree.unshift(layer)
  }
  return tree.map(l => l.join(' '))
}

console.log(decorateTree('B P R P'))