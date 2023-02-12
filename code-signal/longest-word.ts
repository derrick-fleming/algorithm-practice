export default function longestWord(text: string): string {
  const isChar = /[a-zA-Z]+/g;
  const array = text.match(isChar);
  const sort = array.sort((a, b) => b.length - a.length)
  return sort[0];
}
