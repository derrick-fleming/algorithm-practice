/* exported lastChars */
export default function lastChars (number: number, string: string) {
  if (number > string.length) return string;
  return string.slice(string.length - number);
}
