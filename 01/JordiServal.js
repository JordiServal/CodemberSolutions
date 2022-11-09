const getInput = async (url) => await fetch(url).then((res) => res.text());

const fields = [
  "usr",
  "eme",
  "psw",
  "age",
  "loc",
  "fll",
]

const checkUsers = async () => {
  const input = await getInput("https://codember.dev/users.txt");
  return input.split("\n\n").reduce((total, user) => {
    const customFields = [...fields];
    const validFields = user.split("\n").reduce((valid, line) => {
      line.split(" ").forEach((field) => {
        const [key, value] = field.split(":");
        if (customFields.includes(key)) {
          valid.count ++;
          customFields.splice(customFields.indexOf(key), 1);
        }
        if(key === "usr") {
          valid.usr = value;
        }
      });
      return valid
    }, {count: 0, usr: ""});
    if(validFields.count === fields.length) {
      total.push(validFields);
    }
    return total
  }, []);
}

const valid = checkUsers();
Promise.resolve(valid).then((res) => {
  console.log(res.length);
  console.log(res[res.length-1].usr)
});
