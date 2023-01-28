export default function lineEncoding(s: string): string {
  const newArray = [s[0]];
  let index = 0;
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      newArray[index] = newArray[index] + s[i]
    } else {
      newArray.push(s[i]);
      index += 1;
    }
  }
  const calculateAmount = newArray.map(letter => {
    if (letter.length === 1) {
      return letter
    } else {
      return [letter.length] + letter[0];
    }
  })
  return calculateAmount.join("");
}
