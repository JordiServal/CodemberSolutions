const getInput = async (url) => await fetch(url).then((res) => res.text());


const checkUsers = async () => {
  const input = await getInput("https://codember.dev/encrypted.txt");

  return input.split(" ").map(word => word.split("").reduce((acc, char) => {
    acc.current += char;
    const num = parseInt(acc.current);
    if (num >= 97 && num <= 122) {
      acc.word += String.fromCharCode(num);
      acc.current = "";
    }
    return acc;
  }, {word: "", current: ""}).word).join(" ");
}

const valid = checkUsers();
Promise.resolve(valid).then((res) => {
  console.log(res);
});
