export default function firstDuplicate(a: number[]): number {
  const duplicateCheck = {};
  const arrayLength = a.length;
  for (let i = 0; i < arrayLength; i++) {
    let number = a[i];
    if (duplicateCheck[number]) {
      return a[i];
    } else {
      duplicateCheck[number] = i + 1;
    }
  }
  return -1;

}
