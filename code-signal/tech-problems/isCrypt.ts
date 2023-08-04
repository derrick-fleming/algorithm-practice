function isCrypt(crypt: string[], solution: string[][]): boolean {
  const key = {};
  const length = solution.length;
  for (let i = 0; i < length; i++) {
    key[solution[i][0]] = solution[i][1];
  }

  console.log(key);

  let newCrypt = [];


  crypt.forEach(word => {
    let phrase = "";
    for (let i = 0; i < word.length; i++) {
      let value = key[word[i]];
      phrase += value;
    }
    newCrypt.push(phrase);
  });

  if (newCrypt[0].length > 1 && newCrypt[0][0] === "0") return false;
  if (newCrypt[1].length > 1 && newCrypt[1][0] === "0") return false;
  if (newCrypt[2].length > 1 && newCrypt[2][0] === "0") return false;

  if (+newCrypt[0] + +newCrypt[1] === +newCrypt[2]) return true;

  return false;

}
