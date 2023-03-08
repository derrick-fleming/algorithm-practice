export default function ransomCase(string: string) {
  let ransom = '';
  for (let i = 0; i < string.length; i++) {
    const letter = i % 2 !== 0
      ? string[i].toUpperCase()
      : string[i].toLowerCase();
    ransom += letter;
  }
  return ransom;
}
