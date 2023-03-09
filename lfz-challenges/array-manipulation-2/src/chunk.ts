/* exported chunk */
export default function chunk(arr: readonly any[], number: number) {
  let output = [];
  let sections = Math.ceil(arr.length / number);
  let index = 0;
  for (let i = 0; i < sections; i++) {
    let innerArr = [];
    for (let i = index; i < arr.length; i++) {
      if (innerArr.length < number) {
        innerArr.push(arr[i])
      } else {
        break;
      }
    }
    output.push(innerArr);
    index = index + number;
  }
  return output;
}
