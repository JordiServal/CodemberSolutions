const getInput = async (url) => await fetch(url).then((res) => res.text());

const countZebra = async () => {
  const input = await getInput("https://codember.dev/colors.txt");
  // const input = '["red", "green", "red", "green", "red", "green"]'
  return JSON.parse(input).reduce((acc, curr) => {
    if(acc.pair.length < 2) {
      acc.pair.push(curr);
    } else {
      const prev = acc.pair.shift();
      acc.pair.push(curr);
      if(prev === curr) {
        acc.count++;
      } else {
        if(acc.count > acc.max) {
          acc.max = acc.count;
          acc.last = acc.pair[0];
        }
        acc.count = 2;
      }
    }
    return acc;
  }, {pair: [], count: 2, max: 0, last: ''});
}

const valid = countZebra();
Promise.resolve(valid).then((res) => {
  console.log(res);
});
