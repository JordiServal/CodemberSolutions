const getInput = async (url) => await fetch(url).then((res) => res.text());

const killRound = (players, alive) => {
  return [players.map((player, i) => {
    if(player !== false) {
      if(alive) {
        alive = false;
        return false
      }
      alive = true;
    }
    return player;
  }), alive];
}

const hungerGames = async () => {
  // const input = "[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]";
  const input = await getInput("https://codember.dev/mecenas.json");
  let players = JSON.parse(input);
  let alive = false;
  do {
    [players, alive] = killRound(players, alive);

  } while (players.filter((p) => p !== false).length > 1);
  const winner = players.filter((p) => p !== false)[0];
  return {winner, index: players.indexOf(winner)};
}

const valid = hungerGames();
Promise.resolve(valid).then((res) => {
  console.log(res);
});
