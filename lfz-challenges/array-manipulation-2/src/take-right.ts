/* exported takeRight */
export default function takeRight (arr: readonly any[], number: number ) {
  if (number > arr.length) return arr;
  return arr.slice(arr.length - number);
}
