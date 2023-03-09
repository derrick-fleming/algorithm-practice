/* exported dropRight */
export default function dropRight (arr: readonly any[], count: number) {
  return arr.slice(0, arr.length - count);
}
