export default function numNowels(string: string) {
  const splitString = string.toLowerCase().split('');
  const regEx = /[aeiou]/;
  const filter = splitString.filter(letter => regEx.test(letter));
  return filter.length;
}
